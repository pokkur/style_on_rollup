import babel from 'rollup-plugin-babel';
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
    })
  ],
};
