import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption, ProgressIndicator, Stack, Text } from '@fluentui/react';
import SurfaceCard from '../ui/SurfaceCard';
import styles from './Pages.module.scss';

const RANGE_OPTIONS: IChoiceGroupOption[] = [
  { key: '7d', text: '7 days' },
  { key: '30d', text: '30 days' },
  { key: '90d', text: '90 days' }
];

export default function ReportsPage(): JSX.Element {
  const [range, setRange] = React.useState('30d');

  return (
    <Stack tokens={{ childrenGap: 14 }}>
      <Stack tokens={{ childrenGap: 6 }}>
        <Text variant="xLarge">Reports</Text>
        <Text variant="small" className={styles.muted}>
          Demo KPI/report layout with consistent styling and responsiveness.
        </Text>
      </Stack>

      <SurfaceCard>
        <Stack tokens={{ childrenGap: 10 }}>
          <Text variant="large">Report range</Text>
          <ChoiceGroup
            selectedKey={range}
            options={RANGE_OPTIONS}
            onChange={(_, opt) => setRange(String(opt?.key))}
          />
        </Stack>
      </SurfaceCard>

      <div className={styles.cardGrid}>
        <SurfaceCard>
          <Stack tokens={{ childrenGap: 10 }}>
            <Text variant="large">Data freshness</Text>
            <ProgressIndicator label="Ingestion" description="Demo pipeline" percentComplete={0.78} />
            <Text variant="small" className={styles.muted}>
              Range: {range}
            </Text>
          </Stack>
        </SurfaceCard>

        <SurfaceCard>
          <Stack tokens={{ childrenGap: 10 }}>
            <Text variant="large">Coverage</Text>
            <ProgressIndicator label="Fund coverage" description="Demo metric" percentComplete={0.62} />
            <Text variant="small" className={styles.muted}>
              Range: {range}
            </Text>
          </Stack>
        </SurfaceCard>

        <SurfaceCard>
          <Stack tokens={{ childrenGap: 10 }}>
            <Text variant="large">SLA</Text>
            <ProgressIndicator label="Requests within SLA" description="Demo metric" percentComplete={0.9} />
            <Text variant="small" className={styles.muted}>
              Range: {range}
            </Text>
          </Stack>
        </SurfaceCard>
      </div>

      <SurfaceCard>
        <Stack tokens={{ childrenGap: 10 }}>
          <Text variant="large">Notes</Text>
          <Text>
            This page is intentionally "chart-light" (no custom branding). If you want charts, we can plug in a React chart library later.
          </Text>
        </Stack>
      </SurfaceCard>
    </Stack>
  );
}
