import * as React from 'react';
import SurfaceCard from '../ui/SurfaceCard';
import SettingsForm from '../forms/SettingsForm';

export default function SettingsPage(): JSX.Element {
  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Settings</h2>
          <p className="fdpMuted">Demo settings form using react-hook-form (plain inputs).</p>
        </div>
      </div>

      <SurfaceCard>
        <SettingsForm />
      </SurfaceCard>
    </div>
  );
}
