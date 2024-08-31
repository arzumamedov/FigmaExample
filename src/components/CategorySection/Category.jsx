import React from 'react'
import './CategoryStyle.css'

function Category({ name, SVG }) {
    return (
        <div className='categories'>
            <div className='categoryCard'>
                <div className='circle'>
                    <img src={SVG} alt={name} />
                </div>
                    <p className='categoryName'>{name}</p>
            </div>
        </div>
    )
}

export default Category