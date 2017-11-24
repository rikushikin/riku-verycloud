// tools
import byteSize from './src/tools/byteSize'
import cookie from './src/tools/cookie'
import dateFormat from './src/tools/dateFormat'
import {debounce, throttle} from './src/tools/debounce'
import number from './src/tools/number'
import queryString from './src/tools/queryString'
import stringTrim from './src/tools/stringTrim'

// just for test
import $Modal from './src/modal'

// components
import RQrcode from './src/qrcode/'

const components = [
  RQrcode
]

export {
  byteSize,
  cookie,
  dateFormat,
  debounce,
  throttle,
  number,
  queryString,
  stringTrim,
  $Modal,
  RQrcode
}

const install = (Vue, opts = {}) => {
  if (install.installed) return
  for (let cpt of components) {
    if (!cpt.name) continue
    Vue.component(cpt.name, cpt)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {install}
