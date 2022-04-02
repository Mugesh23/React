import React from 'react';
import { Link } from 'react-router-dom'

import { strings } from './Constants';
import { INDEX_PATH, LOGIN_PATH } from './RoutesPath';

export default function Nav() {
    return (
        <nav className='d-flex justify-content-start p-3 shadow-sm bg-white'>
            <Link to={INDEX_PATH} className='p-2'>{strings.HOME}</Link>{" "}
            <Link to={LOGIN_PATH} className='p-2'>{strings.LOGIN}</Link>
        </nav>
    );
}
