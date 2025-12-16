import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface ISettingsValues {
  density: 'Comfortable' | 'Compact';
  emailNotifications: boolean;
  itemsPerPage: number;
}

const DENSITY_OPTIONS: Array<ISettingsValues['density']> = ['Comfortable', 'Compact'];

export default function SettingsForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch
  } = useForm<ISettingsValues>({
    defaultValues: {
      density: 'Comfortable',
      emailNotifications: true,
      itemsPerPage: 25
    }
  });

  const [saved, setSaved] = React.useState(false);
  const itemsPerPage = watch('itemsPerPage');

  const onSubmit = async (): Promise<void> => {
    setSaved(false);
    await new Promise((r) => setTimeout(r, 350));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {saved && <div className="fdpToast">Settings saved (demo).</div>}

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <span className="fdpLabel">Layout density</span>
        <div className="fdpRow">
          {DENSITY_OPTIONS.map((d) => (
            <label key={d} className="fdpBtn fdpRadioPill">
              <input type="radio" value={d} {...register('density')} />
              {d}
            </label>
          ))}
        </div>
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <span className="fdpLabel">Email notifications</span>
        <label className="fdpRadioPill">
          <input type="checkbox" {...register('emailNotifications')} /> Enabled
        </label>
      </div>

      <div className="fdpSpacer12" />

      <div className="fdpField">
        <label className="fdpLabel" htmlFor="itemsPerPage">
          Items per page: <b>{itemsPerPage}</b>
        </label>
        <input
          id="itemsPerPage"
          className="fdpRange"
          type="range"
          min={10}
          max={100}
          step={5}
          {...register('itemsPerPage', { valueAsNumber: true })}
        />
      </div>

      <div className="fdpSpacer12" />

      <button type="submit" className="fdpBtn fdpBtnPrimary" disabled={isSubmitting}>
        {isSubmitting ? 'Saving…' : 'Save'}
      </button>
    </form>
  );
}
