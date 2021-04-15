import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getHeaderMenuRequest} from "../../store/actions/menus";
import "../../assets/CSS/components/headerMenu.css";

class HeaderMenu extends Component {
    componentDidMount() {
        this.props.getHeaderMenuRequest();
    }

    render() {
        const {headerMenuInfo, requestStatus} = this.props;
        return (
            <menu className='header__menu'>
                {requestStatus === 'request' ? 'loading' :
                    requestStatus === 'success' ? headerMenuInfo.menu?.map((val, key) => (
                        <NavLink
                            className='header__menu_link'
                            key={key} to={`/${val.link}`}
                            id={val.link}
                        >{val.name}</NavLink>
                    )) : 'Please load page again'}
            </menu>
        );
    }
}

const mapStateToProps = (state) => ({
    headerMenuInfo: state.menus.headerMenuInfo,
    requestStatus: state.menus.requestStatus,
})

const mapDispatchToProps = {
    getHeaderMenuRequest,
}

const HeaderMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderMenu)

export default HeaderMenuContainer;
