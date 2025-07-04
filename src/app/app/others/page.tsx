import React, { Fragment } from 'react';


import constants from '@/constants';
import OtherView from '@/components/others/Others';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Others | ${constants.APP_NAME}`,
} satisfies Metadata;
import cookieStore from "@/lib/cookieStore"
const OthersPage: Component = async() => {
const serializedCookies = await cookieStore.getAllSerialized();
 let data = await fetch('http://localhost:3000/api/others',{
    headers:{
      "Cookie":serializedCookies
    }
 })
  console.log(serializedCookies)
  console.log(data)
  const _data = await data.json();
  console.log(_data)

  return (<Fragment>
            <h1 className="text-center">Hello, Protected Route</h1>
            <OtherView _data={'this is string'}/>
            <p>{_data.message}</p>
        </Fragment>)
};

export default OthersPage;
