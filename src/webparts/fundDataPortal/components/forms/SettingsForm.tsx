import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ChoiceGroup,
  IChoiceGroupOption,
  MessageBar,
  MessageBarType,
  Slider,
  Stack,
  Toggle
} from '@fluentui/react';
import AnimatedPrimaryButton from '../ui/AnimatedPrimaryButton';

export interface ISettingsValues {
  density: 'Comfortable' | 'Compact';
  emailNotifications: boolean;
  itemsPerPage: number;
}

const DENSITY_OPTIONS: IChoiceGroupOption[] = [
  { key: 'Comfortable', text: 'Comfortable' },
  { key: 'Compact', text: 'Compact' }
];

export default function SettingsForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ISettingsValues>({
    defaultValues: {
      density: 'Comfortable',
      emailNotifications: true,
      itemsPerPage: 25
    }
  });

  const [saved, setSaved] = React.useState(false);

  const onSubmit = async (): Promise<void> => {
    setSaved(false);
    await new Promise((r) => setTimeout(r, 350));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Stack tokens={{ childrenGap: 12 }}>
      {saved && (
        <MessageBar messageBarType={MessageBarType.success} isMultiline={false} onDismiss={() => setSaved(false)}>
          Settings saved (demo).
        </MessageBar>
      )}

      <Controller
        name="density"
        control={control}
        render={({ field }) => (
          <ChoiceGroup label="Layout density" selectedKey={field.value} options={DENSITY_OPTIONS} onChange={(_, o) => field.onChange(o?.key)} />
        )}
      />

      <Controller
        name="emailNotifications"
        control={control}
        render={({ field }) => (
          <Toggle label="Email notifications" checked={field.value} onChange={(_, v) => field.onChange(Boolean(v))} onText="On" offText="Off" />
        )}
      />

      <Controller
        name="itemsPerPage"
        control={control}
        render={({ field }) => (
          <Slider
            label="Items per page"
            min={10}
            max={100}
            step={5}
            value={field.value}
            showValue
            onChange={(v) => field.onChange(v)}
          />
        )}
      />

      <AnimatedPrimaryButton text={isSubmitting ? 'Saving…' : 'Save'} disabled={isSubmitting} onClick={handleSubmit(onSubmit)} />
    </Stack>
  );
}
