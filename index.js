// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats;
}

//console.log(destructivelyAppendCat());

function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats;
}
//console.log(destructivelyPrependCat())

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
//console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
//console.log(destructivelyRemoveFirstCat());

function appendCat(name){
    name = [...cats, "Broom"];
    return name;
}
//console.log(appendCat())

function prependCat(name){
    name = ["Arnold", ...cats]
    return name;
}
//console.log(prependCat());

function removeLastCat(){
    
    const newCats = cats.slice()
    newCats.pop();
    return newCats
}
//console.log(removeLastCat());

function removeFirstCat(){
    const alsoCats = cats.slice();
    alsoCats.shift();
    return alsoCats;
}
console.log(removeFirstCat());


