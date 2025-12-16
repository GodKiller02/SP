import * as React from 'react';

export interface IAnimatedTileProps {
  title: string;
  description: string;
  iconName: string; // kept for compatibility with existing callers; mapped to an emoji in this refactor
  onClick: () => void;
}

function iconFor(name: string): string {
  switch (name) {
    case 'Financial':
      return '📊';
    case 'ReportDocument':
      return '📄';
    case 'Send':
      return '✉️';
    case 'Settings':
      return '⚙️';
    default:
      return '➡️';
  }
}

export default function AnimatedTile(props: IAnimatedTileProps): JSX.Element {
  return (
    <div
      className="fdpCard fdpClickable"
      role="button"
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') props.onClick();
      }}
    >
      <div className="fdpTileHeader">
        <span className="fdpNavIcon" aria-hidden="true">
          {iconFor(props.iconName)}
        </span>
        <p className="fdpTileTitle">{props.title}</p>
      </div>
      <p className="fdpTileDesc">{props.description}</p>
    </div>
  );
}
