import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Dialog = props => {

  // if (!props.open) return null;

  const classes = classnames({
    'xprog-dialog': true,
    'xs': props.maxWidth === 'xs' && !props.fullscreen,
    'sm': props.maxWidth === 'sm' && !props.fullscreen,
    'md': props.maxWidth === 'md' && !props.fullscreen,
    'lg': props.maxWidth === 'lg' && !props.fullscreen,
    'xl': props.maxWidth === 'xl' && !props.fullscreen,
    'fullscreen': props.fullscreen,
    'fx': props.direction === 'row',
    'fy': props.direction === 'column',
    'jc-start': props.justify === 'flex-start',
    'jc-center': props.justify === 'center',
    'jc-end': props.justify === 'flex-end',
    'ai-start': props.align === 'flex-start',
    'ai-center': props.align === 'center',
    'ai-end': props.align === 'flex-end'
  });

  return (
    <div className='xprog-dialog-backdrop'>
      <div className={classes}>
        {props.children}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]),
  maxWidth: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  fullscreen: PropTypes.bool
};

Dialog.defaultProps = {
  maxWidth: 'md',
  direction: 'row',
  justify: 'center',
  align: 'flex-start',
  fullScreen: false
};

export default Dialog;