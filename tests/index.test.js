const lib = require("../lib/index.js");

const state = {};
const nextState = {};
const action = {
  type: "ACTION_TYPE",
  payload: "payload",
};

// Development version
test("Logs", () => {
  console.log = jest.fn();
  lib(state, action, nextState);
  expect(console.log).toHaveBeenCalledTimes(10);
});
