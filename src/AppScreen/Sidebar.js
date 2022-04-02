import React from 'react';

import { strings } from '../Constants';

export default function SideBar() {
  return (
    <div className='p-2 gray-right-border full-height'>
        <div className='d-flex align-items-center'>
          <img src='./images/React_Logo.png' alt='logo' className='icon-w-30' />
          <div className='d-flex flex-column'>
            <div className='px-1'>
              <span className='title'>{strings.DRAG_AND_DROP_APP}</span>
            </div>
            <div className='px-1 text-align-start'>
              <span className='subtitle'>{strings.REACT_LIBRARY}</span>
            </div>
          </div>
        </div>
    </div>
  );
}
