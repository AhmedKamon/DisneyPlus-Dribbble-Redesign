import React from 'react'
import ShowsThumbnail from './ShowsThumbnail'

function ShowsCollection({results, title}) {
  console.log(results);
    return (
        <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto '>
          <h2 className='font-semibold'>{title}</h2>
          <div className='flex space-x-6 scrollbar-hide overflow-x-scroll  overflow-y-hidden p-2 -m-2'>
    
          {
            results.map((result) => (
              <ShowsThumbnail result={result} key={result.id} />
              ))
            }
            </div>
        </div>
      )
}

export default ShowsCollection
