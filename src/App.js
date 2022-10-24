import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals , action , horror ,documentary ,romantic ,comedy} from './constants/constants'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Original' islarge/>
      <RowPost url={action} title='action'/>
      <RowPost url={horror} title='horror'/>
      <RowPost url={romantic} title='romantic'/>
      <RowPost url={comedy} title='comedy'/>
      <RowPost url={documentary} title='documentry'/>
    </div>
  )
}

export default App