const h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);

function changeColor() {
  h1.style.color = "darkturquoise";
}
h1.removeEventListener("click", changeColor);
const div = document.querySelector("#ocean");
const body = document.querySelector("body");
body.onscroll = function() {
  body.style.backgroundColor = "#b2f0f1";
  div.style.backgroundColor = "#b2f0f1";
};
const infodiv = document.querySelector("#info");
const infobtn = document.querySelector("#getinfo");
infobtn.onclick = function() {
  infodiv.style.visibility = "visible";
};
const bookbtn = document.querySelector("#book");
const bookdiv = document.querySelector("#form");
bookbtn.onclick = function() {
  bookdiv.style.visibility = "visible";
};
const tickets = document.querySelector("#tickets");
const h4 = document.querySelector("h4");
tickets.oninput = function() {
  h4.innerText = "You are purchasing " + tickets.value + " tickets.";
};
const preference = document.querySelector("#preference");
const secondH4 = document.querySelector("#secondH4");
preference.onchange = function() {
  secondH4.innerText = "Your preference is : " + preference.value;
};