import config from '../helpers/clientConfig';
import * as _ from 'lodash';

export default {
    money: moneyFormat
};

function moneyFormat(amount): string {
    let amountNum = parseFloat(amount);

    if (!_.isNumber(amountNum)) return 'invalid value';

    let amountFormatted = amountNum.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    return `${config.currencySymbol} ${amountFormatted}`;
}
