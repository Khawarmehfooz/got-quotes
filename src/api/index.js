export const getRandomQuote = async()=>{
    const quote = await fetch('https://api.gameofthronesquotes.xyz/v1/random',{
        method: 'GET'
    })
    return await quote.json()
}
export const getCharactes = async()=>{
    const characters = await fetch('https://api.gameofthronesquotes.xyz/v1/characters',{
        method: 'GET'
    })
    return await characters.json()
}
export const getCharacterQuotes = async(characterName)=>{
    const quote = await fetch(`https://api.gameofthronesquotes.xyz/v1/character/${characterName}`,{
        method: 'GET'
    })
    return quote.json()
}