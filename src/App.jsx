import { useState } from 'react'
import {Routes,Route,useParams} from 'react-router-dom'

import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
import CharacterCard from './components/CharacterCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-[95%] mt-3 mx-auto shadow-md sm:w-[500px]">
        <Header/>
        <div className="">
          <QuoteCard/>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="mt-8 max-w-7xl  mx-auto p-4 focus:outline-none sm:px-3 md:px-5">
          <h2 className='text-3xl font-medium mb-3'>Explore By Character</h2>
          <div className="grid grid-cols-2 gap-6 lg:gap-8 sm:grid-col-3 lg:grid-cols-4">
        
            <CharacterCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
