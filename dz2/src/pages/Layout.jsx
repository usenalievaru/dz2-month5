import React from 'react';

import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}> Формы</Link>
            </div>
            <Outlet/>
            <footer>Hello</footer>
        </div>
    );
};

export default Layout;