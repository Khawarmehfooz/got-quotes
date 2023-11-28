import {Routes,Route,useParams} from 'react-router-dom'
import {getCharacterQuotes} from '../api'
import { useEffect, useState } from 'react'
const CharacterQuote = ()=>{
    const params = useParams()
    const [quote,setQuote] = useState(null)
    useEffect(()=>{
        getCharacterQuotes(params.character).then(quote=>setQuote(quote[0]))
    },[])

    return (
        <>
                <a className='back-to-home' href="/">Back to Home Page</a>
            {
                quote ? (
                    <div className="quote-container">

                        {
                            quote.quotes.map((q, index) => (
                                <div key={index} className="quote-card">
                                    <div className="quote-author">
                                        <div className=""><img className='character-thumbnail' src={`/${quote.slug}.jpg`} alt="" /></div>
                                        <div className="author-details">
                                            <p className='quote-author-name'>{quote.name}</p>
                                            <p className='quote-author-house'>{quote.house.name}</p>
                                        </div>
                                    </div>
                                    <q  className='quote-text'>{q}</q>
                                </div>
                            ))
                        }
                    </div>
                ) : 'Fetching Quotes'
            }
        </>
    )
}
export default CharacterQuote