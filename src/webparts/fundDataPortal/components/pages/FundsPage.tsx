import * as React from 'react';
import { Dropdown, IDropdownOption, SearchBox, Stack, Text } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import { DEMO_FUNDS, IFund } from '../../data/demoData';
import FundCard from '../ui/FundCard';
import styles from './Pages.module.scss';

const CATEGORY_OPTIONS: IDropdownOption[] = [
  { key: 'All', text: 'All categories' },
  { key: 'Equity', text: 'Equity' },
  { key: 'Fixed Income', text: 'Fixed Income' },
  { key: 'Balanced', text: 'Balanced' },
  { key: 'Alternatives', text: 'Alternatives' }
];

const RISK_OPTIONS: IDropdownOption[] = [
  { key: 'All', text: 'All risk levels' },
  { key: 'Low', text: 'Low' },
  { key: 'Medium', text: 'Medium' },
  { key: 'High', text: 'High' }
];

export default function FundsPage(): JSX.Element {
  const navigate = useNavigate();

  const [q, setQ] = React.useState('');
  const [category, setCategory] = React.useState<string>('All');
  const [risk, setRisk] = React.useState<string>('All');

  const filtered: IFund[] = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return DEMO_FUNDS.filter((f) => {
      const matchesQuery = !query || f.name.toLowerCase().includes(query) || f.id.toLowerCase().includes(query);
      const matchesCategory = category === 'All' || f.category === category;
      const matchesRisk = risk === 'All' || f.risk === risk;
      return matchesQuery && matchesCategory && matchesRisk;
    });
  }, [q, category, risk]);

  return (
    <Stack tokens={{ childrenGap: 14 }}>
      <Stack tokens={{ childrenGap: 6 }}>
        <Text variant="xLarge">Funds</Text>
        <Text variant="small" className={styles.muted}>
          Demo fund list. Click a card to route to Fund Details.
        </Text>
      </Stack>

      <Stack horizontal wrap tokens={{ childrenGap: 12 }}>
        <SearchBox
          placeholder="Search funds"
          styles={{ root: { width: 320, maxWidth: '100%' } }}
          onChange={(_, v) => setQ(v || '')}
          value={q}
        />
        <Dropdown
          label="Category"
          selectedKey={category}
          options={CATEGORY_OPTIONS}
          onChange={(_, opt) => setCategory(String(opt?.key || 'All'))}
          styles={{ root: { width: 220, maxWidth: '100%' } }}
        />
        <Dropdown
          label="Risk"
          selectedKey={risk}
          options={RISK_OPTIONS}
          onChange={(_, opt) => setRisk(String(opt?.key || 'All'))}
          styles={{ root: { width: 220, maxWidth: '100%' } }}
        />
      </Stack>

      <div className={styles.cardGrid}>
        {filtered.map((fund) => (
          <FundCard key={fund.id} fund={fund} onOpen={(id) => navigate(`/funds/${id}`)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <Text variant="small" className={styles.muted}>
          No funds match your filters.
        </Text>
      )}
    </Stack>
  );
}
