// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
// import typescript from 'rollup-plugin-typescript2';
import typescript from 'rollup-plugin-typescript';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      exports: 'named',
      format: 'cjs',
      file: './lib/main.js'
    },
    {
      file: pkg.module,
      format: 'es',
      file: './lib/main.es.js'
    }
  ],
  plugins: [
    resolve(),
    typescript(),
    terser()
  ]
};
