import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/** vue logger */
import VueLogger from 'vuejs-logger';

/** declare */
const options = {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true
};

/**execc vue logger */
Vue.use(VueLogger, options);

new Vue({
  render: h => h(App),
}).$mount('#app')
