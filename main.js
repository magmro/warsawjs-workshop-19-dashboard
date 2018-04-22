

const button = document.querySelector('#menu-icon')

button.addEventListener("click", function() {

  const aside = document.querySelector('aside')
  aside.classList.toggle('hodor')
});

var date = new Date();
document.getElementById("day").innerText = date.getDate();
document.getElementById("month").innerText =  date.toLocaleString("en-us", { month: "long" });
document.getElementById("year").innerText = date.getFullYear();
