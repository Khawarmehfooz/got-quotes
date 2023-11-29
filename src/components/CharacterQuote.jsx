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
                <a className='block w-fit pointer-events-auto rounded-md mx-auto mt-3 px-4 py-2 text-center font-medium bg-gray-100 shadow-sm ring-1 ring-slate-700/10 hover:bg-gray-50' href="/">Back to Home Page</a>
            {
                quote ? (
                    <section className='mt-5 max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5'>
                        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-col-2 lg:grid-cols-3 max-h-[33rem]">
                            {
                                quote.quotes.map((q, index) => (
                                    <figure key={index} className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 ring-1 ring-slate-700/10">
                                        <blockquote  className='mt-6 text-slate-700'>{q}</blockquote>
                                        <figcaption className="flex items-center space-x-4">
                                            <div className=""><img className='flex-none w-14 h-14 rounded-full object-cover' src={`/${quote.slug}.jpg`} alt={quote.name} /></div>
                                            <div className="flex-auto">
                                                <p className='text-base text-slate-800 font-semibold'>{quote.name}</p>
                                                <p className='mt-0.5'>{quote.house.name}</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                ))
                            }
                        </div>
                    </section>
                ) : 'Fetching Quotes'
            }
        </>
    )
}
export default CharacterQuote