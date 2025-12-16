import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DEMO_FUNDS } from '../../data/demoData';
import SurfaceCard from '../ui/SurfaceCard';

export default function FundDetailsPage(): JSX.Element {
  const navigate = useNavigate();
  const { fundId } = useParams();

  const fund = React.useMemo(() => DEMO_FUNDS.find((f) => f.id === fundId), [fundId]);
  const [tab, setTab] = React.useState<'summary' | 'holdings' | 'documents'>('summary');

  if (!fund) {
    return (
      <div>
        <div className="fdpPageHeader">
          <div>
            <h2 className="fdpH1">Fund not found</h2>
            <p className="fdpMuted">The fund id \"{fundId}\" doesn’t exist in this demo.</p>
          </div>
        </div>
        <button type="button" className="fdpBtn" onClick={() => navigate('/funds')}>
          Back to Funds
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">{fund.name}</h2>
          <p className="fdpMuted">
            Category: {fund.category} • Domicile: {fund.domicile} • AUM: {fund.aum} • Risk: {fund.risk}
          </p>
        </div>
        <div className="fdpRow">
          <button type="button" className="fdpBtn" onClick={() => navigate('/funds')}>
            Back to Funds
          </button>
          <button type="button" className="fdpBtn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>

      <div className="fdpTabs">
        <button
          type="button"
          className={['fdpBtn', tab === 'summary' ? 'fdpTabActive' : ''].join(' ')}
          onClick={() => setTab('summary')}
        >
          Summary
        </button>
        <button
          type="button"
          className={['fdpBtn', tab === 'holdings' ? 'fdpTabActive' : ''].join(' ')}
          onClick={() => setTab('holdings')}
        >
          Holdings
        </button>
        <button
          type="button"
          className={['fdpBtn', tab === 'documents' ? 'fdpTabActive' : ''].join(' ')}
          onClick={() => setTab('documents')}
        >
          Documents
        </button>
      </div>

      <div className="fdpSpacer12" />

      {tab === 'summary' && (
        <SurfaceCard>
          <p className="fdpNoTopMargin">
            This is a demo fund details page. In a real portal, you’d load holdings, performance, fees, documents, and factsheets.
          </p>
          <div className="fdpCardGrid">
            <SurfaceCard>
              <p className="fdpTileTitle">1Y Return</p>
              <p className="fdpMetricValue">8.4%</p>
              <p className="fdpMuted">Demo value</p>
            </SurfaceCard>
            <SurfaceCard>
              <p className="fdpTileTitle">Volatility</p>
              <p className="fdpMetricValue">12.1%</p>
              <p className="fdpMuted">Demo value</p>
            </SurfaceCard>
            <SurfaceCard>
              <p className="fdpTileTitle">Expense</p>
              <p className="fdpMetricValue">0.68%</p>
              <p className="fdpMuted">Demo value</p>
            </SurfaceCard>
          </div>
        </SurfaceCard>
      )}

      {tab === 'holdings' && (
        <SurfaceCard>
          <p className="fdpNoTopMargin">Holdings are mocked for the demo:</p>
          <ul className="fdpList">
            <li>Top Holding A — 6.2%</li>
            <li>Top Holding B — 4.9%</li>
            <li>Top Holding C — 4.1%</li>
            <li>Top Holding D — 3.7%</li>
          </ul>
        </SurfaceCard>
      )}

      {tab === 'documents' && (
        <SurfaceCard>
          <p className="fdpNoTopMargin">Example documents section (demo actions):</p>
          <div className="fdpRow">
            <button type="button" className="fdpBtn" onClick={() => window.alert('Demo: open factsheet')}>
              Open factsheet
            </button>
            <button type="button" className="fdpBtn" onClick={() => window.alert('Demo: open prospectus')}>
              Open prospectus
            </button>
          </div>
        </SurfaceCard>
      )}
    </div>
  );
}
