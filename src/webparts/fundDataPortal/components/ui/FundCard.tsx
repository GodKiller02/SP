import * as React from 'react';
import { IFund } from '../../data/demoData';
import SurfaceCard from './SurfaceCard';

export interface IFundCardProps {
  fund: IFund;
  onOpen: (fundId: string) => void;
}

function riskClass(risk: IFund['risk']): string {
  if (risk === 'Low') return 'fdpRiskLow';
  if (risk === 'Medium') return 'fdpRiskMedium';
  return 'fdpRiskHigh';
}

export default function FundCard(props: IFundCardProps): JSX.Element {
  return (
    <SurfaceCard onClick={() => props.onOpen(props.fund.id)} className={riskClass(props.fund.risk)}>
      <div className="fdpTileHeader">
        <span className="fdpNavIcon" aria-hidden="true">
          📊
        </span>
        <p className="fdpTileTitle">{props.fund.name}</p>
      </div>

      <div className="fdpMetaRow">
        <span>
          Category: <b>{props.fund.category}</b>
        </span>
        <span>
          Domicile: <b>{props.fund.domicile}</b>
        </span>
        <span>
          AUM: <b>{props.fund.aum}</b>
        </span>
      </div>

      <div className="fdpRisk">
        <span className="fdpDot" aria-hidden="true" />
        <span>
          Risk: <b>{props.fund.risk}</b>
        </span>
      </div>
    </SurfaceCard>
  );
}
