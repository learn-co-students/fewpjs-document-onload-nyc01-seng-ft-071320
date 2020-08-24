document.addEventListener("DOMContentLoaded", function() {
  let p = document.querySelector("p#text");
  p.innerHTML = "<p>This is really cool!</p>"
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

