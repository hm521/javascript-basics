var a = document.getElementById("shoe_size");
var b = document.getElementById("year");
var res = document.getElementById("result");

var btn = document.getElementById("validate")

function Devide(event) {

    event.preventDefault();
    res.innerHTML = ((((((a * 2) + 5) * 50) - b.value) + 1766));

}
btn.addEventListener(`click`, Devide)
