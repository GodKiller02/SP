import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface IRequestDataValues {
  requestTitle: string;
  requestType: 'Holdings' | 'Performance' | 'Fees' | 'Documents';
  fundOrUniverse: string;
  dueDate: string;
  requesterEmail: string;
  urgent: boolean;
  notes: string;
}

const REQUEST_TYPE_OPTIONS: Array<IRequestDataValues['requestType']> = ['Holdings', 'Performance', 'Fees', 'Documents'];

export default function RequestDataForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<IRequestDataValues>({
    defaultValues: {
      requestTitle: '',
      requestType: 'Holdings',
      fundOrUniverse: '',
      dueDate: '',
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && result && <div className="fdpToast">{result}</div>}

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <label className="fdpLabel" htmlFor="requestTitle">
          Request title
        </label>
        <input
          id="requestTitle"
          className="fdpInput"
          placeholder="e.g., Q4 holdings refresh"
          {...register('requestTitle', { required: 'Title is required' })}
        />
        {errors.requestTitle?.message && <div className="fdpError">{errors.requestTitle.message}</div>}
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpRow">
        <div className="fdpField">
          <label className="fdpLabel" htmlFor="requestType">
            Request type
          </label>
          <select id="requestType" className="fdpSelect" {...register('requestType')}>
            {REQUEST_TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="fdpField">
          <label className="fdpLabel" htmlFor="dueDate">
            Due date
          </label>
          <input id="dueDate" className="fdpInput" type="date" {...register('dueDate')} />
        </div>

        <div className="fdpField">
          <span className="fdpLabel">Urgent</span>
          <label className="fdpRadioPill">
            <input type="checkbox" {...register('urgent')} /> Mark as urgent
          </label>
        </div>
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <label className="fdpLabel" htmlFor="fundOrUniverse">
          Fund / universe
        </label>
        <input
          id="fundOrUniverse"
          className="fdpInput"
          placeholder="e.g., Alpha Growth Fund or Equity universe"
          {...register('fundOrUniverse', { required: 'Fund/universe is required' })}
        />
        {errors.fundOrUniverse?.message && <div className="fdpError">{errors.fundOrUniverse.message}</div>}
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <label className="fdpLabel" htmlFor="requesterEmail">
          Requester email
        </label>
        <input
          id="requesterEmail"
          className="fdpInput"
          placeholder="name@company.com"
          {...register('requesterEmail', {
            required: 'Email is required',
            pattern: { value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: 'Enter a valid email' }
          })}
        />
        {errors.requesterEmail?.message && <div className="fdpError">{errors.requesterEmail.message}</div>}
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <label className="fdpLabel" htmlFor="notes">
          Notes
        </label>
        <textarea id="notes" className="fdpTextarea" rows={4} placeholder="Optional details" {...register('notes')} />
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpRow">
        <button type="submit" className="fdpBtn fdpBtnPrimary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Submit request'}
        </button>
        <button
          type="button"
          className="fdpBtn"
          disabled={isSubmitting}
          onClick={() => {
            reset();
            setResult(null);
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
