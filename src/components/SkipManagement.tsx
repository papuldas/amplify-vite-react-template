import React from 'react';
import { SkipCreateForm } from '../../ui-components';
const SkipManagement = () => {
  return (
    <div>
      <h2>Skip Management</h2>
      <p>Manage skips, schedules, and assignments here.</p>
      <SkipCreateForm />
    </div>
  );
};

export default SkipManagement;
