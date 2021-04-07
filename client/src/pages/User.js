import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserRequest} from "../store/actions/users";
import Wrapper from "../components/Wrapper";
import '../assets/CSS/pages/user.css'
import Product from "../components/products/product";

class User extends Component {
    componentDidMount() {
        this.props.getUserRequest()
    }

    render() {
        const {userInfo, requestStatus, loginInfo} = this.props;
        console.log(userInfo,loginInfo)
        return (
            <Wrapper>
                <section className='user__header'>
                    <div className='container'>
                        <div className='user__header_content'>
                            {requestStatus === 'request' ? 'Տվյալների բեռնում...' :
                                requestStatus === 'success' ? (
                                    <div className="user_profile" id={userInfo.user?.id}>
                                        <div className='image__name'>
                                            <img src='/images/banner/banner.jpg' alt='User_image'/>
                                            <h4 className='user__name'>{userInfo.user?.firstName} &ensp;{userInfo.user?.lastName}</h4>
                                        </div>
                                        <div className='contact__data'>
                                            <h4>Գործունեթյունը։&ensp;<i>{userInfo.user?.work}</i></h4>
                                            <a href={`tel:${userInfo.user?.phone}`}> Հեռ:&ensp;
                                                <i>{userInfo.user?.phone}</i></a>
                                            <a href={`mailto:${userInfo.user?.email}`} target="_blank" rel="noreferrer">
                                                Էլ. փոստ:&ensp;<i>{userInfo.user?.email}</i>
                                            </a>
                                        </div>
                                    </div>
                                ) : 'Տվյալների սխալ կամ բացակայություն'}
                            <div className='user__settings'>

                            </div>
                        </div>
                    </div>
                </section>
                <menu className='user__content'>
                    <div className='container'>
                        <div className='user__content_row'>
                            <div className='user__filter_area'>

                            </div>
                            <div className='user__product_area'>
                                <div className='userProduct__sort_area'>

                                </div>
                                <div className='user__product_list'>
                                    <Product/>
                                </div>
                            </div>
                        </div>
                    </div>
                </menu>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.users.userInfo,
    requestStatus: state.users.requestStatus,
    loginInfo: state.users.loginInfo,
})

const mapDispatchToProps = {
    getUserRequest
}

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(User)

export default UsersContainer;

// const [name, setName] = useState("");
// const [surname, setSurname] = useState("");
// const [phone, setPhone] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


// const updateEmployeeWage = (id) => {
//     axios.put("http://localhost:3001/update", {wage: newWage, id: id}).then(
//         (response) => {
//             setEmployeeList(
//                 employeeList.map((val) => {
//                     return val.id === id
//                         ? {
//                             id: val.id,
//                             name: val.name,
//                             country: val.country,
//                             age: val.age,
//                             position: val.position,
//                             wage: newWage,
//                         }
//                         : val;
//                 })
//             );
//         }
//     );
// };
//
// const deleteEmployee = (id) => {
//     axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
//         setEmployeeList(
//             employeeList.filter((val) => {
//                 return val.id !== id;
//             })
//         );
//     });
// };
//
// {/*<div className="information">*/
// }
// {/*    <label>Name:</label>*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        onChange={(event) => {*/
// }
// {/*            setName(event.target.value);*/
// }
// {/*        }}*/
// }
// {/*    />*/
// }
// {/*    <label>Surname:</label>*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        onChange={(event) => {*/
// }
// {/*            setSurname(event.target.value);*/
// }
// {/*        }}*/
// }
// {/*    />*/
// }
// {/*    <label>Phone:</label>*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        onChange={(event) => {*/
// }
// {/*            setPhone(event.target.value);*/
// }
// {/*        }}*/
// }
// {/*    />*/
// }
// {/*    <label>Email:</label>*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        onChange={(event) => {*/
// }
// {/*            setEmail(event.target.value);*/
// }
// {/*        }}*/
// }
// {/*    />*/
// }
// {/*    <label>Password:</label>*/
// }
// {/*    <input*/
// }
// {/*        type="text"*/
// }
// {/*        onChange={(event) => {*/
// }
// {/*            setPassword(event.target.value);*/
// }
// {/*        }}*/
// }
// {/*    />*/
// }
// {/*    /!*<button onClick={addEmployee}>Add User</button>*!/*/
// }
// {/*</div>*/
// }

