// Iteration 1: Names and Input
let driver = "Sebisteri";
let navigator = "Sebisteri"

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if ( driver.length < navigator.length) {
    console.log(`It seems like the navigator has the longest name, it has ${navigator.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let driverLetters = ""
for (let i = 0; i < driver.length; i++) {
    driverLetters += driver[i].toUpperCase() + " "
}
console.log(driverLetters);

// 3.2
let navigatorLetters = ""
for (let j = navigator.length -1; j >= 0 ; j--) {
    navigatorLetters += navigator[j]
}
console.log(navigatorLetters);

// 3.3
if (driver > navigator) {
    console.log(`The driver's name goes first`)
} else if (driver < navigator) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// BONUS TIME ! 
// Bonus 1:
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan ipsum et lacus sodales ultricies. Fusce condimentum magna vel nibh faucibus bibendum. Proin elit nibh, dignissim scelerisque pharetra quis, tempor vitae purus. Fusce at lectus ut mi rutrum accumsan a id nisl. Nunc eget ipsum vitae justo cursus efficitur convallis vel justo. Etiam nulla mauris, aliquet eget ultricies quis, rhoncus ut ligula. Mauris id euismod velit. Nullam vehicula eros vel sagittis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque nibh quis dictum ultricies. Fusce hendrerit faucibus consequat. Suspendisse potenti. Morbi fringilla dolor ante, id eleifend massa bibendum nec. Nam eget est odio. Nam efficitur eget lacus ut placerat."
let longTextArr = longText.split(" ");
console.log(longTextArr.length)
let numberOfEt = 0;
console.log(`longText has ${longText.length} strings`);

for (let l = 0; l <= longTextArr.length; l++) {
    if (longTextArr[l] === "et") {
        numberOfEt++
    }
}

console.log(numberOfEt);

// Bonus 2
let str = "Rudi\Brudi _Ho,de n";

function removeSpacesAndSpecialChars(str) {
    const regex = /\s|[_\W]/g;
    return str.replace(regex, "");
}

console.log(removeSpacesAndSpecialChars(str.toLowerCase()));

let phraseToCheck = "p****ut t ,______u p";
let phraseWithoutSpace = removeSpacesAndSpecialChars(phraseToCheck).toLowerCase();
let firstHalf = "";
let secondHalfReverse = "";


console.log(`phraseWithoutSpace = ${phraseWithoutSpace}`);


for (let y = 0; y < phraseWithoutSpace.length; y++) {
    if (y < phraseWithoutSpace.length / 2) {
        firstHalf += phraseWithoutSpace[y];
    } else if (y >= phraseWithoutSpace.length / 2) {
        secondHalfReverse += phraseWithoutSpace[y];
    }
}

let secondHalf = secondHalfReverse.split("").reverse().join("");

console.log(firstHalf)
console.log(secondHalf)

if(firstHalf === secondHalf) {
    console.log(`yay, the phrase you've entered is an palindrome!`)
} else (console.log(`Sorry loser, the phrase you've entered is not a palindrome. Try again!`))