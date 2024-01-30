import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/sql/sql'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/sql-hint'
import CodeMirror from 'codemirror'

Vue.prototype.$CodeMirror = CodeMirror

new Vue({
    render: h => h(App)
}).$mount('#app')
