import * as React from 'react';
import { Stack, Text } from '@fluentui/react';
import SurfaceCard from '../ui/SurfaceCard';
import SettingsForm from '../forms/SettingsForm';
import styles from './Pages.module.scss';

export default function SettingsPage(): JSX.Element {
  return (
    <Stack tokens={{ childrenGap: 14 }}>
      <Stack tokens={{ childrenGap: 6 }}>
        <Text variant="xLarge">Settings</Text>
        <Text variant="small" className={styles.muted}>
          Demo settings form with the same design system and responsive layout.
        </Text>
      </Stack>

      <SurfaceCard>
        <SettingsForm />
      </SurfaceCard>
    </Stack>
  );
}
