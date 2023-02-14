import { useState } from 'react'
import './App.css'

// ES2) prende in input elementi e gli ordina
function App() {
  const [arrayInput, setArray2order] = useState('');
  function onChangeHandler(event){
    setArray2order(event.target.value)
  }

  const order=()=>{
    let arraySplited = arrayInput.slice('')
        arraySorted = arraySplited.sort().join('');

    setArray2order(arraySplited)
  }

  return (
      <div>
        <h1>INSERT YOUR NUMBER TO BE SORTED</h1>
        <input type="number" name="{arrayInput}" onChange={onChangeHandler} />
        <pre>{arrayInput}</pre>
        <button onClick={order}>ORDER</button>
      </div>
  )
}














/* **ES1) Aggiunge un 1 al click del pulsante e resetta!!
function App() {
  const [array, setArray] = useState([]);

  return (
      <div>
        <h1>Aggiungi 1 in array</h1>
        <div className="">{array}</div>
        <button onClick={()=>setArray([...array, 1])}>CLICK ME!!</button>
        <button onClick={()=>setArray([[]])} >RE$ET</button>
      </div>
  )
} */

export default App
