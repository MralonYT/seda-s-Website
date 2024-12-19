let password;

document.getElementById("mySubmit").onclick = function(){
    password = document.getElementById("myText").value;
    if(password == 1453){
        window.location.replace("https://www.sedameinegrosseliebe.com/clue3");
    }
}

document.getElementById("mybackhurts").onclick = function(){
    window.location.href('https://www.sedameinegrosseliebe.com/clue1');
}
