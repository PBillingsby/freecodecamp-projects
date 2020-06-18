document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('navlink').addEventListener("click", function(e) {
    console.log(e.target.innerText)
    displayPage(e);
  })
})

function displayPage(event) {
  let work = document.getElementById("#work");
  let contact = document.getElementById("#contact");
  if (event.target.innerText === "work") {
    work.style.visibility = "";
  }
  else if (event.target.innerText === "contact") {
    console.log("contact")
  }
  else {
    work.style.visibility = "hidden";
    contact.style.visibility = "hidden"
  }
}

// ADD TIMEOUTS TO PROJECT ITEMS TO LOAD AT SEPARATE TIMES