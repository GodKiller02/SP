export interface IFund {
  id: string;
  name: string;
  category: 'Equity' | 'Fixed Income' | 'Balanced' | 'Alternatives';
  domicile: string;
  aum: string;
  risk: 'Low' | 'Medium' | 'High';
}

export const DEMO_FUNDS: IFund[] = [
  { id: 'alpha-growth', name: 'Alpha Growth Fund', category: 'Equity', domicile: 'US', aum: '$1.2B', risk: 'High' },
  { id: 'core-bond', name: 'Core Bond Fund', category: 'Fixed Income', domicile: 'IE', aum: '$3.8B', risk: 'Low' },
  { id: 'balanced-income', name: 'Balanced Income Fund', category: 'Balanced', domicile: 'LU', aum: '$860M', risk: 'Medium' },
  { id: 'real-assets', name: 'Real Assets Fund', category: 'Alternatives', domicile: 'US', aum: '$540M', risk: 'Medium' },
  { id: 'quality-equity', name: 'Quality Equity Fund', category: 'Equity', domicile: 'IE', aum: '$2.1B', risk: 'High' },
  { id: 'short-duration', name: 'Short Duration Fund', category: 'Fixed Income', domicile: 'LU', aum: '$1.0B', risk: 'Low' }
];
