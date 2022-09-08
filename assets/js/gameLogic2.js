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

    $('.card').attr('class', 'card col-6 col-12-sm')
    $('.card-title').html('')
    $('#skull1').attr('src', './assets/images/skull1.jfif')
    $('#skull2').attr('src', './assets/images/skull2.jfif')
    $('#skull3').attr('src', './assets/images/skull3.jfif')
    $('#skull4').attr('src', './assets/images/skull4.jfif')

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
        $(".card").attr('class', 'card col-6 col-12-sm animateLoss')
        $(".card-img-top").attr('src', './assets/images/lossSkull.jpg')
        $(".you").html("YOU")
        $('.outcome').html("LOSE")
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
        }, 3000);
    } else if (score === randomNumber) {
        wins++
        $(".card").attr('class', 'card col-6 col-12-sm animateWin')
        $("#wins").html(wins)
        arr = []
       
        setTimeout(() => {
            result = confirm("Woohoooo!  You won!  Try again.")
            if (result) {
                boardSetup() 
            } else {
                winLReset()
                boardSetup()
            }
        }, 3000)
   
    } else {
        $(thisSkull).attr('class', 'card col-6 col-12-sm clicked')
        setTimeout((skull) => {            
            $(thisSkull).attr('class', 'card col-6 col-12-sm')
            console.log(thisSkull)
        }, 200)
        }
    
    if (alert == true) {
        boardSetup()
    }
}

let thisSkull = ""
// wiring for the buttons
// to turn the top left skull into a cheater's auto-win button, comment out line 93, and un-comment line94
$("#aSkull").click(function() {
    thisSkull = "#aSkull"
    // clicker(arr[0])
    clicker(randomNumber)
})
$("#bSkull").click(function() {
    thisSkull = "#bSkull"
    clicker(arr[1])
})
$("#cSkull").click(function() {
    thisSkull = "#cSkull"
    clicker(arr[2])
})
// to turn bottom right skull into an instant loss button, comment out the clicker(arr[3]) call and un-comment clicker(randomNumber+1)
$("#dSkull").click(function() {
    thisSkull = "#dSkull"
    // clicker(arr[3])
    clicker(randomNumber + 1)
})

// user feedback for the score
function clicker(n) {
    score = score + n
    $("#score").html(score)
    checkConditions()
    console.log(n)
}