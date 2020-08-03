import React from 'react';
import placeholder from '../../../assets/img/main/dashboard/dashboard-placeholder.png';
// import css from './GraphsPlaceholder.module.scss';

const GraphsPlaceholder = () => {
  return (
    <div className="d-flex mb-auto">
      <img src={placeholder} alt="placeholder" width="1580" height="1133" />
    </div>
  );
};

export default GraphsPlaceholder;
