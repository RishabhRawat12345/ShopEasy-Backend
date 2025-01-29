import React from 'react'
import Nav from './componets/Header/Nav';
import Front from './Body/Front';
import Middle from './Body/middle';
import Demodata from './Body/demodata';
import Newcollection from './Body/Newcollection';
const All = () => {
  return (
    <div><Nav />
    <Front />
    <Demodata />
    <Newcollection /></div>
  )
}

export default All