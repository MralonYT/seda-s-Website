let password;

document.getElementById("mySubmit").onclick = function(){
    password = document.getElementById("myText").value;
    if(password == 333888){
        window.location.replace("https://www.sedameinegrosseliebe.com/clue1");
    }
}

document.querySelector(".BannerClose").addEventListener("click", function(){
    this.closest(".BannerTop").style.display = "none";
});

document.getElementById("myButton").onclick = function(){
    window.alert(`Seda ist meine große Liebe <3`);
}
