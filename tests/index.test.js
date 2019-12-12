const dev = require('../lib/dev');
const prod = require('../lib/prod')


const state = {};
const nextState = {};
const action = {
  type: 'ACTION_TYPE',
  payload: 'payload'
}

// Development version
test('Dev logs', () => {
  console.log = jest.fn();
  process.env.NODE_ENV = 'development';
  dev(state, action, nextState);
  expect(console.log).toHaveBeenCalledTimes(10);
});

// Production version
test('Prod does not log', () => {
  console.log = jest.fn();
  process.env.NODE_ENV = 'production';
  prod(state, action, nextState);
  expect(console.log).toHaveBeenCalledTimes(0);
});