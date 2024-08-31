import React from 'react'
import './PopularDestinationsStyle.css'
function PopularDestinations({ IMAGE, name }) {
    return (
        <div className='popularDestinations'>
            <div className='popularCard'>
                <div className='imageBg'>
                <img src={IMAGE} alt="" />
                </div>
                <p className='name'>{name}</p>
            </div>
        </div>
    )
}

export default PopularDestinations