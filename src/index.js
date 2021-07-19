import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

import i18n from './i18n'

import './icons'

Vue.config.productionTip = false
console.log(process.env)
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    release: 'vislib@' + process.env.npm_package_version,
    dsn: 'https://9d8ee0ea1a2749949dd1e641b0f7c071@o286322.ingest.sentry.io/5217806',
    integrations: [new VueIntegration({ Vue, attachProps: true })]
  })
}

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

export { default as ChartPanel } from '@/views/ChartPanel'
export { default as Dashboard } from '@/views/Dashboard'
export { default as Source } from '@/views/source'
export {
  i18n
}