import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import precss from 'precss';
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
import size from 'postcss-size';
import lost from 'lost';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/js/main.min.js',
  format: 'iife',
  plugins: [
    postcss({
      extensions: ['.css', '.sss'],
      extract: './dist/css/main.css',
      sourceMap: true,
      plugins: [
        precss(),
        cssnext({
          calc: false,
          rem: false,
        }),
        size(),
        rucksack(),
        lost(),
      ],
    }),
    commonjs(),
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      include: '**/*.js',
      sourceMap: true
    }),
  ],
};
