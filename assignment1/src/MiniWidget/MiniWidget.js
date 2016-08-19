/* @flow */

import React, {PropTypes} from 'react';
import StarRating from '../StarRating';
import ImageLogo from './ImageLogo';
import TextLogo from './TextLogo';

const {bool, number, string} = PropTypes;

type MiniWidgetProps = {
  rating: ?number;
  horizontal: boolean;
  reviewCount: number;
  name: string;
  url: string;
};

const MiniWidget = ({rating, horizontal, reviewCount, name, url}: MiniWidgetProps) =>
  <a className={`x-mini-widget x-mini-widget-${horizontal ? 'horizontal' : 'vertical'}`} href={url}>
    {horizontal ? <header>{name}</header> : null}
    <div className="body">
      {horizontal ? <ImageLogo /> : null}
      <div>
        <StarRating value={rating} />
        <div className="reviews">Op basis van {reviewCount} reviews</div>
      </div>
    </div>
    {horizontal ? null : <header>{name}</header>}
    <footer>
      <div className="intro">Bekijk reviews op</div>
      <TextLogo />
    </footer>
  </a>;

MiniWidget.propTypes = {
  rating: number,
  horizontal: bool,
  reviewCount: number,
  name: string,
  url: string
};

MiniWidget.defaultProps = {
  horizontal: false,
  reviewCount: 0,
  name: '',
  url: ''
};

export default MiniWidget;
