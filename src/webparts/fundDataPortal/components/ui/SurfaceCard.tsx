import * as React from 'react';

export interface ISurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SurfaceCard(props: ISurfaceCardProps): JSX.Element {
  const clickable = Boolean(props.onClick);

  return (
    <div
      className={[
        'fdpCard',
        clickable ? 'fdpClickable' : '',
        props.className || ''
      ].join(' ')}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (!props.onClick) return;
        if (e.key === 'Enter' || e.key === ' ') props.onClick();
      }}
    >
      {props.children}
    </div>
  );
}
