import { useState } from "react"


const useProduct = (initialNumber: number) => {

    const [counter, setCounter] = useState(initialNumber)

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }

    return {
        counter,
        increaseBy
    }
}

export default useProduct