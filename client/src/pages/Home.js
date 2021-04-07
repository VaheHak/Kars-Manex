import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import '../assets/CSS/pages/home.css'
import {connect} from "react-redux";
import {getCategory} from "../store/actions/HomeFilters";
import {NavLink} from "react-router-dom";
import _ from "lodash";
import Product from "../components/products/product";
import {getStarRequest} from "../store/actions/products";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryPart: '1',
            categoryDep: '1',
            categorySep: '1',
        }
    }

    componentDidMount() {
        const {categoryPart, categoryDep} = this.state;
        this.props.getCategory(categoryPart, categoryDep);
        this.props.getStarRequest(1);
    }

    handleChangeCategory = (ev) => {
        this.setState({categoryPart: ev});
        this.props.getCategory(ev, ev);
    }
    handleChangeCategoryDepartment = (ev) => {
        const {categoryPart} = this.state;
        this.setState({categoryDep: ev});
        this.props.getCategory(categoryPart, ev);
    }
    handleChangeCategorySection = (ev) => {
        this.setState({categorySep: ev});
    }

    render() {
        const {category, headerMenuInfo, staredInfo} = this.props;
        const {categoryPart, categoryDep, categorySep} = this.state;

        const x = _.find(headerMenuInfo.menu, ['page_id', +categoryPart]);
        const page = x?.link;
        return (
            <Wrapper>
                <div className="home__header_content" style={{background: `url('./images/banner/banner.jpg')`}}>
                    <div className='container'>
                        <section className='home__banner'>
                            <div className='home__banner_content'>
                                <div className='row'>
                                    <NavLink to='/home' className='home__banner_logo'>
                                        <img src='/images/logos/logo.png' alt='Kars&Manex'/>
                                    </NavLink>
                                    <h3>ՓՆՏՐԻՐ <span/> ԳՏԻՐ <span/> ԳՆԻՐ</h3>
                                </div>
                                <div className='arrow__container'>
                                    <FontAwesomeIcon icon={faLongArrowAltRight} className='home__banner_arrow'/>
                                </div>
                            </div>
                            <div className="banner__search">
                                <form method="GET" action={page}
                                      className="form form--search js-search-form form--light form--banner-sidebar form--anim">
                                    <div className="row form__controls">
                                        <div className="form-group  ">
                                            <label className="control-label">Սեփականություն</label>
                                            <div className="dropdown dropdown--select" id="cf47rs_module_hero_location"
                                                 data-placeholder="Any">
                                                <select
                                                    onChange={(event) => this.handleChangeCategory(event.target.value)}
                                                    value={categoryPart}
                                                    className='dropdown-toggle js-select-checkboxes-btn'
                                                    id='dropdown-toggle js-select-checkboxes-btn1'
                                                >
                                                    {category.category?.map((value, key) => (
                                                        <option key={key}
                                                                value={value ? value.id : 1}
                                                                className='categoryParts__option'
                                                        >
                                                            {value?.icon}
                                                            {value ? value.c_name : 'Անշարժ գույք'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group  ">
                                            <label className="control-label">ԲԱԺԻՆ</label>
                                            <div className="dropdown dropdown--select"
                                                 id="cf47rs_module_hero_property_type" data-placeholder="Any">
                                                <select
                                                    onChange={event => this.handleChangeCategoryDepartment(event.target.value)}
                                                    value={categoryDep}
                                                    className='dropdown-toggle js-select-checkboxes-btn'
                                                    id='dropdown-toggle js-select-checkboxes-btn2'
                                                >
                                                    {category.categoryDep?.map((value, key) => (
                                                        <option key={key}
                                                                value={value ? value?.id : 1}
                                                                className='categoryParts__option'
                                                        >
                                                            {value ? value?.name : 'Վաճառք'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group  ">
                                            <label className="control-label">ԳՈՒՅՔԻ ՏԵՍԱԿԸ</label>
                                            <div className="dropdown dropdown--select"
                                                 id="cf47rs_module_hero_contract_type" data-placeholder="Any">
                                                <select
                                                    onChange={(event) => this.handleChangeCategorySection(event.target.value)}
                                                    value={categorySep}
                                                    className='dropdown-toggle js-select-checkboxes-btn'
                                                    id='dropdown-toggle js-select-checkboxes-btn3'
                                                >
                                                    {category.categorySec?.map((value, key) => (
                                                        <option key={key}
                                                                value={value ? value?.id : 1}
                                                                className='categoryParts__option'
                                                        >
                                                            {value ? value?.name : 'Բնակարաններ'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Գտնվելու վայրը</label>
                                            <div className="dropdown dropdown--select"
                                                 id="cf47rs_module_hero_contract_type" data-placeholder="Any">
                                                <select
                                                    onChange={(event) => this.handleChangeCategorySection(event.target.value)}
                                                    value={categorySep}
                                                    className='dropdown-toggle js-select-checkboxes-btn'
                                                    id='dropdown-toggle js-select-checkboxes-btn4'
                                                >
                                                    {category.categorySec?.map((value, key) => (
                                                        <option key={key}
                                                                value={value ? value?.id : 1}
                                                                className='categoryParts__option'
                                                        >
                                                            {value ? value?.name : 'Գյումրի'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form__buttons">
                                        <button type="submit" className="form__submit">ՏԵՍՆԵԼ ԱՐԴՅՈՒՆՔԸ</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <div className="banner__scroll-down">
                            <svg className="banner__scroll-svg" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                 y="0px" viewBox="0 0 79.37 122.88"
                                 style={{enableBackground: 'new 0 0 79.37 122.88'}} xmlSpace="preserve">
                                <g>
                                    <path
                                        d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z"/>
                                </g>
                            </svg>
                            <div className="banner__scroll-text">Իջնել ներքև</div>
                        </div>
                    </div>
                </div>
                <div className='home__central_content' style={{background: `url('./images/banner/map.gif')`}}>
                    <div className='container'>
                        <h1 className='central__content_title'>ԼԱՎԱԳՈՒՅՆ ԱՌԱՋԱՐԿՆԵՐԸ</h1>
                        <h5 className='central__content_subtitle'>ՄԵՆՔ ԱՌԱՋԱՐԿՈՒՄ ԵՆՔ ՀԱՅԱՍՏԱՆԻ ԼԱՎԱԳՈՒՅՆ ԱՆՇԱՐԺ ԵՎ
                            ՇԱՐԺԱԿԱՆ ԳՈՒՅՔԵՐԸ</h5>
                        <div className='list__container'>
                            <Product product={staredInfo}/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}


const mapStateToProps = (state) => ({
    category: state.HomeFilters.category,
    requestStatus: state.HomeFilters.requestStatus,
    headerMenuInfo: state.menus.headerMenuInfo,
    staredInfo: state.products.staredInfo,
})

const mapDispatchToProps = {
    getCategory,
    getStarRequest,
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

export default HomeContainer;
