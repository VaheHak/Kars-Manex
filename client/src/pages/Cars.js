import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {connect} from "react-redux";
import {getProductRequest} from "../store/actions/products";
import Product from "../components/products/product";
import '../assets/CSS/pages/cars.css'
import {NavLink} from "react-router-dom";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    componentDidMount() {
        const {search} = this.state;
        this.props.getProductRequest(search, 2);
    }

    handleSearch = (event) => {
        this.setState({search: event})
    }
    search = (event) => {
        const {search} = this.state;
        if (event.code === 'Enter') {
            this.props.getProductRequest(search, 2);
        }
    }

    render() {
        const {productInfo} = this.props;
        const {search} = this.state;
        return (
            <Wrapper>
                <div className='cars__header' style={{background: `url('./images/banner/bg-cars.jpg')`}}
                     onKeyPress={e => this.search(e)}>
                    <div className='container'>
                        <section className='cars__header_content'>
                            <NavLink to='/home' className='cars__header_logo'>
                                <img src='/images/logos/cars-logo.png' alt='Kars&Manex'/>
                            </NavLink>
                            <div className='cars__search_area'>
                                <input id="cars__search_input" placeholder="Փնտրել ..." title="Փնտրել..." type="search"
                                       onChange={e => this.handleSearch(e.target.value)}/>
                                <button className='cars__search_button' type='button'
                                        onClick={() => this.props.getProductRequest(search, 2)}
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
                                <div className='cars__sort_area'>

                                </div>
                                <section className='product__item_container'>
                                    <Product product={productInfo} style={{width: '33%'}}/>
                                </section>
                            </div>
                            <section className='cars__filter_container'>

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

const CarsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cars)

export default CarsContainer;
