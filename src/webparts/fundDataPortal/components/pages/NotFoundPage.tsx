import * as React from 'react';
import { DefaultButton, Stack, Text } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import styles from './Pages.module.scss';

export default function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Stack tokens={{ childrenGap: 12 }}>
      <Text variant="xLarge">Page not found</Text>
      <Text variant="small" className={styles.muted}>
        This route doesn’t exist in the demo portal.
      </Text>
      <DefaultButton text="Go to Dashboard" onClick={() => navigate('/')} />
    </Stack>
  );
}
