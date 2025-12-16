import * as React from 'react';
import { motion } from 'framer-motion';
import { DefaultButton, IButtonProps } from '@fluentui/react';

export default function AnimatedDefaultButton(props: IButtonProps): JSX.Element {
  return (
    <motion.div whileHover={{ scale: props.disabled ? 1 : 1.01 }} whileTap={{ scale: props.disabled ? 1 : 0.98 }}>
      <DefaultButton {...props} />
    </motion.div>
  );
}
