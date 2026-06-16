import { useState } from "react";


export const Design = () => {

    const [count , setCount] = useState(0)

    const handleCount = () => {
      setCount(count + 1)
    }

    const handleRemove = () => {
      setCount(count - 1)
    }
    return (
    <div>

      <button onClick={handleCount}>
        Add
      </button>

      <h1>{count}</h1>

      <button onClick={handleRemove}>
        Remove
      </button>
      
    </div>
  );
}