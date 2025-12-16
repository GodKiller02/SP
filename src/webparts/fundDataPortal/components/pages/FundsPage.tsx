import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_FUNDS, IFund } from '../../data/demoData';
import FundCard from '../ui/FundCard';

const CATEGORY_OPTIONS = ['All', 'Equity', 'Fixed Income', 'Balanced', 'Alternatives'] as const;
const RISK_OPTIONS = ['All', 'Low', 'Medium', 'High'] as const;

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
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Funds</h2>
          <p className="fdpMuted">Demo fund list. Click a card to open Fund Details.</p>
        </div>
      </div>

      <div className="fdpRow">
        <div className="fdpField">
          <label className="fdpLabel" htmlFor="fundSearch">
            Search
          </label>
          <input
            id="fundSearch"
            className="fdpInput"
            placeholder="Search funds"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="fdpField">
          <label className="fdpLabel" htmlFor="fundCategory">
            Category
          </label>
          <select
            id="fundCategory"
            className="fdpSelect"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All categories' : c}
              </option>
            ))}
          </select>
        </div>

        <div className="fdpField">
          <label className="fdpLabel" htmlFor="fundRisk">
            Risk
          </label>
          <select id="fundRisk" className="fdpSelect" value={risk} onChange={(e) => setRisk(e.target.value)}>
            {RISK_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r === 'All' ? 'All risk levels' : r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpCardGrid">
        {filtered.map((fund) => (
          <FundCard key={fund.id} fund={fund} onOpen={(id) => navigate(`/funds/${id}`)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="fdpMuted">No funds match your filters.</p>
      )}
    </div>
  );
}
