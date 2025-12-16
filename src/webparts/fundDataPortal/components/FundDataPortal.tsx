import * as React from 'react';
import type { IFundDataPortalProps } from './IFundDataPortalProps';
import AppRouter from './AppRouter';

import '../styles/fundDataPortal.css';

export default function FundDataPortal(props: IFundDataPortalProps): JSX.Element {
  return (
    <div className="fdpRoot">
      <AppRouter title={props.title} />
    </div>
  );
}
