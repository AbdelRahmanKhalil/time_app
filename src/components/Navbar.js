import React, {useState, usestate} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const {click, setClick} = useState(false);
    function handleClick(){
            
        
    }
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Time <i className="fab fa-typo3" />
                </Link>
                {/* <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> */}

                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                        <i className="far fa-user-circle" />   User_Name
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
