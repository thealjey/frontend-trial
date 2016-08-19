/* @flow */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './App';

/* @flowignore */
render(<App />, document.getElementById('app'));
