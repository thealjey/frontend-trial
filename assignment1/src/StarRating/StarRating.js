/* @flow */

import React, {PropTypes} from 'react';
import ceil from 'lodash/ceil';
import clamp from 'lodash/clamp';
import times from 'lodash/times';

const maxStars = 5;

const StarRating = ({value}: {value: number}) =>
  <div className="x-star-rating">
    {times(clamp(ceil(value), 0, maxStars), i => <i key={i} className="fa fa-star" aria-hidden="true" />)}
  </div>;

StarRating.propTypes = {
  value: PropTypes.number
};

StarRating.defaultProps = {
  value: 0
};

export default StarRating;
