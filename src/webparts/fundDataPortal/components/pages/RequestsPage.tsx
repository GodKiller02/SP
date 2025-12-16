import * as React from 'react';
import { Stack, Text } from '@fluentui/react';
import SurfaceCard from '../ui/SurfaceCard';
import RequestDataForm from '../forms/RequestDataForm';
import styles from './Pages.module.scss';

export default function RequestsPage(): JSX.Element {
  return (
    <Stack tokens={{ childrenGap: 14 }}>
      <Stack tokens={{ childrenGap: 6 }}>
        <Text variant="xLarge">Requests</Text>
        <Text variant="small" className={styles.muted}>
          Demo request form using react-hook-form + Fluent UI controls.
        </Text>
      </Stack>

      <SurfaceCard>
        <RequestDataForm />
      </SurfaceCard>
    </Stack>
  );
}
