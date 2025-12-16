import * as React from 'react';
import { initializeIcons, ThemeProvider } from '@fluentui/react';
import type { IFundDataPortalProps } from './IFundDataPortalProps';
import AppRouter from './AppRouter';

initializeIcons();

export default function FundDataPortal(props: IFundDataPortalProps): JSX.Element {
  return (
    <ThemeProvider>
      <AppRouter title={props.title} />
    </ThemeProvider>
  );
}
