//var BasicCard = require("./BasicCard.js");

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
    this.checkCloze = function() {
        if (text.includes(cloze)) {
            console.log("Has a cloze!");
            return true;
        } else {
            console.log("I need a Cloze :(");
            return false;
        }
    };
}

//Example 
// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze);

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

// brokenCloze.checkCloze();
// firstPresidentCloze.checkCloze();

module.exports = ClozeCard;
