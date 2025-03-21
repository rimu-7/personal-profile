import { useEffect, useState } from 'react'

function Coundter() {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Counter:", counter);

  }, [counter])

  return (
    <div>
      <p>Counter: {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default Coundter