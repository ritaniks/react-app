import React from 'react';

import css from './SectionTitle.module.scss';

const SectionTitle = () => {
  return (
    <div>
      <h2 className={css.SectionTitle}>Grantor Report</h2>
      <p>
        Users can enter in their time they worked on different programs that
        feed into our Grantor report, which can be generated with one-click.
      </p>
      ;
    </div>
  );
};

export default SectionTitle;
