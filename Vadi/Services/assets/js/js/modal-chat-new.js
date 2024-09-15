const openBtnchat = document.getElementById("openBtnchat");
const modalchat = document.getElementById("myModalchat");
const closeBtnchat = document.querySelector(".closechat");

openBtnchat.addEventListener("click", function() {
    modalchat.style.display = "block";
});

closeBtnchat.addEventListener("click", function() {
    modalchat.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modalchat) {
        modalchat.style.display = "none";
    }
});