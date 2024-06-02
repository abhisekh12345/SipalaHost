import React from 'react'
import SmallHeadTag from '../ReuseComponent/SmallHeadTag'
import CenterHeading from '../ReuseComponent/CenterHeading'

const NewsBlog = () => {
  return (
     <>
        <div className="border border-red-500 mb-[500px]">
            <div className='max-w-8xl mx-auto border border-red-500'>
                  <div>
                    <SmallHeadTag subname="News and Blog" />
                  </div>
                  <div>
                     <CenterHeading boldTitle = "Amazing News & Blog For Every Single Update" />
                  </div>
                  <div>
                    
                  </div>
            </div>
        </div>
     </>
  )
}

export default NewsBlog