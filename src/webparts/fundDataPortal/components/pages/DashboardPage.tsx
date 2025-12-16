import * as React from 'react';
import { Stack, Text } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import AnimatedTile from '../ui/AnimatedTile';
import styles from './Pages.module.scss';

export default function DashboardPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Stack tokens={{ childrenGap: 16 }}>
      <Stack tokens={{ childrenGap: 6 }}>
        <Text variant="xLarge">Overview</Text>
        <Text variant="small" className={styles.muted}>
          Click any section to route to another page with the same visual language.
        </Text>
      </Stack>

      <div className={styles.grid}>
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
    </Stack>
  );
}
