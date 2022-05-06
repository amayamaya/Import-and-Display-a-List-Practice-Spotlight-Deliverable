// import functions and grab DOM elements
import { gems } from './gems.js';
import { renderGem } from './utils.js';

const gemListEl = document.getElementById('gems');

for (let gem of gems) {
    const gemDiv = renderGem(gem);
    gemListEl.append(gemDiv);
}
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
