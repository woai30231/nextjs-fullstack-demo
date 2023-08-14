import React from 'react';

import type { Component } from '@/types/Common';
import type { CSSProperties } from 'react';

const style: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  backgroundColor: 'black',
  color: 'white',
};

const Loader: Component = () => (
  <div style={style}>
    <p>Loading...</p>
  </div>
);

export default Loader;
