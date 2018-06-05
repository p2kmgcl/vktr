const babel = require('rollup-plugin-babel')

export default {
  input: './src/index.js',

  output: {
    file: 'dist/vktr.js',
    format: 'umd',
    name: 'vktr'
  },

  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
