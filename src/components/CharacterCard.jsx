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
                            <div key={e.slug} className="character-card">
                                    <img className="character-image" src={`/${e.slug}.jpg`} alt={e.name} />
                                    <h4 className="character-name">{e.name}</h4>
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