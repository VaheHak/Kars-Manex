import React, {Component} from 'react';
import Utils from "../../helpers/Utils";
import {connect} from "react-redux";
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: '',
        }
    }

    handleZoom = (event) => {
        this.setState({selectedItem: event.currentTarget.dataset.id});
        // this.zoom.style.display = 'block';
    }

    render() {
        const {requestStatus, product, rateInfo, style} = this.props;
        const {selectedItem} = this.state;
        return (
            <>
                {requestStatus === 'request' ? 'Տվյալների բեռնում...' :
                    requestStatus === 'success' ? product.product?.map((val, key) => (
                        <div className="listing__item" key={key} style={style}>
                            <div className="properties__item" data-sr-id="2">
                                <div className="properties__thumb">
                                    <div data-id={val.id} onClick={(e) => this.handleZoom(e)}
                                         className="item-photo">
                                        <img src="http://realtyspace.codefactory47.com/app/uploads/2016/04/15-554x360-c-center.jpg"
                                            alt={val.p_name}/>
                                        <figure className="item-photo__hover item-photo__hover--params">
                                            <span className="properties__params">{val.category_section.name}</span>
                                            <span
                                                className="properties__params">{val.p_name}</span>
                                            <span
                                                className="properties__params">{val.phone}</span>
                                            <span
                                                className="properties__intro ">{val.description?.slice(0, 50).concat('...')}</span>
                                            <span className="properties__time">
                                                Ավելացվել է՝ {val.createdAt ? moment(val.createdAt).format('L') : 'տեղ․ չկա'}
                                            </span>
                                            <span className="properties__more">ՄԱՆՐԱՄԱՍՆԵՐԸ</span>
                                        </figure>
                                    </div>
                                    <span className="properties__ribon">{val.category_department.name}</span>
                                </div>
                                <div className="properties__info">
                                    <div className="properties__address ">
                                        <span className="properties__address-street">{val.address}</span>
                                        <span className="properties__address-city">{val.location}</span>
                                    </div>
                                    <hr className="divider--dotted properties__divider"/>
                                    <div className="properties__offer">
                                        <div className="properties__offer-column">
                                            <div className="properties__offer-value">
                                                <strong>{Utils.formatPrice(val.price, rateInfo)}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {selectedItem === val.id ? (
                                <div ref={(ref) => this.zoom = ref} className='container zoom__container'
                                     style={{display: 'block'}}>
                                    <div className='zoom__content'>
                                        <div className='photos__content'>
                                            <img src='http://realtyspace.codefactory47.com/app/uploads/2016/04/15-554x360-c-center.jpg'
                                                alt={val.p_name}/>
                                            <div>

                                            </div>
                                        </div>
                                        <div className='info__content'>

                                        </div>
                                        <button className="close__button" type='button'
                                                onClick={() => this.zoom.style.display = 'none'}>
                                            <FontAwesomeIcon className='faWindowClose' icon={faWindowClose}/>
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )) : 'Տվյալների սխալ կամ բացակայություն'}

            </>
        );
    }

}


const mapStateToProps = (state) => ({
        requestStatus: state.products.requestStatus,
        rateInfo: state.converter.rateInfo,
    }

)

const mapDispatchToProps = {}

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Product)

export default ProductContainer;
