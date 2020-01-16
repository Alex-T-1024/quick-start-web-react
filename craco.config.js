module.exports = function({ env }) {
  return {
    webpack: {
      alias: {},
      plugins: [],
      configure: (webpackConfig, { env, paths }) => {
        // Global scss/sass: .global.scss|sass
        // Module scss/sass: .scss|sass
        const oneOfRules = webpackConfig.module.rules[2]
        oneOfRules.oneOf.forEach(rule => {
          if (!rule.test) return
          if (rule.test.toString() === /\.(scss|sass)$/.toString()) {
            rule.test = /\.global\.(scss|sass)$/
            delete rule.exclude
          }
          if (rule.test.toString() === /\.module\.(scss|sass)$/.toString()) {
            rule.test = /\.(scss|sass)$/
            rule.exclude = /\.global\.(scss|sass)$/
          }
        })
        return webpackConfig
      },
    },
  }
}
