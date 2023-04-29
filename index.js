// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
}

// destructivelyAppendCat('Ralph');


function destructivelyPrependCat(name){
  cats.unshift(name);
}
// destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat(){
  cats.pop();
}

// destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
  cats.shift();
}
// destructivelyRemoveFirstCat();

function appendCat(name){
  const newCats = [...cats];
  newCats.push(name);
  console.log(newCats);
  return newCats
}

appendCat('Broom');

function prependCat(name){
  const newCats = [...cats];
  newCats.unshift(name);
  return newCats;
}

prependCat('Arnold')

function removeLastCat(){
  const newCats = [...cats];
  newCats.pop();
  return newCats
}

function removeFirstCat(){
  const newCats = [...cats];
  newCats.shift();
  return newCats;
}
