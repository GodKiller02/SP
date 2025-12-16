import * as React from 'react';
import SurfaceCard from '../ui/SurfaceCard';
import RequestDataForm from '../forms/RequestDataForm';

export default function RequestsPage(): JSX.Element {
  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Requests</h2>
          <p className="fdpMuted">Demo request form using react-hook-form (plain inputs).</p>
        </div>
      </div>

      <SurfaceCard>
        <RequestDataForm />
      </SurfaceCard>
    </div>
  );
}
