# @codewell/state-logger
State logger for JavaScript states Redux-style

## Installation
```
npm install @codewell/state-logger
```

## Basic usage
```JavaScript
import stateLogger from '@codewell/state-logger';

const state = {};
const action = {type, payload};
const nextState = getNextState(state, action); // Somehow
stateLogger(state, action, nextState); // Will log the state in nice colors
```
