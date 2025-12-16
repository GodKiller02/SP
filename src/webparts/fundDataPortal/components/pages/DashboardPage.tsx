import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedTile from '../ui/AnimatedTile';

export default function DashboardPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Overview</h2>
          <p className="fdpMuted">Click any section to route to another page with the same layout.</p>
        </div>
      </div>

      <div className="fdpGrid">
        <AnimatedTile
          title="Funds"
          description="Browse funds, search, and open details."
          iconName="Financial"
          onClick={() => navigate('/funds')}
        />
        <AnimatedTile
          title="Reports"
          description="See demo KPIs, charts, and export actions."
          iconName="ReportDocument"
          onClick={() => navigate('/reports')}
        />
        <AnimatedTile
          title="Requests"
          description="Submit a data request (react-hook-form demo)."
          iconName="Send"
          onClick={() => navigate('/requests')}
        />
        <AnimatedTile
          title="Settings"
          description="Update preferences (responsive form demo)."
          iconName="Settings"
          onClick={() => navigate('/settings')}
        />
      </div>
    </div>
  );
}
