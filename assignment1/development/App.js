/* @flow */

import React, {PureComponent} from 'react';
import MiniWidget from '../src/MiniWidget';

/* eslint-disable require-jsdoc */

export default class App extends PureComponent {

  render() {
    return (
      <div>
        <MiniWidget
          rating={8.1}
          reviewCount={56}
          name="<HNK> Hoofddorp"
          url="https://www.deskbookers.com/nl-nl/hoofddorp/hnk-hoofddorp"
        />
        <br />
        <br />
        <MiniWidget
          rating={4}
          reviewCount={50}
          name="<HNK> Hoofddorp"
          url="https://www.deskbookers.com/nl-nl/hoofddorp/hnk-hoofddorp"
          horizontal
        />
      </div>
    );
  }

}
