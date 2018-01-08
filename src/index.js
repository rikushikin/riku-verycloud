// utils
import arrayToTree from './utils/arrayToTree';
import byteSize from './utils/byteSize';
import cookie from './utils/cookie';
import dateFormat from './utils/dateFormat';
import {debounce, throttle} from './utils/debounce';
import number from './utils/number';
import queryString from './utils/queryString';
import stringTrim from './utils/stringTrim';

// components
import RQrcode from './qrcode/';

const components = [
    RQrcode
];

const utils = {
    arrayToTree,
    byteSize,
    cookie,
    dateFormat,
    debounce,
    throttle,
    number,
    queryString,
    stringTrim
};

const install = (Vue) => {
    if (install.installed) return;
    for (let cpt of components) {
        if (!cpt.name) continue;
        Vue.component(cpt.name, cpt);
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...utils
};
module.exports.default = module.exports = API; // eslint-disable-line no-undef
