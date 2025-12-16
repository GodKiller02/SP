import * as React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, IButtonProps } from '@fluentui/react';

export default function AnimatedPrimaryButton(props: IButtonProps): JSX.Element {
  return (
    <motion.div whileHover={{ scale: props.disabled ? 1 : 1.01 }} whileTap={{ scale: props.disabled ? 1 : 0.98 }}>
      <PrimaryButton {...props} />
    </motion.div>
  );
}
