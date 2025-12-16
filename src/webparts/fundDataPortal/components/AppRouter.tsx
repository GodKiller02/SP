import * as React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import ResponsiveShell from './layout/ResponsiveShell';
import DashboardPage from './pages/DashboardPage';
import FundsPage from './pages/FundsPage';
import FundDetailsPage from './pages/FundDetailsPage';
import ReportsPage from './pages/ReportsPage';
import RequestsPage from './pages/RequestsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransition from './ui/PageTransition';

export interface IAppRouterProps {
  title: string;
}

function AnimatedRoutes(): JSX.Element {
  const location = useLocation();

  return (
    <PageTransition routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/funds/:fundId" element={<FundDetailsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  );
}

export default function AppRouter(props: IAppRouterProps): JSX.Element {
  return (
    <HashRouter>
      <ResponsiveShell title={props.title}>
        <AnimatedRoutes />
      </ResponsiveShell>
    </HashRouter>
  );
}
