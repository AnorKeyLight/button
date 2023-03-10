import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

  const Button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address)
  }
  const Button2Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }

  const Button3Foo = () => {
    console.log("IamStupidButton")
  }


  const Button4Foo = (param1: number, param2: string, param3: boolean) => {
    console.log(param1, param2, param3)
  }
  return (
      <div className="App">
        <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("I am Vyasya", 21, "live in Minsk")}/>
        <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("I am Ivan", 22)}/>
        <Button name={"IamStupidButton"} callBack={Button3Foo}/>
        <Button name={"MiddleButton"} callBack={() => Button4Foo (1, "two", true)}/>
      </div>
  );
}

export default App;
