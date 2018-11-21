import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import {uglify} from "rollup-plugin-uglify";

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		entry: 'src/DragScroll.js',
		dest: pkg.browser,
		format: 'umd',
		moduleName: 'DragScroll',
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
				exclude: ['node_modules/**']
			}),
			uglify(),
		]
	},

	{
		entry: 'src/DragScroll.js',
		targets: [
			{ dest: pkg.main, format: 'cjs' },
			{ dest: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		]
	},

	{
		input: 'src/DragScroll.js',
		output: {
			name: 'DragScroll',
			file: 'dist/drag-scroll.min.js',
			format: 'iife',
			sourcemap: false
		},
		plugins: [
			resolve(),
			commonjs(),
			babel(),
			uglify()
		],
		globals: {
			dragscroll: 'DragScroll'
		}
	},

    {
        input: 'src/DragScroll.js',
        output: {
            name: 'DragScroll',
            file: 'dist/drag-scroll.js',
            format: 'iife',
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            babel(),
        ],
        globals: {
            dragscroll: 'DragScroll'
        }
    }
];