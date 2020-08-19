import React, { useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';




const NavBar = () => {

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    });

    return (
        <>
        
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Logo</NavLink>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul id="slide-out" className="sidenav">
                        <li>
                            <div className="user-view">
                                <div className="background">
                                    <img className ="responsive-img"src="/Materialize.jpg" alt="img1" />
                                </div>
                                <NavLink to="/">
                                    <img className="circle" src="/Materialize.jpg" alt="img" />
                                </NavLink>
                                <NavLink to="/">
                                    <span className="red-text name lighten-2">Materialize</span>
                                </NavLink>
                               
                            </div>
                        </li>
                        <li>
                            <NavLink to="/">
                                <i className="material-icons">
                                    cloud
                                </i>
                                    First Link With Icon
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                Second Link
                            </NavLink>
                        </li>
                        <li>
                            <div className="divider" />
                        </li>
                        <li>
                            <NavLink to="/" className="subheader">
                                Subheader
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="waves-effect">
                                Third Link With Waves
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="/" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">
                            menu
                        </i>
                    </NavLink>
                </div>
            </nav>
           
        </>
    )
}

export default NavBar;
