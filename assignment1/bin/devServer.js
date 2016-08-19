/* @flow */

import {DevServer} from 'webcompiler';
import {join} from 'path';

const rootDir = join(__dirname, '..'),
  devDir = join(rootDir, 'development'),
  script = join(devDir, 'script.js'),
  style = join(rootDir, 'src', 'index.scss');

new DevServer(script, {style, contentBase: devDir}).run(rootDir);
