import Vue from 'vue'
import App from './app.vue'
import './asserts/styles/index.css'
import './asserts/images/payclose.png'
import './asserts/styles/stylus.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
	render:(h)=>h(App)
}).$mount(root)
