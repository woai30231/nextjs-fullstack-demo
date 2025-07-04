'use client';

import React from 'react';

import styles from '@/components/others/Others.module.css';
import type {Obj} from '@/types'


import type { Component } from '@/types';


const Others: Component <{_data:string}>= ({_data}) => {
  console.log(_data)
  return (
    <div className={styles.container}>
      <h2 className={styles.table_title}>other页界面不同方式请求api</h2>
      <table>
        <thead>
          <tr>
            <th>方式</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button>Get</button></td>
          </tr>
          <tr>
            <td><button>Post</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Others;
