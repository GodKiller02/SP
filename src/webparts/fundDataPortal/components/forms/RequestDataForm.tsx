import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  DatePicker,
  Dropdown,
  IDropdownOption,
  MessageBar,
  MessageBarType,
  Stack,
  TextField,
  Toggle
} from '@fluentui/react';
import AnimatedPrimaryButton from '../ui/AnimatedPrimaryButton';
import AnimatedDefaultButton from '../ui/AnimatedDefaultButton';

export interface IRequestDataValues {
  requestTitle: string;
  requestType: 'Holdings' | 'Performance' | 'Fees' | 'Documents';
  fundOrUniverse: string;
  dueDate: Date | null;
  requesterEmail: string;
  urgent: boolean;
  notes: string;
}

const REQUEST_TYPE_OPTIONS: IDropdownOption[] = [
  { key: 'Holdings', text: 'Holdings' },
  { key: 'Performance', text: 'Performance' },
  { key: 'Fees', text: 'Fees' },
  { key: 'Documents', text: 'Documents' }
];

export default function RequestDataForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<IRequestDataValues>({
    defaultValues: {
      requestTitle: '',
      requestType: 'Holdings',
      fundOrUniverse: '',
      dueDate: null,
      requesterEmail: '',
      urgent: false,
      notes: ''
    }
  });

  const [result, setResult] = React.useState<string | null>(null);

  const onSubmit = async (values: IRequestDataValues): Promise<void> => {
    // Demo-only: simulate save
    await new Promise((r) => setTimeout(r, 450));
    setResult(`Request submitted: ${values.requestType} for ${values.fundOrUniverse || 'N/A'}`);
  };

  return (
    <Stack tokens={{ childrenGap: 12 }}>
      {isSubmitSuccessful && result && (
        <MessageBar messageBarType={MessageBarType.success} isMultiline={false} onDismiss={() => setResult(null)}>
          {result}
        </MessageBar>
      )}

      <Controller
        name="requestTitle"
        control={control}
        rules={{ required: 'Title is required' }}
        render={({ field }) => (
          <TextField
            label="Request title"
            placeholder="e.g., Q4 holdings refresh"
            {...field}
            errorMessage={errors.requestTitle?.message}
          />
        )}
      />

      <Stack horizontal wrap tokens={{ childrenGap: 12 }}>
        <Controller
          name="requestType"
          control={control}
          render={({ field }) => (
            <Dropdown
              label="Request type"
              selectedKey={field.value}
              options={REQUEST_TYPE_OPTIONS}
              onChange={(_, opt) => field.onChange(opt?.key)}
              styles={{ root: { width: 260, maxWidth: '100%' } }}
            />
          )}
        />

        <Controller
          name="dueDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Due date"
              placeholder="Select a date"
              value={field.value || undefined}
              onSelectDate={(d) => field.onChange(d || null)}
            />
          )}
        />

        <Controller
          name="urgent"
          control={control}
          render={({ field }) => (
            <Toggle
              label="Urgent"
              checked={field.value}
              onChange={(_, v) => field.onChange(Boolean(v))}
              onText="Yes"
              offText="No"
            />
          )}
        />
      </Stack>

      <Controller
        name="fundOrUniverse"
        control={control}
        rules={{ required: 'Fund/universe is required' }}
        render={({ field }) => (
          <TextField
            label="Fund / universe"
            placeholder="e.g., Alpha Growth Fund or Equity universe"
            {...field}
            errorMessage={errors.fundOrUniverse?.message}
          />
        )}
      />

      <Controller
        name="requesterEmail"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' }
        }}
        render={({ field }) => (
          <TextField
            label="Requester email"
            placeholder="name@company.com"
            {...field}
            errorMessage={errors.requesterEmail?.message}
          />
        )}
      />

      <Controller
        name="notes"
        control={control}
        render={({ field }) => (
          <TextField label="Notes" multiline rows={4} placeholder="Optional details" {...field} />
        )}
      />

      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <AnimatedPrimaryButton text={isSubmitting ? 'Submitting…' : 'Submit request'} disabled={isSubmitting} onClick={handleSubmit(onSubmit)} />
        <AnimatedDefaultButton
          text="Reset"
          disabled={isSubmitting}
          onClick={() => {
            reset();
            setResult(null);
          }}
        />
      </Stack>
    </Stack>
  );
}
