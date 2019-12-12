'use strict';

var DEFAULT_FONT = 'Dank Mono';
var GREEN = '#27ae60';
var BLUE = '#2980b9';
var YELLOW = '#f39c12';
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
};

module.exports = stateLogger;
