import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SlideBar = () => {
    return (
        <div>
            <nav className="nav nav-pills nav-fill">
                <Link className="nav-item nav-link active" to="/">MovieCard</Link> |{" "}
                <Link className="nav-item nav-link" to="/movielist">MovieList</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default SlideBar;