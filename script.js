var dirt = 0
var bricks = 0
var wood = 0
var houses = 0


function dirtadd() {
    dirt += 1
    document.getElementById('dirt counter').innerText = dirt + " dirt"
}

function woodadd() {
    wood += 5
    document.getElementById('wood counter').innerText = wood + " wood"
}

function combinedirt() {
    if (dirt >= 100) {
        dirt -= 100
        bricks += 10
        document.getElementById('dirt counter').innerText = dirt + " dirt"
        document.getElementById('brick counter').innerText = bricks + " bricks"
    }
}

function giveAxe() {
    if ((dirt >= 50) && (bricks >= 25) )
    {
        dirt -= 50
        bricks -= 25
        document.getElementById('dirt counter').innerText = dirt + " dirt"
        document.getElementById('brick counter').innerText = bricks + " bricks"
        document.getElementById('tree image').innerHTML = '<img src="tree.png" alt="dirt" onclick="woodadd()" width="300px" height="300px">'
        document.getElementById('AxeButton').remove()
    }
}

function House() {
    if ((bricks >= 15) && (wood >= 30)) {
        bricks -= 15
        wood -= 30
        houses += 1
        document.getElementById('wood counter').innerText = wood + " wood"
        document.getElementById('brick counter').innerText = bricks + " bricks"
