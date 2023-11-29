const TweetButton=(props)=>{
    return (
        <>
            <div className="px-4 flex items-center justify-center">
                <button className='w-fit pointer-events-auto bg-blue-500 text-stone-100  mb-5 text-sm font-medium py-1 px-3 rounded-sm' onClick={props.handleTweet}>Tweet</button>
            </div>
        </>
    )
}

export default TweetButton