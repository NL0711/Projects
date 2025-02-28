import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="p-6 bg-white rounded-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-400">Counter</h1>
        <p className="text-3xl font-semibold mb-4 text-gray-500">{count}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-orange-100 text-orange-700"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-green-100 text-gray-600"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-700 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
