import React, {Component} from 'react';
import "../../assets/CSS/components/converter.css";
import {connect} from "react-redux";
import {getCurrencyRequest, getRatesRequest} from "../../store/actions/converter";

class Converter extends Component {

    componentDidMount() {
        this.props.getCurrencyRequest()
    }

    handleChangeRate = (ev) => {
        this.props.getRatesRequest(ev);
    }

    render() {
        const {currencyNames, rateInfo} = this.props;
        return (
            <div className="Converter">
                <label className='select__div' htmlFor='converter__select'>
                    <svg className="header__settings-icon coin">
                        <use xlinkHref="#icon-money">
                            <svg viewBox="0 0 14 14" id="icon-money">
                                <path
                                    d="M12.3 5.5c.1-.3.2-.6.2-1 0-2-2.4-3.5-5.5-3.5S1.5 2.6 1.5 4.5c0 .4.1.7.2 1-.1.3-.2.7-.2 1 0 .4.1.7.2 1-.1.3-.2.7-.2 1 0 2 2.4 3.5 5.5 3.5s5.5-1.5 5.5-3.5c0-.3-.1-.7-.2-1 .1-.3.2-.6.2-1 0-.3-.1-.6-.2-1zM7 8c1.9 0 3.5-.6 4.5-1.5C11.5 7.9 9.4 9 7 9S2.5 7.9 2.5 6.6C3.5 7.5 5.1 8 7 8zm0-6c2.4 0 4.5 1.1 4.5 2.5S9.4 7 7 7 2.5 5.9 2.5 4.5 4.6 2 7 2zm0 9c-2.4 0-4.5-1.1-4.5-2.5 1 1 2.6 1.5 4.5 1.5s3.5-.6 4.5-1.5C11.5 9.9 9.4 11 7 11z"/>
                            </svg>
                        </use>
                    </svg>
                    <select
                        name="from"
                        onChange={(event) => this.handleChangeRate(event.target.value)}
                        value={rateInfo ? rateInfo.target_code : 'AMD'}
                        className='converter__select'
                        id='converter__select'
                        autoFocus={true}
                    >
                        {currencyNames.rate?.map((cur, key) => (
                            <option key={key} value={cur ? cur.value : "AMD"}>{cur ? cur.name : "AMD"}</option>
                        ))}
                    </select>
                </label>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currencyNames: state.converter.currencyNames,
    requestStatus: state.converter.requestStatus,
    rateInfo: state.converter.rateInfo,
})

const mapDispatchToProps = {
    getCurrencyRequest,
    getRatesRequest
}

const ConverterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Converter)

export default ConverterContainer;