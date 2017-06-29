var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var request = require("request");
var inquirer = require("inquirer");

inquirer
    .prompt([

        {
            type: "list",
            message: "Pick a card type!",
            choices: ["BasicCard", "ClozeCard"],
            name: "dk"
        },
    ])
    .then(function(inquirerResponse) {

        selection = inquirerResponse.dk;
        console.log(selection);
        if (selection === "BasicCard") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Type the front of the card",
                    name: "front"
                }, {
                    type: "input",
                    message: "Type the back of the card",
                    name: "back"
                }, ])
                .then(function(inquirerResponse) {
                    let question = new BasicCard(inquirerResponse.front, inquirerResponse.back);
                    console.log(question.front);
                    console.log(question.back);

                });
        };
        if (selection === "ClozeCard") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Type in the text of your card",
                    name: "text"
                }, {
                    type: "input",
                    message: "Type in the cloze",
                    name: "cloze"
                }, ])
                .then(function(inquirerResponse) {
                    let question = new ClozeCard(inquirerResponse.text, inquirerResponse.cloze);
                    if (question.checkCloze()) {
                        console.log("The Cloze is: " + question.cloze);
                        console.log("The question without the cloze is: " + question.partial);
                        console.log("The full question: " + question.fullText);
                    } else {
                        console.log("Please try again!")
                    }



                });
        };
    });
