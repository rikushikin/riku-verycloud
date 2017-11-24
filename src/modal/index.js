import Vue from 'vue'
Vue.config.productionTip = false

import Main from './Main'

const Constructor = Vue.extend(Main)
let instance
let seed = 1

const Modal = ({propsData} = {}) => {
  instance = new Constructor({
    propsData
  })
  instance.id = 'modal-' + seed++
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

export default Modal
