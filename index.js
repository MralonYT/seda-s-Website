let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hallo ${username}`;
}

document.querySelector(".BannerClose").addEventListener("click", function(){
    this.closest(".BannerTop").style.display = "none";
});