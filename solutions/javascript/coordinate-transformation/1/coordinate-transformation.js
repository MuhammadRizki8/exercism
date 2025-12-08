// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function move(x, y){
    return [x+dx, y+dy]; 
  }
}

/**
 * Create a function that scales a 2D coordinate.
 *
 * @param {number} sx The scale factor for the x-coordinate.
 * @param {number} sy The scale factor for the y-coordinate.
 * @returns {function} A function that takes coordinates and returns the scaled coordinates.
 */
export function scale2d(sx, sy) {
  // This returned function "remembers" sx and sy from its creation scope.
  // This is the closure.
  return function(x, y) {
    return [x * sx, y * sy];
  };
}

/**
 * Create a composition of two functions.
 *
 * @param {function} f The first function to apply.
 * @param {function} g The second function to apply.
 * @returns {function} A new function that applies f then g.
 */
export function composeTransform(f, g) {
  // This returned function has access to f and g via a closure.
  return function(x, y) {
    // Apply the first function f
    const resultFromF = f(x, y);

    // Apply the second function g to the result of f
    // The result from f is an array [newX, newY], so we spread it as arguments for g.
    return g(resultFromF[0], resultFromF[1]);
  };
}

/**
 * Return a function that memoizes the last result of a given function.
 *
 * @param {function} f The function to memoize.
 * @returns {function} A new function that remembers the last result.
 */
export function memoizeTransform(f) {
  // These variables are "remembered" by the returned function. They form the closure's state.
  let lastArgs = null;
  let lastResult = null;

  return function(...args) {
    // Check if the current arguments are the same as the last ones.
    // We convert arguments to a string for a simple comparison.
    if (JSON.stringify(args) === JSON.stringify(lastArgs)) {
      // If they are the same, return the remembered result without re-calculating.
      return lastResult;
    }

    // If arguments are new, calculate the result using the original function f.
    const result = f(...args);

    // Remember the new arguments and the new result for the next call.
    lastArgs = args;
    lastResult = result;

    // Return the newly computed result.
    return result;
  };
}