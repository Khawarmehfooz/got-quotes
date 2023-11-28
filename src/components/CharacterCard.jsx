import React, {useEffect, useState} from "react";
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
                        <div key={e.slug} className="character-card">
                                <img className="character-image" src={`/${e.slug}.jpg`} alt={e.name} />
                                <h4 className="character-name">{e.name}</h4>
                        </div>
                    ))
                }
            
            </>): 'Fetching Data'
        }
        
        
        </>
    )
}
export default CharacterCard