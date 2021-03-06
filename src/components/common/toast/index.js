import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  console.log("Vue", Vue)
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = Toast
}

export default obj