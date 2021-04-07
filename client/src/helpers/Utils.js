import _ from 'lodash'

class Utils {

    static formatPrice(price, rate) {
        return rate.conversion_rate ?
            (rate.target_code + " " + _.toNumber(price * rate.conversion_rate.toString()).toFixed(2))
            : `AMD ${price}`;
    }
}

export default Utils;
