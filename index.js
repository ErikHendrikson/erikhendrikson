var navbar = document.getElementById("navbar")

// Give all the a classes (text) the color of its ID//
var list = document.getElementsByClassName("kleur");

for (var i = 0; i < list.length; i++){
    var selectedId = list[i].getAttribute("id")
    document.getElementById(selectedId).style.color = selectedId;

// Click on color to set background color to that color//
    list[i].addEventListener("click", klikje);
    function klikje (){
        document.body.style.backgroundColor = this.getAttribute("id");
        navbar.classList.remove("shown");
        navbar.classList.add("hidden");
        document.getElementById("img").src="ham.svg";
    }       
    };

   
//When clicked, add/remove class and change top-left image//
document.getElementById("btn").addEventListener("click", clicked);

function clicked () {
    if(navbar.classList.contains("shown")){
        navbar.classList.remove("shown");
        navbar.classList.add("hidden");
        document.getElementById("img").src="ham.svg";
    } else if (navbar.classList.contains("hidden")){
        navbar.classList.remove("hidden");
        navbar.classList.add("shown");
        document.getElementById("img").src="grapes.svg";}
    };


    
