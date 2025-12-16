import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface IPageTransitionProps {
  routeKey: string;
  children: React.ReactNode;
}

export default function PageTransition(props: IPageTransitionProps): JSX.Element {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={props.routeKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
