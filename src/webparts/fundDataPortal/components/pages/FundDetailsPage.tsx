import * as React from 'react';
import { Breadcrumb, DefaultButton, Pivot, PivotItem, Stack, Text } from '@fluentui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { DEMO_FUNDS } from '../../data/demoData';
import SurfaceCard from '../ui/SurfaceCard';
import styles from './Pages.module.scss';

export default function FundDetailsPage(): JSX.Element {
  const navigate = useNavigate();
  const { fundId } = useParams();

  const fund = React.useMemo(() => DEMO_FUNDS.find((f) => f.id === fundId), [fundId]);

  if (!fund) {
    return (
      <Stack tokens={{ childrenGap: 12 }}>
        <Text variant="xLarge">Fund not found</Text>
        <Text variant="small" className={styles.muted}>
          The fund id "{fundId}" doesn’t exist in this demo.
        </Text>
        <DefaultButton text="Back to Funds" onClick={() => navigate('/funds')} />
      </Stack>
    );
  }

  return (
    <Stack tokens={{ childrenGap: 14 }}>
      <Breadcrumb
        items={[
          { text: 'Dashboard', key: 'home', onClick: () => navigate('/') },
          { text: 'Funds', key: 'funds', onClick: () => navigate('/funds') },
          { text: fund.name, key: 'current', isCurrentItem: true }
        ]}
      />

      <Stack horizontal horizontalAlign="space-between" verticalAlign="center" wrap tokens={{ childrenGap: 12 }}>
        <Stack tokens={{ childrenGap: 4 }}>
          <Text variant="xLarge">{fund.name}</Text>
          <Text variant="small" className={styles.muted}>
            Category: {fund.category} • Domicile: {fund.domicile} • AUM: {fund.aum} • Risk: {fund.risk}
          </Text>
        </Stack>
        <DefaultButton text="Back" onClick={() => navigate(-1)} />
      </Stack>

      <Pivot>
        <PivotItem headerText="Summary">
          <SurfaceCard>
            <Stack tokens={{ childrenGap: 10 }}>
              <Text>
                This is a demo fund details page. In a real portal, you’d load holdings, performance, fees, documents, and factsheets.
              </Text>
              <Stack horizontal wrap tokens={{ childrenGap: 12 }}>
                <SurfaceCard className={styles.miniCard}>
                  <Text variant="large">1Y Return</Text>
                  <Text variant="xxLarge">8.4%</Text>
                  <Text variant="small" className={styles.muted}>
                    Demo value
                  </Text>
                </SurfaceCard>
                <SurfaceCard className={styles.miniCard}>
                  <Text variant="large">Volatility</Text>
                  <Text variant="xxLarge">12.1%</Text>
                  <Text variant="small" className={styles.muted}>
                    Demo value
                  </Text>
                </SurfaceCard>
                <SurfaceCard className={styles.miniCard}>
                  <Text variant="large">Expense</Text>
                  <Text variant="xxLarge">0.68%</Text>
                  <Text variant="small" className={styles.muted}>
                    Demo value
                  </Text>
                </SurfaceCard>
              </Stack>
            </Stack>
          </SurfaceCard>
        </PivotItem>

        <PivotItem headerText="Holdings">
          <SurfaceCard>
            <Stack tokens={{ childrenGap: 8 }}>
              <Text>
                Holdings are intentionally mocked for the demo. Use your data source/API to render a real table here.
              </Text>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Top Holding A — 6.2%</li>
                <li>Top Holding B — 4.9%</li>
                <li>Top Holding C — 4.1%</li>
                <li>Top Holding D — 3.7%</li>
              </ul>
            </Stack>
          </SurfaceCard>
        </PivotItem>

        <PivotItem headerText="Documents">
          <SurfaceCard>
            <Stack tokens={{ childrenGap: 8 }}>
              <Text>Example documents section.</Text>
              <DefaultButton text="Open factsheet (demo)" onClick={() => window.alert('Demo: open factsheet')} />
              <DefaultButton text="Open prospectus (demo)" onClick={() => window.alert('Demo: open prospectus')} />
            </Stack>
          </SurfaceCard>
        </PivotItem>
      </Pivot>
    </Stack>
  );
}
