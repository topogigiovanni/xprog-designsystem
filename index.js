'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var Button = function Button(props) {
  var style = classnames({
    'button': true,
    'primary': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled
  });
  return /*#__PURE__*/React.createElement("button", {
    className: style,
    onClick: props.disabled ? null : props.onClick
  }, props.children);
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  children: 'Label',
  style: 'primary'
};

var Dialog = function Dialog(props) {
  // if (!props.open) return null;
  var classes = classnames({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "xprog-dialog-backdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes
  }, props.children));
};

Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.array.isRequired]),
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

var Input = function Input(_ref) {
  var autoFocus = _ref.autoFocus,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      label = _ref.label,
      onEnter = _ref.onEnter,
      setValue = _ref.setValue,
      type = _ref.type,
      value = _ref.value,
      warning = _ref.warning;

  var KeyDown = function KeyDown(_ref2) {
    var key = _ref2.key;
    return key === 'Enter' && onEnter && onEnter();
  };

  var Label = function Label() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'label'
    }, label && label);
  };

  var Warning = function Warning() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'warning'
    }, warning && invalid ? warning : ' ');
  };

  var props = {
    autoFocus: autoFocus,
    defaultValue: value,
    disabled: disabled,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setValue(target.value);
    },
    onKeyDown: KeyDown,
    type: type
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "form-field ".concat(invalid ? 'invalid' : '', " ").concat(type)
  }, /*#__PURE__*/React.createElement(Label, null), type === 'textarea' && /*#__PURE__*/React.createElement("textarea", props), type !== 'textarea' && /*#__PURE__*/React.createElement("input", props), /*#__PURE__*/React.createElement(Warning, null));
};

Input.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
};
Input.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
};
var index = {
  Input: Input
};

var Icon = function Icon(data) {
  return /*#__PURE__*/React.createElement("svg", data, data.children);
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
};
Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
};

var Panel = function Panel(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel-body ".concat(style ? style : '')
  }, children && children);
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.string
};

var version = "1.1.52";

var Version = function Version() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

exports.Button = Button;
exports.Dialog = Dialog;
exports.Form = index;
exports.Icon = Icon;
exports.Panel = Panel;
exports.Version = Version;
