import React from 'react'
import './FooterStyle.css'
import MAIL from '../../assets/svgs/mail.svg'
function Footer() {
    return (
        <footer className='footerMain'>
            <div className='footerTop'>
                <p className='footerTopText'>Events</p>
                <p className='footerTopText'>About us</p>
                <p className='footerTopText'>Contact us</p>
                <p className='footerTopText'>Sign in</p>
            </div>
            <div className='footerBottom'>
                <p className='eventslink'>EVENTSLINK</p>
                <div className='footerBottomRight'>
                    <img src={MAIL} alt="" />
                    <p className='mail'>eventslink@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer