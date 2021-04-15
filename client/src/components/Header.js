import React, {Component} from 'react';
import HeaderMenu from "./menus/HeaderMenu";
import Converter from "./converter/converter";
import LoginButton from "./login/LoginButton";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className='header header--dark'>
                <div className='container'>
                    <div className='header__row'>
                        <NavLink to='/' className="header__logo">
                            <img src="/images/logos/km.png" alt='KM'/>
                        </NavLink>
                        <Converter/>
                        <HeaderMenu/>
                        <LoginButton/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
