import React from 'react'
import './Program.css'
import {programsData} from'../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'


const Program = () => {
  return (
    <div className="Programs" id='program'>
        {/* header  */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-catogaries">
            {programsData.map((Program)=>(
                <div className="category">
                    {Program.image}
                    <span>{Program.heading}</span>
                    <span>{Program.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program