import * as React from 'react';
import { motion } from 'framer-motion';

export interface IAnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function AnimatedButton(props: IAnimatedButtonProps): JSX.Element {
  return (
    <motion.div whileHover={{ scale: props.disabled ? 1 : 1.01 }} whileTap={{ scale: props.disabled ? 1 : 0.98 }}>
      <button
        type="button"
        aria-label={props.ariaLabel}
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </motion.div>
  );
}
