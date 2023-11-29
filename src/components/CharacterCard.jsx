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
                            <div key={e.slug} className="flex flex-col items-center bg-amber-700 py-5 rounded-md shadow-md ring-1 ring-amber-950/10">
                                <img className="character-image" src={`/${e.slug}.jpg`} alt={e.name} />
                                <h4 className="text-white mt-2 font-medium text- sm:text-xl">{e.name}</h4>
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