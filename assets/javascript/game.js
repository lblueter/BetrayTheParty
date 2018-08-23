var fighter = {
    health: "180",
    damage: "8",
    //counter: "12"
}
// 8->16->24->32->40  48->56->64->72->80 = 320
// 120
// 40
//counter*5="60"
var cleric = {
    health: "240",
    damage: "7",
    //counter: "10"
}
// 7->14->21->28->35 42->49->56->63->70 = 280
// 105
// 35
//counter*5=50
var rogue = {
    health: "150",
    damage: "10",
    //counter: "15"
}
// 10->20->30->40->50 60->70->80->90->100 = 300
// 150
// 50
// counter*5=75
var mage = {
    health: "120",
    damage: "12"
    //counter: "18"
}
// 12->24->36->48->60 72->84->96 = 252
// 180
// 60
//counter*5=90

var add = function (one, two) {
    return one + two
}
var characterSelected = false;

$(".char").on("click", function () { 
    if (characterSelected = false) {
        characterSelected = true;

    }
})

$("#atkBtn").on("click", function () {
    
})
$("#resetBtn").on("click", function () {
    
})