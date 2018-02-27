
        var a= document.getElementById("first_number");
        var b = document.getElementById("second_number");
        var res = document.getElementById("result");
 
var btn = document.getElementById("validate")

function Devide(event){
    event.preventDefault();
     res.innerHTML =(a.value/b.value)   
}
        btn.addEventListener(`click`,Devide)
