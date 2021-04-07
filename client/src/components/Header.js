import React, {Component} from 'react';
import HeaderMenu from "./menus/HeaderMenu";
import Converter from "./converter/converter";
import LoginButton from "./login/LoginButton";

class Header extends Component {
    render() {
        return (
            <header className='header header--dark'>
                <div className='container'>
                    <div className='header__row'>
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