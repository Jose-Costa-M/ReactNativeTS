import { useState } from "react"



export const Counter = () => {
 
    const [count, setCounter] = useState<number>(10);

  const increaseBy = (value: number) => {
    setCounter(count + value);
  }


  return (
    <>
      <h3>Counter: <small>{count}</small></h3>
    
      <div>
        <button onClick={ ( ) => increaseBy(1) }>+1</button>
        &nbsp;
        <button onClick ={ () => increaseBy(-1)} >-1</button>
      </div>
    
    </>
  )
}
