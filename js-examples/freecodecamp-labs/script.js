document.querySelectorAll(".favorite-icon").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("filled");
      if (button.classList.contains("filled")) {
        button.innerHTML = "&#10084;"; // filled heart
      } else {
        button.innerHTML = "&#9825;"; // empty heart
      }
    });
  });
  

  //counting likes by seasons

    const autumn =  document.querySelector(".autumn");
    const winter =  document.querySelector(".winter");
    const spring =  document.querySelector(".spring");
    const summer =  document.querySelector(".summer");

  //creating variables for each season

  //listening to clicks and unclcks