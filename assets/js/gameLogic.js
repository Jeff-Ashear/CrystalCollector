let randomNumber = 0
let arr = []

let score = 0

// initializes or resets the board for a new round
function boardSetup() {
    randomNumber = Math.ceil(Math.random() * (170 - 65) + 65)
    $("#random").html(randomNumber)
    score = 0
    result = ""
    $("#score").html(score)
    
    while(arr.length < 4) {
        var rndm = Math.floor(Math.random() * (10 - 1) + 1)
        if(arr.indexOf(rndm) === -1) {
            arr.push(rndm)
        }
    }
    console.log(arr)
}

$(document).ready(boardSetup())

// resets win loss counters if player doens't want to contiue
function winLReset() {
    wins = 0
    losses = 0

    $('#wins').html(wins)
    $('#losses').html(losses)
}



let wins = 0
let losses = 0
var result = ""

//checks for win conditions on user input.  If conditions are met, the game ends, display updates, and the board resets.

function checkConditions() {
    if (score > randomNumber) {
        losses++
        $("#losses").html(losses)
        arr = []
        setTimeout(() => {
            result = confirm("Oh no!  You have lost this round.  Try again.")
            if (result) {
                console.log("ok")
                boardSetup()
            } else {
               winLReset()
                boardSetup()
            }
        }, 500);
    } else if (score === randomNumber) {
        wins++
        $("#wins").html(wins)
        arr = []
        setTimeout(() => {
            result = confirm("Heck yeah!  You won!  Try again.")
            if (result) {
                boardSetup() 
            } else {
                winLReset()
                boardSetup()
            }
        }, 500)
   
    }
    if (alert == true) {
        boardSetup()
    }
}

// wiring for the buttons
$("#aSkull").click(function() {
    clicker(arr[0])
})
$("#bSkull").click(function() {
    clicker(arr[1])
})
$("#cSkull").click(function() {
    clicker(arr[2])
})
$("#dSkull").click(function() {
    clicker(arr[3])
})

// user feedback for the score
function clicker(n) {
    score = score + n
    $("#score").html(score)
    checkConditions()
    console.log(n)
}