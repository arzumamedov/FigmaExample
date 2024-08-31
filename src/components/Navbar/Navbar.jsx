import React from 'react'
import "./NavbarStyle.css"
import DOWNARROW from '../../assets/svgs/down_arrow.svg';
import SEARCH from '../../assets/svgs/search.svg';
import USER from '../../assets/svgs/user.svg';
import SHOPPING_BAG from '../../assets/svgs/shopping_bag.svg';



function Navbar() {
    return (
        <nav className='navbarMain'>
            <div className='navbar'>
                <div className='navbarLeft'>
                    <p style={{ fontWeight: "500", color: "#FFF5F6",fontSize:"17px" }}>EVENTS<span style={{ color: "#F84757" }}>LINK</span></p>
                    <p className='navbarText'>Events</p>
                    <p className='navbarText'>About us</p>
                    <p className='navbarText'>Contact us</p>
                </div>
                <div className='navbarRight'>
                    <div className='language'>
                        <p style={{ color: "#FFF5F6" }}>EN</p>
                        <img src={DOWNARROW} alt="Down Arrow" />
                    </div>
                    <div className='others'>
                        <img src={SEARCH} alt="Search" />
                        <img src={USER} alt="user" />
                        <img src={SHOPPING_BAG} alt="Shopping Bag" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar