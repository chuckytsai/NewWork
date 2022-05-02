import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CCardImgOverlay

var CCardImgOverlay = function CCardImgOverlay(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef"]); //render


  var classes = classNames(className, 'card-img-overlay');
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardImgOverlay.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
CCardImgOverlay.defaultProps = {
  tag: 'div'
};
export default CCardImgOverlay;