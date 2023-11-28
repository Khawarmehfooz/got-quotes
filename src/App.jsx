import { useState } from 'react'
import {Routes,Route,useParams} from 'react-router-dom'

import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
import CharacterCard from './components/CharacterCard'
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
      <div className="characters-container">
        <h2>Explore By Character</h2>
        <div className="characters">
          
          <CharacterCard/>
        </div>
      </div>
    </>
  )
}

export default App
