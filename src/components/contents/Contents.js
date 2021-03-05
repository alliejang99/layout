import React from 'react';
import Bar from './Bar';
import Columns from './Columns';
import Analytics from './Analytics';
import Service from './Service';

function Contents() {
  return (
      <div className="contents">
        <Bar />
        <Columns />
        <div className="list">
          <Analytics />
          <Service />
        </div>
      </div>
  )
}

export default Contents;
