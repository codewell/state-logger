/**
 * Creates a console log format
 * @param {string} color - Color of the console print e.g. '#ff0000'
 * @param {*} fontFamily - Font family of console print e.g. 'Helvetica'
 */
const consoleStyling = ({ color, fontFamily }) => `
color: ${color}; 
font-weight: 900; 
font-family: ${fontFamily}, monospace; 
font-style: italic; 
font-size: 1rem`;

module.exports = consoleStyling;