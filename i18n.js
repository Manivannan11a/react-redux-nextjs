const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    de: 'de',
  },
  all: {
    en: 'en',
    de: 'de',
  },
}

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en', 'de'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  keySeparator: false
})