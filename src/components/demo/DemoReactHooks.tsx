import React, { useState } from 'react'

interface Props {}

const DemoReactHooks: React.FC<Props> = (props: Props) => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>The state count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default DemoReactHooks
