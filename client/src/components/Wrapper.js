import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Wrapper extends Component {
    static defaultProps = {
        showFooter: true
    }

    render() {
        const {showFooter} = this.props;
        return (
            <>
                <Header/>
                {this.props.children}
                {showFooter ? <Footer/> : null}
            </>
        );
    }
}

export default Wrapper;
