import * as React from 'react';
import SurfaceCard from '../ui/SurfaceCard';

const RANGE_OPTIONS = [
  { key: '7d', text: '7 days' },
  { key: '30d', text: '30 days' },
  { key: '90d', text: '90 days' }
] as const;

export default function ReportsPage(): JSX.Element {
  const [range, setRange] = React.useState('30d');

  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Reports</h2>
          <p className="fdpMuted">Demo KPI/report layout with consistent styling and responsiveness.</p>
        </div>
      </div>

      <SurfaceCard>
        <p className="fdpNoTopMargin fdpTileTitle">Report range</p>
        <div className="fdpRow">
          {RANGE_OPTIONS.map((o) => (
            <label key={o.key} className="fdpBtn fdpRadioPill">
              <input
                type="radio"
                name="reportRange"
                checked={range === o.key}
                onChange={() => setRange(o.key)}
              />
              {o.text}
            </label>
          ))}
        </div>
      </SurfaceCard>

      <div className="fdpSpacer12" />

      <div className="fdpCardGrid">
        <SurfaceCard>
          <p className="fdpNoTopMargin fdpTileTitle">Data freshness</p>
          <p className="fdpMuted">Range: {range}</p>
          <progress className="fdpProgress" value={78} max={100} />
        </SurfaceCard>

        <SurfaceCard>
          <p className="fdpNoTopMargin fdpTileTitle">Coverage</p>
          <p className="fdpMuted">Range: {range}</p>
          <progress className="fdpProgress" value={62} max={100} />
        </SurfaceCard>

        <SurfaceCard>
          <p className="fdpNoTopMargin fdpTileTitle">SLA</p>
          <p className="fdpMuted">Range: {range}</p>
          <progress className="fdpProgress" value={90} max={100} />
        </SurfaceCard>
      </div>

      <div className="fdpSpacer12" />

      <SurfaceCard>
        <p className="fdpNoTopMargin fdpTileTitle">Notes</p>
        <p className="fdpMuted">
          This demo is intentionally chart-light. If you want charts, we can plug in a React chart library later.
        </p>
      </SurfaceCard>
    </div>
  );
}
