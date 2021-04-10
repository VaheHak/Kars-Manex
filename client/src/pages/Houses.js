import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {connect} from "react-redux";
import {getProductRequest} from "../store/actions/products";
import Product from "../components/products/product";
import '../assets/CSS/pages/house.css'
import {NavLink} from "react-router-dom";

class Houses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    componentDidMount() {
        const {search} = this.state;
        this.props.getProductRequest(search, 1);
    }

    handleSearch = (event) => {
        this.setState({search: event})
    }
    search = (event) => {
        const {search} = this.state;
        if (event.code === 'Enter') {
            this.props.getProductRequest(search, 1);
        }
    }

    render() {
        const {productInfo} = this.props;
        const {search} = this.state;
        return (
            <Wrapper>
                <div className='house__header' style={{background: `url('./images/banner/bg-house.jpg')`}}
                     onKeyPress={e => this.search(e)}>
                    <div className='container'>
                        <section className='house__header_content'>
                            <NavLink to='/home' className='house__header_logo'>
                                <img src='/images/logos/house.png' alt='Kars&Manex'/>
                            </NavLink>
                            <div className='search__area'>
                                <input id="search-input" placeholder="Փնտրել ..." title="Փնտրել..." type="search"
                                       onChange={e => this.handleSearch(e.target.value)}/>
                                <button className='search__button' type='button'
                                        onClick={() => this.props.getProductRequest(search, 1)}
                                >Փնտրել
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <main>
                    <div className='container'>
                        <div className='product__content'>
                            <div className='product__content_row'>
                                <div className='product__sort_area'>

                                </div>
                                <section className='product__item_container'>
                                    <Product product={productInfo} style={{width: '33%'}}/>
                                </section>
                            </div>
                            <section className='filter_container'>

                            </section>
                        </div>
                    </div>
                </main>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    productInfo: state.products.productInfo,
    requestStatus: state.products.requestStatus,
    rateInfo: state.converter.rateInfo,
})

const mapDispatchToProps = {
    getProductRequest,
}

const HousesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Houses)

export default HousesContainer;
