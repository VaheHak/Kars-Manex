import axios from "axios";

const KEY = "c7f8817ee6563cefe1ffcb58"

class Converter {

    static getCurrency() {
        return axios.get(`${window.server}/currency`)
    }

    static getRates(toCurrency) {
        return axios.get(`https://v6.exchangerate-api.com/v6/${KEY}/pair/AMD/${toCurrency}`).catch(err => {
            console.log("Exchange", err);
        });
    }

}

export default Converter;