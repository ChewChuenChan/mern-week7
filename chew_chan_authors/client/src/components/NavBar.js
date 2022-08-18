import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-dark nav-bar col-12 no-gutter fluid nav justify-content-center'>
            <div>
                <h1 className='text-warning '>Favorite authors</h1>
                <NavLink to="/" className="m-3 text-success">Home</NavLink>
            </div>
        </div>
    )
}

export default NavBar