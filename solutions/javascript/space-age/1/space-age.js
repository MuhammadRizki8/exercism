//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_SECONDS = 31557600; // 1 Earth year in seconds

const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export const age = (planet, second) => {
  const key = planet.toLowerCase(); // pastikan case insensitive
  if (!ORBITAL_PERIODS[key]){
    throw new Error("not a planet");
  }
  const earthYears = second / EARTH_SECONDS;
  const planetYears = earthYears / ORBITAL_PERIODS[key];
  return Number(planetYears.toFixed(2));
};
