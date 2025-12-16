import * as React from 'react';
import { motion } from 'framer-motion';
import { Icon, Text, useTheme } from '@fluentui/react';
import styles from './AnimatedTile.module.scss';

export interface IAnimatedTileProps {
  title: string;
  description: string;
  iconName: string;
  onClick: () => void;
}

export default function AnimatedTile(props: IAnimatedTileProps): JSX.Element {
  const theme = useTheme();

  return (
    <motion.div
      className={styles.tile}
      role="button"
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') props.onClick();
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      style={{
        background: theme.palette.white,
        border: `1px solid ${theme.palette.neutralLight}`
      }}
    >
      <div className={styles.header}>
        <Icon iconName={props.iconName} styles={{ root: { fontSize: 20, color: theme.palette.neutralPrimary } }} />
        <Text variant="large" className={styles.title}>
          {props.title}
        </Text>
      </div>
      <Text variant="small" className={styles.desc}>
        {props.description}
      </Text>
    </motion.div>
  );
}
