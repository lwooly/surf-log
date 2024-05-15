import Link from 'next/link';
import React from 'react';

const DesktopNav = () => {
    return (
        <nav className='flex space-x-2 justify-between'>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
            <Link href='/' >Temp</Link>
        </nav>
    );
};

export default DesktopNav;