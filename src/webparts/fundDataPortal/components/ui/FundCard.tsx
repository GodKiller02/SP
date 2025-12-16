import * as React from 'react';
import { Icon, Stack, Text, useTheme } from '@fluentui/react';
import { IFund } from '../../data/demoData';
import SurfaceCard from './SurfaceCard';
import styles from './FundCard.module.scss';

export interface IFundCardProps {
  fund: IFund;
  onOpen: (fundId: string) => void;
}

function riskColor(risk: IFund['risk'], theme: ReturnType<typeof useTheme>): string {
  switch (risk) {
    case 'Low':
      return theme.palette.green;
    case 'Medium':
      return theme.palette.yellow;
    case 'High':
      return theme.palette.red;
    default:
      return theme.palette.neutralSecondary;
  }
}

export default function FundCard(props: IFundCardProps): JSX.Element {
  const theme = useTheme();

  return (
    <SurfaceCard onClick={() => props.onOpen(props.fund.id)} className={styles.card}
      >
      <Stack tokens={{ childrenGap: 10 }}>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 10 }}>
          <Icon iconName="Financial" styles={{ root: { fontSize: 18, color: theme.palette.neutralPrimary } }} />
          <Text variant="large" className={styles.title}>
            {props.fund.name}
          </Text>
        </Stack>

        <Stack horizontal wrap tokens={{ childrenGap: 12 }} className={styles.metaRow}>
          <Text variant="small" className={styles.meta}>
            Category: <b>{props.fund.category}</b>
          </Text>
          <Text variant="small" className={styles.meta}>
            Domicile: <b>{props.fund.domicile}</b>
          </Text>
          <Text variant="small" className={styles.meta}>
            AUM: <b>{props.fund.aum}</b>
          </Text>
        </Stack>

        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
          <span className={styles.dot} style={{ background: riskColor(props.fund.risk, theme) }} />
          <Text variant="small" className={styles.meta}>
            Risk: <b>{props.fund.risk}</b>
          </Text>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}
