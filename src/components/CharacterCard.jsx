import React, {useEffect, useState} from "react";
import {Routes,Route,useParams} from 'react-router-dom'
import {getCharactes} from '../api'


const CharacterCard = ()=>{
    const [character,setCharacter] = useState(null)
    useEffect(()=>{
        getCharactes().then(character=>setCharacter(character))
    },[])

    return (
        <>
        {
            character ? (
            <>
                {
                    character.map(e=>(
                        <a href={`/character/${e.slug}`}>
                            <div key={e.slug} className="flex flex-col items-center bg-slate-100 py-5 rounded-md shadow-md ring-1 ring-slate-300 hover:ring-slate-400">
                                <img className="flex-none w-28 h-28 rounded-full object-cover object-top " src={`/${e.slug}.jpg`} alt={e.name} />
                                <h4 className="mt-2 font-medium text- sm:text-xl">{e.name}</h4>
                            </div>
                        </a>
                    ))
                }
            
            </>): 'Fetching Data'
        }
        
        
        </>
    )
}
export default CharacterCard