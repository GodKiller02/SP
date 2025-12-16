import * as React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@fluentui/react';
import styles from './SurfaceCard.module.scss';

export interface ISurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SurfaceCard(props: ISurfaceCardProps): JSX.Element {
  const theme = useTheme();

  const clickable = Boolean(props.onClick);

  return (
    <motion.div
      className={[styles.card, props.className].filter(Boolean).join(' ')}
      style={{
        background: theme.palette.white,
        border: `1px solid ${theme.palette.neutralLight}`
      }}
      whileHover={clickable ? { y: -2 } : undefined}
      whileTap={clickable ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.15 }}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (!props.onClick) return;
        if (e.key === 'Enter' || e.key === ' ') props.onClick();
      }}
    >
      {props.children}
    </motion.div>
  );
}
