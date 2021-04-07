import React, {Component} from 'react';
import "../../assets/CSS/components/loginButton.css"
import Emitter from "../../helpers/Emitter";
import {postLoginRequest} from "../../store/actions/users";
import {connect} from "react-redux";

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            email: '',
            password: '',
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
        this.setState({status: !status})
    }

    render() {
        let {status} = this.state;
        let className;
        if (status === true) {
            className = 'open'
        } else {
            className = 'close'
        }
        const {postLoginRequest, loginInfo} = this.props;
        const {email, password} = this.state;
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
                                           onChange={e => this.setState({email: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login-password-dropdown"
                                           className="control-label">Գաղտնաբառ</label>
                                    <input type="password" name="pwd" id="login-password-dropdown" required=""
                                           className="form-control"
                                           onChange={e => this.setState({password: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row submit__buttons">
                                <button onClick={() => postLoginRequest(email, password)}
                                        type="button"
                                        className="form__submit">
                                    Մուտք
                                </button>
                                <button onClick={() => postLoginRequest(email, password)}
                                        type="button"
                                        className="form__submit register">
                                    Գրանցում
                                </button>
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
    loginInfo: state.users.loginInfo,
    requestStatus: state.users.requestStatus,
})

const mapDispatchToProps = {
    postLoginRequest,
}

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginButton)

export default LoginButtonContainer;