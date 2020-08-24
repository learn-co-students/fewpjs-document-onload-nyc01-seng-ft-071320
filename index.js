// // Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     updateDom()
// });


// function updateDom() { 
//     el = document.getElementById("text");
//     el.innerHTML = "This is really cool!";
// }


document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }