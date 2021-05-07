import consoleStyling from "./consoleStyling";
import defaultStyling from "./defaultStyling";

/**
 * Log the current state to the terminal
 * @param {object} state - Some redux / react context state
 * @param {object} action - {type, payload}
 * @param {object} nextState - Updated redux / react context state
 */
const stateLogger = (state, action, nextState, customStyling = {}) => {
  const styling = { ...defaultStyling, ...customStyling };
  console.log("%c Previous state:", consoleStyling(styling.state));
  console.log(state);
  console.log(
    "%c --------------------------------------",
    consoleStyling(styling.state),
  );
  console.log("%c Action:", consoleStyling(styling.action));
  console.log(`%c ${action.type}`, "font-weight: bold");
  console.log(action.payload);
  console.log(
    "%c --------------------------------------",
    consoleStyling(styling.action),
  );
  console.log("%c Next state:", consoleStyling(styling.nextState));
  console.log(nextState);
  console.log(
    "%c --------------------------------------",
    consoleStyling(styling.nextState),
  );
};

export default stateLogger;
