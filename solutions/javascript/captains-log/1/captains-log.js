// @ts-check

/**
 * Generates a random integer between a min (inclusive) and max (inclusive) value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer within the range.
 */
function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random starship registry number.
 * The format is "NCC-" followed by a number between 1000 and 9999.
 *
 * @returns {string} A random starship registry number.
 */
export function randomShipRegistryNumber() {
  const registryNum = getRandomInt(1000, 9999);
  return `NCC-${registryNum}`;
}

/**
 * Generates a random stardate for the first season of TNG.
 * The value is between 41000.0 (inclusive) and 42000.0 (exclusive).
 *
 * @returns {number} A random floating-point stardate.
 */
export function randomStardate() {
  // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale it to the desired range (42000 - 41000 = 1000) and add the minimum value.
  return randomNumber * 1000 + 41000;
}

/**
 * Selects a random planetary class from the list of known classes.
 *
 * @returns {string} A single character representing a random planet class.
 */
export function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];

  // Generate a random index from 0 to the array's length - 1
  const randomIndex = Math.floor(Math.random() * planetClasses.length);

  // Return the element at that random index
  return planetClasses[randomIndex];
}