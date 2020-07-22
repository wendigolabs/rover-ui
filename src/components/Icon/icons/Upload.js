import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Upload = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </svg>
);
Upload.propTypes = { fill: PropTypes.string };
Upload.defaultProps = { fill: iconColorsMap.mainicon };

export default Upload;