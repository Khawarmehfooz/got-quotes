import {useEffect, useState} from 'react';
import { getRandomQuote } from "../api"
import TweetButton from './TweetButton';
const QuoteCard = ()=>{
    const [quote,setQuote] = useState(null)
    useEffect(()=>{
        getRandomQuote().then(quote=>setQuote(quote))
    },[])

    const handleGenerate=()=>{
        getRandomQuote().then(quote=>setQuote(quote))
    }
    const handleTweet = ()=>{
        const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote?.sentence + " - " + quote?.character.name)}`
        window.open(tweetURL,'_blank');
    }

    return (
        <>
        {
            quote ? (
                <>
                    <div className="bg-gray-50 p-5">
                        <q className='text-xl'>{quote.sentence}</q>
                        <p className="text-left font-bold underline mt-2 text-right"> {quote.character.name} </p>
                    </div>

                        <div className="px-4">
                            <button className='pointer-events-auto bg-stone-700 text-stone-100 w-full mb-5 py-2 text-xl font-medium rounded-sm ring-1 ring-gray-400 hover:ring-gray-500' onClick={handleGenerate}>Generate More</button>
                        </div>
                        <TweetButton handleTweet={handleTweet}/>
                </>
            ): 'Fetching Quote'
        }
        </>
    )
}
export default QuoteCard