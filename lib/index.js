'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Creates a console log format
 * @param {string} color - Color of the console print e.g. '#ff0000'
 * @param {*} fontFamily - Font family of console print e.g. 'Helvetica'
 * @returns {string} - Style string
 */
var consoleStyling = function consoleStyling(_ref) {
  var color = _ref.color,
      fontFamily = _ref.fontFamily;
  return "\ncolor: ".concat(color, "; \nfont-weight: 900;\nfont-family: ").concat(fontFamily, ", monospace;\nfont-style: italic;\nfont-size: 1rem;");
};

var DEFAULT_FONT = "Dank Mono";
var GREEN = "#27ae60";
var BLUE = "#2980b9";
var YELLOW = "#f39c12";
var defaulStyling = Object.freeze({
  state: {
    color: YELLOW,
    fontFamily: DEFAULT_FONT
  },
  action: {
    color: BLUE,
    fontFamily: DEFAULT_FONT
  },
  nextState: {
    color: GREEN,
    fontFamily: DEFAULT_FONT
  }
});

/**
 * Log the current state to the terminal
 * @param {object} state - Some redux / react context state
 * @param {object} action - {type, payload}
 * @param {object} nextState - Updated redux / react context state
 */

var stateLogger = function stateLogger(state, action, nextState) {
  var customStyling = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var styling = _objectSpread2(_objectSpread2({}, defaulStyling), customStyling);

  console.log("%c Previous state:", consoleStyling(styling.state));
  console.log(state);
  console.log("%c --------------------------------------", consoleStyling(styling.state));
  console.log("%c Action:", consoleStyling(styling.action));
  console.log("%c ".concat(action.type), "font-weight: bold");
  console.log(action.payload);
  console.log("%c --------------------------------------", consoleStyling(styling.action));
  console.log("%c Next state:", consoleStyling(styling.nextState));
  console.log(nextState);
  console.log("%c --------------------------------------", consoleStyling(styling.nextState));
};

module.exports = stateLogger;
