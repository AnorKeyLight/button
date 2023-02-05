import React from "react";

type ButtonPropsType={
    name:string
    callBack:()=>void
}
export const Button = (props: ButtonPropsType) => {
    const onclickHandler=()=>{
        props.callBack()
    }
    return (
        <button onClick={onclickHandler}>{props.name}</button>
    )
}



/*conspect



function App() {
            const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
                console.log("Hello, I'm Vasya!")
            }
            const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
                console.log("Hello, I'm Ivan!")
            }

    const onClickHandler = (name: string) => {
        console.log(name)
    }
            const foo1=()=>{
                console.log(100200)
            }

            const foo2=(num: number)=>{
                console.log(num)
            }

        const forTest1 = () => {
          console.log("Rome")
        }
        const forTest2 = (country: string) => {
            console.log(country)
        }

    return (
        <div className="App">
            <button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler("Vasya")}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-2</button>
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
            <button onClick={forTest1}>test 1</button>
            <button onClick={()=>forTest2("Rome")}>test 2</button>
        </div>
    );
}*/


