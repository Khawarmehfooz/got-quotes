import {useEffect, useState} from 'react';
import { getRandomQuote } from "../api"
const QuoteCard = ()=>{
    const [quote,setQuote] = useState(null)
    useEffect(()=>{
        getRandomQuote().then(quote=>setQuote(quote))
    },[])

    const handleGenerate=()=>{
        getRandomQuote().then(quote=>setQuote(quote))
    }

    return (
        <>
        {
            quote ? (
                <>
                    <div className="quote-card">
                        <q className='quote-sentence'>{quote.sentence}</q>
                        <p className="quote-character"> {quote.character.name} </p>
                    </div>

                        <div className="button-container">
                            <button onClick={handleGenerate}>Generate More</button>
                        </div>
                </>
            ): 'No Quote Found'
        }
        </>
    )
}
export default QuoteCard