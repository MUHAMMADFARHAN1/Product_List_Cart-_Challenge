//to pass parameter we need to use concept of anonymous functions here

function changeDisplay(button) {
  //button.style.backgroundcolor = "red";
  button.style.backgroundColor = "green";
  //   button.innerHTML = "Changed by query selector";
}

const change_button = (CartButton) => {
  for (let button of CartButton) {
    // button.innerHTML = "Changed by query selector";
    // button.addEventListener("click", changeDisplay(button));
    button.addEventListener("click", changeDisplay);
  }
};

let CartButton = document.querySelectorAll(".Click_Button");
change_button(CartButton);

/*
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
 "p"
        ).innerText = `Button has been clicked ${index} times`;
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
*/
