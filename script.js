//Javascript will be used here in all three paradigms: Imperative, Event driven and functional with objects

//////Fetch Operation//////////////
let dataGlobal;

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  dataGlobal = data;
  return data;
};

///////////////////////////////////////////////////////////////////////////////Variables/////////////////////////////////////////////////////////////////////
let cost;
let main_heading;
let sub_heading;
let images;
let Cart_Count;

//This array will hold all the objects representing each image
let Cart_Items = [];
////////////////////////////////////////////////////////////////////////////HTML CSS Templates///////////////////////////////////////////////////////////////
let cost_tab = `<div
style="
  display: flex;
  flex-direction: column;
  gap: 0px;
  background-color: hsl(20, 50%, 98%);
"
>
<div>
  <div
    style="
      display: flex;
      flex-direction: row;
      padding-left: 15px;
      background-color: hsl(20, 50%, 98%);
    "
  >
    <div>
      <p>Classic Tiramisu</p>
      <p style="margin-top: -10px">Cost</p>
    </div>
    <p style="margin-left: 100px">Cross</p>
  </div>
  <hr style="width: 290px; margin-top: -5px" />
</div>
<div>
  <div
    style="
      display: flex;
      flex-direction: row;
      padding-left: 15px;
      background-color: hsl(20, 50%, 98%);
    "
  >
    <div>
      <p>Classic Tiramisu</p>
      <p style="margin-top: -10px">Cost</p>
    </div>
    <p style="margin-left: 100px">Cross</p>
  </div>
  <hr style="width: 290px; margin-top: -5px" />
</div>
</div>`;

/////////////////////////////////////////////////////////////////////////////Event Loop//////////////////////////////////////////////////////////////////////

//Here we have https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// The event loop will use this asynchronous function for all operations
(async () => {
  await getData();
  console.log(dataGlobal);
  add_quantity();
  get_selectors();
  // console.log(cost);
  // console.log(main_heading);
  // console.log(sub_heading);
  console.log(images);
  img_up();
  console.log(images);
  cost_calc();
  //  console.log(Cart_Count);;

  //Most of program logic will go here
})();

/////////////////////////////////////////////////////////////////////////////Auxillary Functions///////////////////////////////////////////////////////////
//This function will retrieve all the selectors
const get_selectors = () => {
  cost = document.querySelectorAll(".Cost");
  main_heading = document.querySelectorAll(".Card_First_Heading");
  sub_heading = document.querySelectorAll(".title");
  images = document.querySelectorAll(".Food_Pics");
  Cart_Count = document.querySelectorAll("#Your_Cart");
};

//This function will populate the cart array with data retrieved from Json
//It will also add a new field of quantity in the array generated
// The following four functions can be nested in it as well
const Cart_Array_Update = () => {};

// This function will change the cost as per JSON
const cost_calc = () => {
  for (let index = 0; index < dataGlobal.length; index++) {
    //We need to put if condition here with modulo operator
    cost[index].innerHTML = `$${dataGlobal[index].price}`;
  }
};

//This function will update the Main Heading
const Main_head = () => {
  for (let index = 0; index < dataGlobal.length; index++) {
    main_heading[index].innerHTML = dataGlobal[index].category;
  }
};

//This function will update the Small Heading
const Sub_head = () => {
  for (let index = 0; index < dataGlobal.length; index++) {
    sub_heading[index].innerHTML = dataGlobal[index].name;
  }
};

//This function will update the images as extracted from the object
const img_up = () => {
  for (let index = 0; index < dataGlobal.length; index++) {
    images[index].src = dataGlobal[index].image.desktop;
  }
};

//This function will update the number of items in the main cart
const Cart_Number = () => {};

//This function will trigger the event detection on the buttons
const Button_Detection = () => {};

//This function will add the items onto the cart or increase them
const Update_Cart = () => {};

//This function will show the checkout screen on pressing confirm button
const Check_out = () => {};

//This function will append quantity field to the existing objects
const add_quantity = () => {
  dataGlobal.forEach((number) => {
    number.quantity = 0;
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(array[0]);

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
// let quatity = [1, 0, 0, 0, 0, 0, 0, 0, 0];

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

// let CartButton = document.querySelectorAll(".Click_Button");
// change_button(CartButton);

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

/*
Notes: 
//to pass parameter we need to use concept of anonymous functions here

*/
