import fs from 'fs';
import path from 'path';
import minimatch from 'minimatch';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import async from 'rollup-plugin-async';
import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import json from '@rollup/plugin-json';

const ROOT_RESOLVE = path.resolve();

const PACKAGES_RESOLVE = path.resolve('packages');

const ALL_PACKAGES = '*';

export const INCLUDES = process.env.PACKAGES ? process.env.PACKAGES.split(/\s*,\s*/) : [];

const config = {
  input: path.resolve(ROOT_RESOLVE, 'src', 'index.js'),
  moduleContext: {
   'node_modules/@esri/**': 'window'
  },
  plugins: [
    async(),
    json(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      inject: true,
      plugins: [
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
    }),
  ],
  external: [
    'prop-types',
    'react',
    'react-dom',
    'react-inlinesvg',
    'react-is',
    '@esri/react-arcgis',
    '@material-ui/core',
    '@material-ui/styles',
    '@asseinfo/react-kanban',
    '@mui',
    'react/jsx-runtime',
    '@mui/icons-material',
    '@mui/icons-material/LocationOn',
    '@babel',
    'mathjs'
  ],
};

export const configs = Object.entries(
  (fs.existsSync(PACKAGES_RESOLVE)
    ? fs.readdirSync(PACKAGES_RESOLVE)
    : []
  ).reduce((collection, name) => {
    const pathname = path.resolve(PACKAGES_RESOLVE, name);
    if (fs.statSync(pathname).isDirectory()
      && INCLUDES.some(pattern => minimatch(pathname, `${PACKAGES_RESOLVE}/${pattern}`))) {
      return {
        ...collection,
        [pathname]: {
          ...config,
          input: path.resolve(PACKAGES_RESOLVE, name, 'src', 'index.js'),
        },
      };
    }
    return collection;
  }, {}),
);

if ((INCLUDES.length === 0 || INCLUDES.includes(ALL_PACKAGES))
    && fs.statSync(config.input).isFile()) {
  configs.push([ROOT_RESOLVE, config]);
}

export default config;
