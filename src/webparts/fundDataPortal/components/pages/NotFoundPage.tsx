import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fdpPageHeader">
        <div>
          <h2 className="fdpH1">Page not found</h2>
          <p className="fdpMuted">This route doesn’t exist in the demo portal.</p>
        </div>
      </div>
      <button type="button" className="fdpBtn fdpBtnPrimary" onClick={() => navigate('/')}>
        Go to Dashboard
      </button>
    </div>
  );
}
