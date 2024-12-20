let password;

document.getElementById("mySubmit").onclick = function(){
    password = document.getElementById("myText").value;
    if(password == 642023322024){
        window.location.replace("https://www.sedameinegrosseliebe.com/finish");
    }
}

document.getElementById("mybackhurts").onclick = function(){
    window.location.href('https://www.sedameinegrosseliebe.com/clue2');
}
