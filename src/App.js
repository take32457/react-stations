// DO NOT DELETE

import * as React from 'react'
import {useState , useEffect} from 'react'
import './App.css'
import {Header} from './Header.js'
import {Description} from './Description.js'
import { DogListContainer } from './DogListContainer'

/**
 * 
 * @type {React.FC}
 */


export const App = () => {
  <DogListContainer/>
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
