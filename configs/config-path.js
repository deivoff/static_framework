const global = require('./config-global');

module.exports = {
  js: {
    entry: `/markup/static/${global.js.folder}/main.${global.js.extension}`,
    output: `build/static/js/`
  },
  css: {
    main: `/markup/static/${global.css.folder}/main.bundle.${global.css.extension}`,
    output: `build/static/сss/`
  },
  html: {
    entry: `/markup/pages`,
    output: `build`,
  }
}