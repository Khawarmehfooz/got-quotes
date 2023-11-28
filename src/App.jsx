import { useState } from 'react'
import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header/>
        <div className="quote-card-container">
          <QuoteCard/>
        </div>
      </div>
    </>
  )
}

export default App
