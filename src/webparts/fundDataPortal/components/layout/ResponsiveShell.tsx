import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface IResponsiveShellProps {
  title: string;
  children: React.ReactNode;
}

const NAV_LINKS: Array<{ key: string; name: string; path: string; icon: string }> = [
  { key: 'dashboard', name: 'Dashboard', path: '/', icon: '🏠' },
  { key: 'funds', name: 'Funds', path: '/funds', icon: '📊' },
  { key: 'reports', name: 'Reports', path: '/reports', icon: '📄' },
  { key: 'requests', name: 'Requests', path: '/requests', icon: '✉️' },
  { key: 'settings', name: 'Settings', path: '/settings', icon: '⚙️' }
];

function routeToSelectedKey(pathname: string): string {
  if (pathname.startsWith('/funds')) return 'funds';
  if (pathname.startsWith('/reports')) return 'reports';
  if (pathname.startsWith('/requests')) return 'requests';
  if (pathname.startsWith('/settings')) return 'settings';
  return 'dashboard';
}

export default function ResponsiveShell(props: IResponsiveShellProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = routeToSelectedKey(location.pathname);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="fdpShell">
      <header className="fdpTopbar">
        <div className="fdpTopbarInner">
          <button
            type="button"
            className="fdpBtn fdpHamburger"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            ☰
          </button>

          <div className="fdpBrand">
            <h1 className="fdpTitle">{props.title}</h1>
            <p className="fdpSubtitle">SPA demo • Responsive • Routed pages • react-hook-form</p>
          </div>

          <div className="fdpTopActions">
            <button
              type="button"
              className="fdpBtn"
              onClick={() =>
                window.open(
                  'https://learn.microsoft.com/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts',
                  '_blank'
                )
              }
            >
              Help
            </button>
          </div>
        </div>
      </header>

      <div className="fdpBody">
        <aside className="fdpSidebar" aria-label="Primary navigation">
          <nav className="fdpNav">
            {NAV_LINKS.map((l) => (
              <a
                key={l.key}
                href={`#${l.path}`}
                className={[
                  'fdpNavItem',
                  l.key === selectedKey ? 'fdpNavItemActive' : ''
                ].join(' ')}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(l.path);
                }}
              >
                <span className="fdpNavIcon" aria-hidden="true">
                  {l.icon}
                </span>
                <span className="fdpNavText">{l.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        <main className="fdpContent" aria-label="Page content">
          {props.children}
        </main>
      </div>

      <div
        className={['fdpDrawerOverlay', drawerOpen ? 'fdpDrawerOverlayOpen' : ''].join(' ')}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <div className={['fdpDrawer', drawerOpen ? 'fdpDrawerOpen' : ''].join(' ')}>
        <div className="fdpDrawerHeader">
          <p className="fdpDrawerTitle">Navigate</p>
          <button type="button" className="fdpBtn" onClick={() => setDrawerOpen(false)} aria-label="Close navigation">
            ✕
          </button>
        </div>
        <nav className="fdpNav">
          {NAV_LINKS.map((l) => (
            <a
              key={l.key}
              href={`#${l.path}`}
              className={[
                'fdpNavItem',
                l.key === selectedKey ? 'fdpNavItemActive' : ''
              ].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setDrawerOpen(false);
                navigate(l.path);
              }}
            >
              <span className="fdpNavIcon" aria-hidden="true">
                {l.icon}
              </span>
              <span className="fdpNavText">{l.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
