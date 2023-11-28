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