import React, {Component} from 'react';
import Utils from "../../helpers/Utils";
import {connect} from "react-redux";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
        }
    }

    handleZoom = (e) => {
        const {product} = this.props;
        const pro = product.product;
        const i = pro.findIndex(r => r.id === e)
        if (i > -1) {
            this.setState({products: pro[i]})
            this.zoom.className = "zoom__container";
        }
    }

    render() {
        const {requestStatus, product, rateInfo, style} = this.props;
        const {products} = this.state;
        return (
            <>
                {requestStatus === 'request' ? 'Տվյալների բեռնում...' :
                    requestStatus === 'success' ? product.product?.map((val, key) => (
                        <div className="listing__item" key={key} style={style}>
                            <div className="properties__item" data-sr-id="2">
                                <div className="properties__thumb">
                                    <div data-id={val.id} onClick={() => this.handleZoom(val.id)}
                                         className="item-photo">
                                        <img
                                            src="http://realtyspace.codefactory47.com/app/uploads/2016/04/15-554x360-c-center.jpg"
                                            alt={val.p_name}/>
                                        <figure className="item-photo__hover item-photo__hover--params">
                                            <span className="properties__params">{val.categorySec.name}</span>
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
                                    <span className="properties__ribon">{val.categoryDep.name}</span>
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
                                                <strong>
                                                    {rateInfo ? Utils.formatPrice(val.price, rateInfo) :
                                                        <div className='priceLoad'>
                                                            {Utils.formatPrice(val.price, rateInfo)}
                                                        </div>}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )) : 'Տվյալների սխալ կամ բացակայություն'}
                <div ref={(ref) => this.zoom = ref} className='container zoom_hidden'>
                    <div className='zoom__content'>
                        <div className='photos__content'>
                            <p>{products.category ? products.category.c_name + ' > ' + products.categoryDep.name + ' > ' +
                                products.categorySec.name : null}</p>
                            <img src='http://realtyspace.codefactory47.com/app/uploads/2016/04/15-554x360-c-center.jpg'
                                 alt={products.p_name}/>
                            <div>

                            </div>
                        </div>
                        <div className='info__content'>
                            <h3 className="info__content_title">{products.p_name}</h3><br/>
                            <table className='product__info_table'>
                                <tbody className='product__info_tbody'>
                                <tr>
                                    <td>Տարածաշրջան</td>
                                    <td>{products.location}</td>
                                    <td>Գին</td>
                                    <td>{rateInfo ? Utils.zoomFormatPrice(products.price, rateInfo) :
                                        <div className='priceLoad'>
                                            {Utils.zoomFormatPrice(products.price, rateInfo)}
                                        </div>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Հասցե</td>
                                    <td>{products.address}</td>
                                    <td>Հեռախոսահամար</td>
                                    <td>{products.phone}</td>
                                </tr>
                                <tr>
                                    <td>Էլ. փոստ</td>
                                    <td>{products.email}</td>
                                    <td>Հավանած</td>
                                    <td>{products.star ? 'Այո' : 'Ոչ'}</td>
                                </tr>
                                </tbody>
                                {products.homeFilter ? (
                                    <tbody>
                                    <tr>
                                        <td>Շինության տիպը</td>
                                        <td>{products.homeFilter.building_type}</td>
                                        <td>Սենյակների քանակ</td>
                                        <td>{products.homeFilter.room_numbers}</td>
                                    </tr>
                                    <tr>
                                        <td>Նորակառույց</td>
                                        <td>{products.homeFilter.new_built ? 'Այո' : 'Ոչ'}</td>
                                        <td>Սանհանգույցների քանակ</td>
                                        <td>{products.homeFilter.bathRoom_numbers}</td>
                                    </tr>
                                    <tr>
                                        <td>Հարկ</td>
                                        <td>{products.homeFilter.floor}</td>
                                        <td>Ընդհանուր մակերեսը</td>
                                        <td>{products.homeFilter.area}</td>
                                    </tr>
                                    </tbody>
                                ) : products.carFilter ? (
                                    <tbody>
                                    <tr>
                                        <td>Մակնիշ</td>
                                        <td>{products.carFilter.brand}</td>
                                        <td>Շարժիչի ծավալը</td>
                                        <td>{products.carFilter.motorVolume}</td>
                                    </tr>
                                    <tr>
                                        <td>Մոդել</td>
                                        <td>{products.carFilter.model}</td>
                                        <td>Փոխանցման տուփը</td>
                                        <td>{products.carFilter.transmission}</td>
                                    </tr>
                                    <tr>
                                        <td>Տարի</td>
                                        <td>{products.carFilter.bYear}</td>
                                        <td>Քարշակ</td>
                                        <td>{products.carFilter.traction}</td>
                                    </tr>
                                    <tr>
                                        <td>Թափքի տարատեսակ</td>
                                        <td>{products.carFilter.bodyType}</td>
                                        <td>Գույն</td>
                                        <td>{products.carFilter.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Վազքը</td>
                                        <td>{products.carFilter.run}</td>
                                        <td>Ղեկ</td>
                                        <td>{products.carFilter.wheel}</td>
                                    </tr>
                                    <tr>
                                        <td>Ձիաուժ</td>
                                        <td>{products.carFilter.horsepower}</td>
                                        <td>Շարժիչ</td>
                                        <td>{products.carFilter.motor}</td>
                                    </tr>
                                    <tr>
                                        <td>Մաքսազերծված է</td>
                                        <td>{products.carFilter.customsCleared ? 'Այո' : 'Ոչ'}</td>
                                    </tr>
                                    </tbody>
                                ) : null}
                            </table>
                            <br/>
                            <p className="info__content_description">{products.description}</p><br/>
                        </div>
                        <button className="close__button" type='button'
                                onClick={() => this.zoom.className = "zoom_hidden"}>
                            <FontAwesomeIcon className='faWindowClose' icon={faWindowClose}/>
                        </button>
                    </div>
                </div>
            </>
        );
    }

}


const mapStateToProps = (state) => ({
    requestStatus: state.products.requestStatus,
    rateInfo: state.converter.rateInfo,
})

const mapDispatchToProps = {}

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Product)

export default ProductContainer;
