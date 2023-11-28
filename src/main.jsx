import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CharacterQuote from './components/CharacterQuote.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/character/:character' element={<CharacterQuote/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
