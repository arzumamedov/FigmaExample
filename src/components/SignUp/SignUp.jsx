import React from 'react'
import './SignUp.css'
import GROUP from '../../assets/svgs/group.svg'
function SignUp() {
    return (
        <div className='signUpMain'>
            <div className='signUpLeft'>
                <p className='head'>Join Eventslink</p>
                <p className='desc'>People use Eventslink to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.</p>
                <button className='signUpButton'>Sign up</button>
            </div>
            <img src={GROUP} alt="" />
        </div>
    )
}

export default SignUp