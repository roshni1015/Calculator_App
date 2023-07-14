import { useState } from 'react';
import './App.css';

import inputImage from './Image/download.png'

function App() {
  const [result, setResult] = useState("")
  const [result1, setResult1] = useState("")
  const [value, setValue] = useState("")
  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  }

  const handlebackspace = (event) => {
    setResult(result.slice(event.target.value, -1))
  }

  const handleClear = () => {
    setResult("")

  }
  const handlecalculate=(event)=>{
    setResult(eval(result).toString())
   
  }
  const handleClick1 = (event) => {
    setResult1(result1.concat(event.target.value));
  }

  const handlebackspace1= (event) => {
    setResult1(result1.slice(event.target.value, -1))
  }

  const handleClear1 = () => {
    setResult1("")

  }
  const handlecalculate1=(event)=>{
    setResult1(eval(result1).toString())
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='ellipse'>
          <div className='calculator1'>

            <input type='text' className='test' value={result}></input>
            <input  className='answer' onChange={handlecalculate}></input>

            <input className='buttone' value='e' onClick={handleClick}></input>
            <input className='buttonu' value='µ' onClick={handleClick}></input>
            <input className='buttonsin' value='sin' onClick={handleClick}></input>
            <input className='buttondig' value='dig' onClick={handleClick}></input>

            <input className='buttonAC' value='Ac' onClick={handleClear}></input>
            <input className='buttoncan' value='X'onClick={handlebackspace}></input>
            <input className='buttonsal' value='/' onClick={handleClick}></input>
            <input className='buttonstar' value='*' onClick={handleClick}></input>
            <input className='button7' value='7' onClick={handleClick}></input>
            <input className='button8' value='8' onClick={handleClick}></input>
            <input className='button9' value='9' onClick={handleClick}></input>
            <input className='buttonmin' value='-' onClick={handleClick}></input>
            <input className='button4' value='4' onClick={handleClick}></input>
            <input className='button5' value='5' onClick={handleClick}></input>
            <input className='button6' value='6' onClick={handleClick}></input>
            <input className='buttonmax' value='+' onClick={handleClick}></input>
            <input className='button1' value='1' onClick={handleClick}></input>
            <input className='button2' value='2' onClick={handleClick}></input>
            <input className='button3' value='3' onClick={handleClick}></input>
            <input className='buttoneql' value='=' onClick={handlecalculate} ></input>
            <input className='button0' value='0' onClick={handleClick}></input>
            <input className='buttondot' value='.' onClick={handleClick}></input>



          </div>
          <div className='calculator2'>
          <input type='text' className='test1' value={result1}></input>
            <input type='text' className='answer1'  onClick={handlecalculate1}></input>

            <input className='Cbuttone' value='e' onClick={handleClick1}></input>
            <input className='Cbuttonu' value='µ' onClick={handleClick1}></input>
            <input className='Cbuttonsin' value='sin' onClick={handleClick1}></input>
            <input className='Cbuttondig' value='dig' onClick={handleClick1}></input>
            <input className='CbuttonAC' value='Ac' onClick={handleClear1}></input>
            <input className='Cbuttoncan' value='X' src='cancel.png' onClick={handlebackspace1}></input>
            <input className='Cbuttonsal' value='/' onClick={handleClick1}></input>
            <input className='Cbuttonstar' value='*' onClick={handleClick1}></input>
            <input className='Cbutton7' value='7' onClick={handleClick1}></input>
            <input className='Cbutton8' value='8' onClick={handleClick1}></input>
            <input className='Cbutton9' value='9' onClick={handleClick1}></input>
            <input className='Cbuttonmin' value='-' onClick={handleClick1}></input>
            <input className='Cbutton4' value='4' onClick={handleClick1}></input>
            <input className='Cbutton5' value='5' onClick={handleClick1}></input>
            <input className='Cbutton6' value='6' onClick={handleClick1}></input>
            <input className='Cbuttonmax' value='+' onClick={handleClick1}></input>
            <input className='Cbutton1' value='1' onClick={handleClick1}></input>
            <input className='Cbutton2' value='2' onClick={handleClick1}></input>
            <input className='Cbutton3' value='3' onClick={handleClick1}></input>
            <input className='Cbuttoneql' value='=' onClick={handlecalculate1}></input>
            <input className='Cbutton0' value='0' onClick={handleClick1}></input>
            <input className='Cbuttondot' value='.' onClick={handleClick1}></input>



          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
