/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timeRemain){
  if(timeRemain===undefined){
    return 'You forgot to set the timer.';
  }
  else if(timeRemain===0){
    return 'Lasagna is done.';
  }
  else{
    return 'Not done, please wait.';
  }
}
export function preparationTime(layers, avgTime=2) {
  return layers.length*avgTime;
}
export function quantities(layers) {
  const result = {
    noodles: 0,
    sauce: 0,
  };

  for (const layer of layers) {
    if (layer === 'noodles') {
      result.noodles += 50;
    } else if (layer === 'sauce') {
      result.sauce += 0.2;
    }
  }

  return result;
}
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}
export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  const scaleFactor = portions / 2;

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
  }

  return scaledRecipe;
}