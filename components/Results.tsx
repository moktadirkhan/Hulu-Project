import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = ({results}) => {
    // console.log(results);
    
    return (
        <FlipMove  className='flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex'>
            {/* here 3xl:flex is used for 4K screen and the value of 3xl is given in tailwind.config.js */}
            {results.map((result)=>(
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Results
