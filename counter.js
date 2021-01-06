document.getElementById("counter1").innerHTML = prompt("Enter name of player1");

function add1() {
    var a = document.getElementById("value1").innerHTML;
    a++;
    document.getElementById("value1").innerHTML = a;
}

function sub1() {
    var s = document.getElementById("value1").innerHTML;
    s--;
    document.getElementById("value1").innerHTML = s;
}
document.getElementById("counter2").innerHTML = prompt("Enter name of player2");


function add2() {
    var x = document.getElementById("value2").innerHTML;
    x++;
    document.getElementById("value2").innerHTML = x;
}

function sub2() {
    var y = document.getElementById("value2").innerHTML;
    y--;
    document.getElementById("value2").innerHTML = y;
}

function reset1() {
    var c = document.getElementById("value1").innerHTML;
    c = 0;
    document.getElementById("value1").innerHTML = c;
}

function reset2() {
    var d = document.getElementById("value2").innerHTML;
    d = 0;
    document.getElementById("value2").innerHTML = d;
}