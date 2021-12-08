import { useState } from 'react';
import './App.css';
import Button from './components/button'
import Input from './components/input';

const App = () => {
  const buttonColorOrange = '#f2a33c';

  const[text, setText] = useState('');
  const[result, setResult] = useState('');

  const addText  = (val) => {
    setText((text) => [...text, val])
  }

  const calculateResult = () => {
    try {
      const input = text.join("")
      console.log(input);
      setResult(eval(input));
      
    } catch (error) {
      console.log(error);
    }

  }

  const resetInput = () => {
    setText("");
    setResult("");
  }



  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
          <Button symbol='7' handleClick={addText} />
          <Button symbol='8' handleClick={addText}/>
          <Button symbol='9' handleClick={addText}/>
          <Button symbol='/' color={buttonColorOrange} handleClick={addText}/>
        </div>
        <div className='row'>
          <Button symbol='4' handleClick={addText}/>
          <Button symbol='5' handleClick={addText}/>
          <Button symbol='6' handleClick={addText}/>
          <Button symbol='*' color={buttonColorOrange} handleClick={addText}/>
        </div>
        <div className='row'>
          <Button symbol='1' handleClick={addText}/>
          <Button symbol='2' handleClick={addText}/>
          <Button symbol='3'handleClick={addText} />
          <Button symbol='+' color={buttonColorOrange} handleClick={addText}/>
        </div>
        <div className='row'>
          <Button symbol='0' handleClick={addText}/>
          <Button symbol='.' handleClick={addText}/>
          <Button symbol='=' handleClick={calculateResult}/>
          <Button symbol='-' color={buttonColorOrange} handleClick={addText}/>
        </div>
        <Button symbol='Clear' color="#3f3f3f" handleClick={resetInput}/>
      </div>
    </div> 
  );
}

export default App;
