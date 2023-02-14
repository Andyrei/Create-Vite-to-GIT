import { useState } from 'react'
import './App.css'
import ItemSearch from './component/ItemSearch'

function App() {
  const searchEngines = [
    {
      name:'Google',
      url: 'www.google.com'
    },
    {
      name:'Duck Duck Go',
      url: 'www.duckduckgo.com'
    },
    {
      name:'Bing',
      url: 'www.bing.com'
    }
  ]

  return (
    <>
      <h2>Search Engines List</h2>
      <ul>
        {
          searchEngines.map((v,k)=>{
            return <ItemSearch key={k} value={v}/>
          })
        }
      </ul>
    </>
  )
}

export default App
