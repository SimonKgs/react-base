import { useState } from "react"

export const useCounter = (value:number = 0) => {

    const [counter, setCounter] = useState(value)
    
    const increaseBy = ( quantity: number ) => {        
        setCounter( prev => Math.max( prev + quantity, 0 ) )
    }

    return {
        counter,
        increaseBy
    }
}
