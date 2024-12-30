import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import common from '@/locales/common-en.json'

const resources = {
  en: {
    common
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
