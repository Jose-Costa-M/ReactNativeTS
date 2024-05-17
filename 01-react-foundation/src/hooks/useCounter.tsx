import { useState } from "react";


interface Options{
    initialValue?: number;
}


export const useCounter = ({initialValue = 0}: Options) => {
  
  
    const [count, setCounter] = useState<number>(initialValue);

    const increaseBy = (value: number) => {

     if((count + value) >= 0)
        setCounter(count + value);
      
    }
  
    return {
    //Propiedades
      count, 
      
    //Métodos
      increaseBy,
  }
}
 