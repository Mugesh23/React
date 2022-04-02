import React from 'react';
import DragAndDrop from './DragScreen';

import SideBar from './Sidebar'

export default function Home() {
  return (
    <div className='d-flex'>
      <div className='col-2'>
        <SideBar />
      </div>
      <div className='col-9'>
        <DragAndDrop />
      </div>
    </div>
  );
}
