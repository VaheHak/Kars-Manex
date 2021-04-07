import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import '../assets/CSS/pages/addProduct.css'
import {postProductRequest} from "../store/actions/products";
import {connect} from "react-redux";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            price: '',
            email: '',
            image: '',
            pictures: [],
            description: '',
            location: '',
            category_id: 1,
            c_department: '',
            c_section: '',
            building_type: '',
            new_built: '',
            floor: '',
            room_numbers: '',
            bathRoom_numbers: '',
            area: '',
            user_id: ''
        }
    }

    render() {
        const {
            name, address, phone, price, email, image, pictures, description, location,
            category_id, c_department, c_section, building_type, new_built, floor,
            room_numbers, bathRoom_numbers, area, user_id,
        } = this.state;
        return (
            <Wrapper showFooter={false}>
                <menu className='add__product'>
                    <div className='container'>
                        <div className='row'>
                            <div className='add__product_categories'>
                                <h4>Կոնտակտային տվյալներ</h4>
                                <h4>Նկարներ</h4>
                                <h4>Ավելացնել տվյալներ</h4>
                                <h4>Մանրամասն տեղեկություն</h4>
                            </div>
                            <form className="add__product_area">
                                <div className='add__product_section'>
                                    <label>Կոդ</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({name: event.target.value});
                                        }}
                                    />
                                    <label>Մարզ/Քաղաք</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({location: event.target.value});
                                        }}
                                    />
                                    <label>Հասցե</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({address: event.target.value});
                                        }}
                                    />
                                    <label>Հեռախոս</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({phone: event.target.value});
                                        }}
                                    />
                                    <label>Էլ․ փոստ</label>
                                    <input
                                        type="email"
                                        onChange={(event) => {
                                            this.setState({email: event.target.value});
                                        }}
                                    />
                                </div>
                                <div className='add__product_section'>
                                    <label>Գլխավոր նկար</label>
                                    <input
                                        type="file" accept="image/*"
                                        onChange={(event) => {
                                            this.setState({image: event.target.files[0]});
                                        }}
                                        name='image'
                                    />
                                    <label>Ավելացնել լուսանկարներ</label>
                                    <input
                                        type="file" multiple accept="image/*"
                                        onChange={(event) => {
                                            this.setState({pictures: event.target.files});
                                        }}
                                        name='pictures'
                                    />
                                </div>
                                <div className='add__product_section'>
                                    <label>Շինության տիպը</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({building_type: event.target.value});
                                        }}
                                    />
                                    <label>Նորակառույց</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({new_built: event.target.value});
                                        }}
                                    />
                                    <label>Հարկ</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({floor: event.target.value});
                                        }}
                                    />
                                    <label>Սենյակների քանակ</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({room_numbers: event.target.value});
                                        }}
                                    />
                                    <label>Սանհանգույցների քանակ</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({bathRoom_numbers: event.target.value});
                                        }}
                                    />
                                    <label>Ընդհանուր մակերեսը</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({area: event.target.value});
                                        }}
                                    />
                                </div>
                                <div className='add__product_section'>
                                    <label>Գինը</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({price: event.target.value});
                                        }}
                                    />
                                    <label>Բաժին</label>
                                    <select onChange={(event) => {
                                        this.setState({c_department: event.target.value});
                                    }}
                                    />
                                    <label>Գույքի Տեսակը</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({c_section: event.target.value});
                                        }}
                                    />
                                    <label>Նկարագիր</label>
                                    <textarea
                                        onChange={(event) => {
                                            this.setState({description: event.target.value});
                                        }}
                                    />
                                    <input
                                        type="hidden"
                                        onChange={(event) => {
                                            this.setState({category_id: event.target.value});
                                        }}
                                    />
                                    <input
                                        type="hidden"
                                        onChange={(event) => {
                                            this.setState({user_id: event.target.value});
                                        }}
                                    />
                                </div>
                            </form>
                            <button type='button' className='post__product'
                                    onClick={() => this.props.postProductRequest(
                                        name, address, phone, price, email, image, pictures, description, location,
                                        category_id, c_department, c_section, building_type, new_built, floor,
                                        room_numbers, bathRoom_numbers, area, user_id
                                    )}>
                                Ավելացնել
                            </button>
                        </div>
                    </div>
                </menu>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    postProductInfo: state.products.postProductInfo,
    requestStatus: state.products.requestStatus,
})

const mapDispatchToProps = {
    postProductRequest,
}

const AddProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProduct)

export default AddProductContainer;