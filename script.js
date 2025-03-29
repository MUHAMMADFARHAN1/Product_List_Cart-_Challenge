let data;

async function Getdata() {
  let response = await fetch("./data.json");
  data = await response.json();
  return data;
}

data = Getdata();
console.log(data);
let array;

data.then(console.log(data)).catch();

//console.log(array[0]);

//to pass parameter we need to use concept of anonymous functions here

// function changeDisplay(button) {
//   //button.style.backgroundcolor = "red";
//   button.style.backgroundColor = "green";
//   button.innerHTML = "Check";
// }
// let quatity = {
//   Waffle: 0,
//   Brûlée: 0,
//   Macaron: 0,
//   Tiramisu: 0,
//   Baklava: 0,
//   Pie: 0,
//   Cake: 0,
//   Brownie: 0,
//   Panna: 0,
// };
let quatity = [1, 0, 0, 0, 0, 0, 0, 0, 0];

const change_button = (CartButton) => {
  for (let button of CartButton) {
    // button.innerHTML = "Changed by query selector";
    // button.addEventListener("click", changeDisplay(button));
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "red";
      button.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>' +
        quatity[0] +
        '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>';
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "hsl(13, 31%, 94%)";
      button.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg"width="21"      height="20"      fill="none"      viewBox="0 0 21 20" >      <g fill="#C73B0F" clip-path="url(#a)">        <path          d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"        />        <path          d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"        />      </g>      <defs>        <clipPath id="a">          <path fill="#fff" d="M.333 0h20v20h-20z" />        </clipPath>      </defs>    </svg>' +
        '<p      style="        display: inline;        position: relative;        bottom: 4px;        left: 3px;      "    >      Add to Cart    </p>';
      //   button.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg> + Add to Cart";
    });
  }
};

let CartButton = document.querySelectorAll(".Click_Button");
change_button(CartButton);

/*
 button.innerHTML = "
 <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
 ";
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
 "p"
        ).innerText = `Button has been clicked ${index} times`;
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
*/
