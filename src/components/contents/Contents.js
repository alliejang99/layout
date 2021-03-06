import React from 'react';
import Bar from './Bar';
import Columns from './Columns';
import Analytics from './Analytics';
import Service from './Service';
import Basic from './Basic';
import Paging from '../Button/Paging';
// import TabMenu from './TabMenu';

function Contents() {
  return (
      <div className="contents">
        <Bar />
        <Columns />
        <div className="list">
          <Analytics />
          <Service />
          <Basic />
        </div>
        <Paging />
      </div>
  )
}

export default Contents;
