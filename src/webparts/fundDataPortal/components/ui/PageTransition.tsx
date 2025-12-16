import * as React from 'react';

export interface IPageTransitionProps {
  routeKey: string;
  children: React.ReactNode;
}

export default function PageTransition(props: IPageTransitionProps): JSX.Element {
  // Pure CSS animation: changing key re-triggers .fdpPage @keyframes
  return (
    <div key={props.routeKey} className="fdpPage">
      {props.children}
    </div>
  );
}
