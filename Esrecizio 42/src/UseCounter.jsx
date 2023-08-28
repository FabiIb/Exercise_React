import React, { useState } from 'react'
import { useCallback } from 'react'


function UseCounter (){
    const [counte, setCounte] = useState(0)

   const handleIncrement = useCallback(function handleIncrement(){
    setCounte((c) => c +1)
    console.log("handleIncrement")
   }, [])

   const handleDecrement = useCallback(function handleDecrement(){
    setCounte((c) => c -1)
   }, [])

   const handleReset = useCallback(function handleReset(){
    setCounte(0)
},[])


   return {
    counter: counte,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
}
}

export default UseCounter
