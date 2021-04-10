import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Houses from "./pages/Houses";
import Cars from "./pages/Cars";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AddProduct from "./pages/AddProduct";

class App extends Component {
    render() {
        window.server = 'http://localhost:5000';
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/house" exact component={Houses}/>
                    <Route path="/house/:page" exact component={Houses}/>
                    <Route path="/cars" exact component={Cars}/>
                    <Route path="/cars/:page" exact component={Cars}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:page" exact component={Shop}/>
                    <Route path="/aboutUs" exact component={AboutUs}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/user" exact component={User}/>
                    <Route path="/addProduct" exact component={AddProduct}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
