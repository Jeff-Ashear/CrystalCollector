$("#test").click(function() {
    var randomNum = Math.ceil(Math.random() * (10 - 1) + 1)
    console.log(randomNum)
})


// on page load game generates and displays a random number between 95 and 200
    // variables for board setup.
let randomNumber = 0
let aSkullNum = 0
let bSkullNum = 0
let cSkullNum = 0
let dSkullNum = 0

let arr = []

function boardSetup() {
    randomNumber = Math.ceil(Math.random() * (170 - 65) + 65)
    $("#random").html(randomNumber)

    // on page load each of four buttons is assigned a random number between 1 and 20

    while(arr.length < 4) {
        var rndm = Math.floor(Math.random() * (10 - 1) + 1)
        if(arr.indexOf(rndm) === -1) {
            arr.push(rndm)
        }
    }

    aSkullNum = arr[0]
    bSkullNum = arr[1]
    cSkullNum = arr[2]
    dSkullNum = arr[3]

    console.log(arr)
}

$(document).ready(boardSetup())

// when the user clicks a button, the number assigned to that button is added to the total score

let score = 0
let wins = 0
let losses = 0

function checkConditions() {
    if (score > randomNumber) {
        losses++
        alert("Oh no!  You have lost this round.  Try again.")
        boardSetup()
    } else if (score === randomNumber) {
        wins++
        alert("Heck yeah!  You won!  Try again.")
    }
}

// this .click is firing without the click. I think I need a different method.
$("#aSkull").click(function() {
    clicker(arr[0])
})


function clicker(n) {
    score = score + n
    $("#score").html(score)
    checkConditions()
    console.log(n)
}
// if the user can match their score to the random number the user wins 
    // 1 is added to the wins total and the display updates
    // the user is notified that they have won
    // there is a win animation of some kind
    // when the user clears the win message, the board is reset 

// if the user score exceeds the random number the user looses
    // 1 is added to the losses total and the display updates
    //the user is notified that they have lost
    // a loss animation is displayed
    //when the user clears the loss message, the board is reset

// the board reset means:
    //  a new random number is generated and the display is updated
    // a new random number is generated for and asigned to each skull
    // the user's score is set to zero and the display is updated