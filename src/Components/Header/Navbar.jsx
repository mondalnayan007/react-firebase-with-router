import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-3 justify-center'>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
            </ul>
        </div>
    );
};

export default Navbar;