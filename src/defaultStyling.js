const DEFAULT_FONT = "Dank Mono";
const GREEN = "#27ae60";
const BLUE = "#2980b9";
const YELLOW = "#f39c12";

const defaulStyling = Object.freeze({
  state: {
    color: YELLOW,
    fontFamily: DEFAULT_FONT,
  },
  action: {
    color: BLUE,
    fontFamily: DEFAULT_FONT,
  },
  nextState: {
    color: GREEN,
    fontFamily: DEFAULT_FONT,
  },
});

export default defaulStyling;
