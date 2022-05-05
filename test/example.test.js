// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;
import { renderGem } from '../utils.js';
import { gems } from '../gems.js';

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected =
        '<div class="gem"><h1>Citrine</h1><img src="./assets/citrine.jpg"><p>Citrine is the November gemstone, with a hardness level of 7.</p><h2>Metaphysical Properties</h2><ul><li>Motivation</li><li>Concentration</li><li>Encourages Self Expression</li></ul></div>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGem(gems[0]);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
