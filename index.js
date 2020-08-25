document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateDoc()
});



function updateDoc() {
    let message = document.getElementById('text')
    message.textContent = "This is really cool!"
}