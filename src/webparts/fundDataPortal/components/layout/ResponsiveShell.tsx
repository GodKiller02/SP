import * as React from 'react';
import {
  CommandBar,
  ICommandBarItemProps,
  IconButton,
  Nav,
  Panel,
  PanelType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ResponsiveShell.module.scss';

export interface IResponsiveShellProps {
  title: string;
  children: React.ReactNode;
}

const NAV_LINKS = [
  { key: 'dashboard', name: 'Dashboard', url: '#/', icon: 'ViewDashboard' },
  { key: 'funds', name: 'Funds', url: '#/funds', icon: 'Financial' },
  { key: 'reports', name: 'Reports', url: '#/reports', icon: 'ReportDocument' },
  { key: 'requests', name: 'Requests', url: '#/requests', icon: 'Send' },
  { key: 'settings', name: 'Settings', url: '#/settings', icon: 'Settings' }
];

function routeToSelectedKey(pathname: string): string {
  if (pathname.startsWith('/funds')) return 'funds';
  if (pathname.startsWith('/reports')) return 'reports';
  if (pathname.startsWith('/requests')) return 'requests';
  if (pathname.startsWith('/settings')) return 'settings';
  return 'dashboard';
}

export default function ResponsiveShell(props: IResponsiveShellProps): JSX.Element {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = routeToSelectedKey(location.pathname);

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const farItems: ICommandBarItemProps[] = [
    {
      key: 'help',
      text: 'Help',
      iconOnly: true,
      iconProps: { iconName: 'Help' },
      onClick: () => window.open('https://learn.microsoft.com/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts', '_blank')
    }
  ];

  const items: ICommandBarItemProps[] = [
    {
      key: 'menu',
      iconOnly: true,
      iconProps: { iconName: 'GlobalNavButton' },
      onClick: () => setIsNavOpen(true)
    }
  ];

  return (
    <div className={styles.shell} style={{ background: theme.palette.neutralLighterAlt }}>
      <div className={styles.topBar}>
        <CommandBar
          items={items}
          farItems={farItems}
          ariaLabel="Fund data portal command bar"
          styles={{
            root: { borderBottom: `1px solid ${theme.palette.neutralLight}`, background: theme.palette.white },
            primarySet: { minHeight: 52 },
            secondarySet: { minHeight: 52 }
          }}
        />
        <div className={styles.titleRow}>
          <Text variant="xLarge" className={styles.title}>
            {props.title}
          </Text>
          <Text variant="small" className={styles.subtitle}>
            Demo SPA (SPFx) • Responsive • Routed pages • Forms
          </Text>
        </div>
      </div>

      <div className={styles.body}>
        <nav className={styles.leftNav} aria-label="Primary navigation">
          <Nav
            selectedKey={selectedKey}
            groups={[{ links: NAV_LINKS }]}
            onLinkClick={(ev, item) => {
              ev?.preventDefault();
              if (item?.url) {
                const hash = item.url.replace('#', '');
                navigate(hash);
              }
            }}
          />
        </nav>

        <main className={styles.content} aria-label="Page content">
          <div className={styles.contentInner}>{props.children}</div>
        </main>
      </div>

      <Panel
        isOpen={isNavOpen}
        type={PanelType.smallFixedNear}
        onDismiss={() => setIsNavOpen(false)}
        headerText="Navigate"
        closeButtonAriaLabel="Close navigation"
      >
        <Stack tokens={{ childrenGap: 8 }}>
          {NAV_LINKS.map((l) => (
            <Stack horizontal verticalAlign="center" key={l.key} className={styles.mobileLinkRow}>
              <IconButton
                iconProps={{ iconName: l.icon }}
                ariaLabel={l.name}
                onClick={() => {
                  setIsNavOpen(false);
                  navigate(l.url.replace('#', ''));
                }}
              />
              <Text
                role="button"
                tabIndex={0}
                onClick={() => {
                  setIsNavOpen(false);
                  navigate(l.url.replace('#', ''));
                }}
                className={styles.mobileLinkText}
              >
                {l.name}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Panel>
    </div>
  );
}
