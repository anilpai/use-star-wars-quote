import React from 'react'
import { useMyHook } from '@anilpai/use-star-wars-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App