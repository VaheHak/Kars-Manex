import React, {Component} from 'react';
import "../../assets/CSS/components/loginButton.css"
import Emitter from "../../helpers/Emitter";
import {postLoginRequest} from "../../store/actions/users";
import {connect} from "react-redux";
import Account from '../../helpers/Account';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCog, faComment, faSortDown, faUser} from "@fortawesome/free-solid-svg-icons";

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            email: '',
            password: '',
            arrowIcon: faSortDown,
        }
    }

    componentDidMount() {
        Emitter.on('toggle-login', this.handleOpen);
    }

    componentWillUnmount() {
        Emitter.remove('toggle-login', this.handleOpen);
    }

    handleOpen = () => {
        const {status} = this.state;
        this.setState({status: !status});
    }
    handleUserOpen = () => {
        const {status, arrowIcon} = this.state;
        this.setState({status: !status});
        if (arrowIcon !== faSortDown) {
            this.setState({arrowIcon: faSortDown})
        } else {
            this.setState({arrowIcon: faCaretLeft})
        }
    }

    render() {
        let {status} = this.state;
        let className;
        if (status === true) {
            className = 'open'
        } else {
            className = 'close'
        }
        const {postLoginRequest, token, myAccount, loginInfo} = this.props;
        const {email, password, arrowIcon} = this.state;
        console.log(loginInfo);
        if (token) {
            return (
                <div>
                    <div style={{position: "absolute", transform: 'translate(-50%, -50%)'}}>
                        <button onClick={this.handleUserOpen} type="button" className="dropdown-toggle auth__nav-btn">
                            <svg className="auth__icon-user user_login">
                                <use xlinkHref="#icon-user">
                                    <svg viewBox="-7 377 16 16" id="icon-user">
                                        <path
                                            d="M-7 393v-.9s0-.7.1-1.4c.2-1.1.5-1.9.9-2.4.5-.5 1.4-.8 2.2-1 .4-.1.8-.2 1.1-.3.3-.1.4-.2.5-.3v-.1c.1-.3 0-.6-.5-1.3-.2-.3-.5-.7-.7-1.2-.6-1.4-.7-2.9-.3-4.3.3-.9.9-1.6 1.7-2.1 1-.4 1.9-.7 3-.7s2 .2 2.8.7c.8.5 1.4 1.2 1.7 2.1.4 1.4.3 2.9-.3 4.3-.2.5-.4.8-.7 1.2-.4.7-.6 1-.5 1.3v.1c.1.1.2.2.5.3.3.1.7.2 1.1.3.8.2 1.7.5 2.2 1 .5.5.8 1.2.9 2.4.1.8.1 1.4.1 1.4v.9H-7zm2.3-3.5c-.1.1-.3.5-.4 1.4v.2l.3-.1h12v-.2c-.2-1.1-.4-1.3-.4-1.3-.2-.2-.7-.3-1.5-.5-1.1-.3-2.4-.6-2.8-1.7-.5-1.2.1-2.2.6-2.9.2-.3.4-.6.5-.9.4-1.1.5-2.1.2-3.1-.4-1.4-1.9-1.6-2.8-1.6s-2.3.2-2.8 1.6c-.3 1-.2 2 .2 3.1.1.3.3.6.5.9.5.8 1.1 1.7.6 2.9-.4 1-1.7 1.4-2.8 1.7-.7.2-1.2.3-1.4.5z"/>
                                    </svg>
                                </use>
                            </svg>
                            <span className="header__span">
                                {myAccount.firstName}
                            </span>
                            <FontAwesomeIcon icon={arrowIcon} className="user_login_down"/>
                        </button>
                        <div className={`${className} dropdown__menu auth__dropdown--login`}>
                            <div className="user__menuHeader_row">
                                <img src="/images/banner/banner.jpg" alt="User_image" className="menu__user_avatar"/>
                                <div className="user__info_row">
                                    <h3 className="myAccount__name">{myAccount.firstName} {myAccount.lastName}</h3>
                                    <p className="myAccount__email">{myAccount.email}</p>
                                </div>
                            </div>
                            <div className='myAccount__menu_links'>
                                <NavLink to="/user" className="myAccount__menu_link">
                                    <FontAwesomeIcon icon={faUser}/>&ensp;
                                    Իմ էջը
                                </NavLink>
                                <NavLink to="/messages" className="myAccount__menu_link">
                                    <FontAwesomeIcon icon={faComment}/>&ensp;
                                    Իմ հաղորդագրությունները
                                </NavLink>
                                <NavLink to="/settings" className="myAccount__menu_link">
                                    <FontAwesomeIcon icon={faCog}/>&ensp;
                                    Կարգավորումներ
                                </NavLink>
                            </div>
                            <button onClick={() => Account.delete()}
                                    type="button"
                                    className="form__submit">
                                ԵԼՔ
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div style={{position: "absolute", transform: 'translate(-50%, -50%)'}}>
                    <button onClick={this.handleOpen} type="button" className="dropdown-toggle auth__nav-btn">
                        <svg className="auth__icon-user user_login">
                            <use xlinkHref="#icon-user">
                                <svg viewBox="-7 377 16 16" id="icon-user">
                                    <path
                                        d="M-7 393v-.9s0-.7.1-1.4c.2-1.1.5-1.9.9-2.4.5-.5 1.4-.8 2.2-1 .4-.1.8-.2 1.1-.3.3-.1.4-.2.5-.3v-.1c.1-.3 0-.6-.5-1.3-.2-.3-.5-.7-.7-1.2-.6-1.4-.7-2.9-.3-4.3.3-.9.9-1.6 1.7-2.1 1-.4 1.9-.7 3-.7s2 .2 2.8.7c.8.5 1.4 1.2 1.7 2.1.4 1.4.3 2.9-.3 4.3-.2.5-.4.8-.7 1.2-.4.7-.6 1-.5 1.3v.1c.1.1.2.2.5.3.3.1.7.2 1.1.3.8.2 1.7.5 2.2 1 .5.5.8 1.2.9 2.4.1.8.1 1.4.1 1.4v.9H-7zm2.3-3.5c-.1.1-.3.5-.4 1.4v.2l.3-.1h12v-.2c-.2-1.1-.4-1.3-.4-1.3-.2-.2-.7-.3-1.5-.5-1.1-.3-2.4-.6-2.8-1.7-.5-1.2.1-2.2.6-2.9.2-.3.4-.6.5-.9.4-1.1.5-2.1.2-3.1-.4-1.4-1.9-1.6-2.8-1.6s-2.3.2-2.8 1.6c-.3 1-.2 2 .2 3.1.1.3.3.6.5.9.5.8 1.1 1.7.6 2.9-.4 1-1.7 1.4-2.8 1.7-.7.2-1.2.3-1.4.5z"/>
                                </svg>
                            </use>
                        </svg>
                        <span className="header__span">ՄՈՒՏՔ</span>
                    </button>
                    <div className={`${className} dropdown__menu auth__dropdown--login`}>
                        <h5 className="auth__title">Մուտք գործեք ձեր հաշիվ</h5>
                        <form className="form form--auth js-login-form">
                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="login-username-dropdown"
                                           className="control-label">Օգտանուն</label>
                                    <input type="text" name="log" id="login-username-dropdown" required=""
                                           className="form-control"
                                           placeholder="Username"
                                           onChange={e => this.setState({email: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login-password-dropdown"
                                           className="control-label">Գաղտնաբառ</label>
                                    <input type="password" name="pwd" id="login-password-dropdown" required=""
                                           className="form-control"
                                           placeholder="Password"
                                           onChange={e => this.setState({password: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row submit__buttons">
                                <button onClick={() => {
                                    postLoginRequest(email, password);
                                    this.setState({status: false})
                                }}
                                        type="button"
                                        className="form__submit">
                                    Մուտք
                                </button>
                                <NavLink to="/register" className="form__submit register">
                                    Գրանցում
                                </NavLink>
                            </div>
                            <div className='login_footer'>
                                <span className="form__remember">
                                <input id="remember-in-dropdown" name="rememberme" type="checkbox"
                                       className="in-checkbox" value="forever"
                                       data-parsley-multiple="rememberme"/>
                                   <label htmlFor="remember-in-dropdown" className="in-label">Հիշել ինձ</label>
                                </span>
                                <div className="form__options form__options--forgot">
                                    <a href="/"
                                       className="auth__forgot">Մոռացել եք գաղտնաբառը?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    token: state.users.token,
    requestStatus: state.users.requestStatus,
    myAccount: state.users.myAccount,
    loginInfo: state.users.loginInfo,
})

const mapDispatchToProps = {
    postLoginRequest,
}

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginButton)

export default LoginButtonContainer;
