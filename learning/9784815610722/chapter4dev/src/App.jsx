import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import {Fragment} from "react";
import ColoredMessaged from './components/ColoredMessage';

const App = () => {
  const [num, setNum] = useState(0,"setNum");
  const onClickButton = () =>{
//    alert();
    setNum(num+1)
  }

  useEffect(() => {
//    alert();
    console.log('rendered');
  }, [num]);


  return (
    <Fragment>
      {console.log("TEST")}
    <h1 style={{color: "red"}}>こんにちわ</h1>
    <ColoredMessaged color="blue" message="お元気ですか？" />
    <ColoredMessaged color="pink" message="元気です！" />
    <ColoredMessaged color="red">子供です！</ColoredMessaged>
    <ColoredMessaged color="red" />
    <ColoredMessaged color="red"></ColoredMessaged>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
    </Fragment>
  );
};

export default App;
