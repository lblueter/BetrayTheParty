var fighter = {
    health: 180,
    damage: 8,
    counter: 12
}
// 8->16->24->32->40  48->56->64->72->80 = 320
// 120
// 40
//counter*5="60"
var cleric = {
    health: 240,
    damage: 7,
    counter: 10
}
// 7->14->21->28->35 42->49->56->63->70 = 280
// 105
// 35
//counter*5=50
var rogue = {
    health: 150,
    damage: 10,
    counter: 15
}
// 10->20->30->40->50 60->70->80->90->100 = 300
// 150
// 50
// counter*5=75
var mage = {
    health: 120,
    damage: 12,
    counter: 18
}
// 12->24->36->48->60 72->84->96 = 252
// 180
// 60
//counter*5=90

var minus = function (one, two) {
    return one - two
}
var atkHp
var atkDamage
var defendHp
var defendDmg
var currentDamage;
var characterSelected = false;
var enemySelected = false;
var selectedChar = ""
var selectedEnemy = ""
console.log(characterSelected)
$(".char").on("click", function () { 
    console.log("click works")
    if (characterSelected === false) {
        characterSelected = true;
        console.log(characterSelected)
        $(this).clone().appendTo("#charSelect")
        $(this).hide();
        $(".instructions").text("Choose your Opponent!")
        selectedChar = $(this).attr("value")
        console.log(selectedChar)
        if (selectedChar === "fighter") {
            atkDamage = fighter.damage
            atkHp = fighter.health
        }
        else if (selectedChar === "rogue") {
            atkDamage = rogue.damage
            atkHp = rogue.health
        }
        else if (selectedChar === "mage") {
            atkDamage = mage.damage
            atkHp = mage.health
        }
        else if (selectedChar === "cleric") {
            atkDamage = cleric.damage
            atkHp = cleric.health
        }
    }
    else if (enemySelected === false) {
        enemySelected = true;
        console.log(enemySelected)
        $(this).clone().appendTo("#enemy")
        $(this).hide();
        $(".instructions").text("Betray the Party!")
        selectedEnemy = $(this).attr("value")
        console.log(selectedEnemy)
        if (selectedEnemy === "fighter") {
            defendDmg = fighter.counter
            defendHp = fighter.health
        }
        else if (selectedEnemy === "rogue") {
            defendDmg = rogue.counter
            defendHp = rogue.health
        }
        else if (selectedEnemy === "mage") {
            defendDmg = mage.counter
            defendHp = mage.health
        }
        else if (selectedEnemy === "cleric") {
            defendDmg = cleric.counter
            defendHp = cleric.health
        }
    }

})

$("#atkBtn").on("click", function () {
    currentDamage += atkDamage;

    defendHp = minus(defendHp, currentDamage)
    if (defendHp <= 0) {

    }
    atkHp = minus(atkHp, defendDmg)
    if (atkHp <= 0) {

    }
    console.log(atkHp)
    console.log(defendHp)
    console.log(defendDmg)
    console.log(currentDamage)
    console.log("atk works")
    console.log(selectedChar)
    console.log(selectedEnemy)
})
$("#resetBtn").on("click", function () {
    console.log("reset works")
})