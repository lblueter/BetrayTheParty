var partyRemaining = 3
var fighter = {
    health: 180,
    damage: 8,
    counter: 15
}
// 8->16->24->32->40  48->56->64->72->80 = 320
// 120
// 40
//counter*5="60"
var cleric = {
    health: 220,
    damage: 6,
    counter: 12
}
// 7->14->21->28->35 42->49->56->63->70 = 280
// 105
// 35
//counter*5=50
var rogue = {
    health: 150,
    damage: 12,
    counter: 18
}
// 10->20->30->40->50 60->70->80->90->100 = 300
// 150
// 50
// counter*5=75
var mage = {
    health: 120,
    damage: 18,
    counter: 25
}
// 12->24->36->48->60 72->84->96 = 252
// 180
// 60
//counter*5=90
$(".fighter-hp").text(fighter.health)
$(".rogue-hp").text(rogue.health)
$(".mage-hp").text(mage.health)
$(".cleric-hp").text(cleric.health)
var minus = function (one, two) {
    return one - two
}
var atkHp = 0
var atkDamage = 0
var defendHp = 0
var defendDmg = 0
var currentDamage = 0;
var selectedChar = ""
var selectedEnemy = ""

var reset = function () {
    partyRemaining = 3
    atkHp = 0
    atkDamage = 0
    defendHp = 0
    defendDmg = 0
    currentDamage = 0;
    selectedChar = ""
    selectedEnemy = ""
    $("#charSelect").empty()
    $("#enemy").empty()
    $(".char").show()
    $(".instructions").text("Choose your Character!")
    $("#youAtk").text("")
    $("#enemyAtk").text("")
    $(".fighter-hp").text(fighter.health)
    $(".rogue-hp").text(rogue.health)
    $(".mage-hp").text(mage.health)
    $(".cleric-hp").text(cleric.health)
}

$(".char").on("click", function () {
    console.log("click works")
    if (!selectedChar) {
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
    else if (!selectedEnemy) {
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
    console.log("atk work?")
    if (selectedChar && selectedEnemy) {
        currentDamage += atkDamage;

        defendHp = minus(defendHp, currentDamage)
        atkHp = minus(atkHp, defendDmg)
        if (defendHp <= 0) {
            $("#youAtk").text("You have slain the " + selectedEnemy + ". Select your next target.")
            $("#enemyAtk").text("")
            selectedEnemy = "";
            $("#enemy").empty()
            partyRemaining--;
            if (atkHp <= 0) {
                atkHp = 1;
            }
        }
        else if (atkHp <= 0) {
            $("#youAtk").text("You Died. Try again.")
            $("#enemyAtk").text("")
            selectedChar = "";
            $("#charSelect").empty()
        }
        else {
            $("#youAtk").text("You hit the " + selectedEnemy + " for " + currentDamage)
            $("#enemyAtk").text("The " + selectedEnemy + " attacked you for " + defendDmg)
        }

        if (selectedEnemy === "fighter") {
            $(".fighter-hp").text(defendHp)
        }
        else if (selectedEnemy === "rogue") {
            $(".rogue-hp").text(defendHp)
        }
        else if (selectedEnemy === "mage") {
            $(".mage-hp").text(defendHp)
        }
        else if (selectedEnemy === "cleric") {
            $(".cleric-hp").text(defendHp)
        }

        if (selectedChar === "fighter") {
            $(".fighter-hp").text(atkHp)
        }
        else if (selectedChar === "rogue") {
            $(".rogue-hp").text(atkHp)
        }
        else if (selectedChar === "mage") {
            $(".mage-hp").text(atkHp)
        }
        else if (selectedChar === "cleric") {
            $(".cleric-hp").text(atkHp)
        }

        console.log(atkHp)
        console.log(currentDamage)
        console.log(defendHp)
        console.log(defendDmg)

        console.log(selectedChar)
        console.log(selectedEnemy)

    }
    if (partyRemaining <= 0) {
        $("#youAtk").text("You have betrayed the party.")
        $("#enemyAtk").text("Congratulations.")
    }
})


$("#resetBtn").on("click", function () {
    console.log("reset works")
    return reset()
})