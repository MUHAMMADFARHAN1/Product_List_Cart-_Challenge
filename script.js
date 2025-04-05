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

/////////////////////////////////////////////////////////////////////////////Event Loop//////////////////////////////////////////////////////////////////////

//Here we have https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// The event loop will use this asynchronous function for all operations
(async () => {
  await getData();
  console.log(dataGlobal);
  get_selectors();
  Cart_Array_Update();
  Cart_Number();

  //Most of program logic will go here
})();

/////////////////////////////////////////////////////////////////////////////Auxillary Functions///////////////////////////////////////////////////////////
//This function will retrieve all the selectors
const get_selectors = () => {
  cost = document.querySelectorAll(".Cost");
  main_heading = document.querySelectorAll(".Card_First_Heading");
  sub_heading = document.querySelectorAll(".title");
  images = document.querySelectorAll(".Food_Pics");
  Cart_Count = document.querySelectorAll("#Cart_Num");
};

//This function will update the number of items in the main cart
const Cart_Number = () => {
  let total = 0;
  for (let index = 0; index < dataGlobal.length; index++) {
    total += dataGlobal[index].quantity;
  }
  Cart_Num.innerHTML = `Your Cart&nbsp(${total})`;
};

//This function will trigger the event detection on the buttons
const Button_Detection = () => {};

//This function will add the items onto the cart or increase them
const Update_Cart = () => {};

//This function will show the checkout screen on pressing confirm button
const Check_out = () => {};

///////////////////////////////////Cart Operations///////////////////////////////////////////////////////
const 

////////////////////////////////Page update with JSON template/////////////////////////////////////////

//This function will populate the cart array with data retrieved from Json
//It will also add a new field of quantity in the array generated
// The following four functions can be nested in it as well
const Cart_Array_Update = () => {
  add_quantity();
  cost_calc();
  Main_head();
  Sub_head();
  img_up();
};

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

//This function will append quantity field to the existing objects
const add_quantity = () => {
  dataGlobal.forEach((number) => {
    number.quantity = 0;
  });
};

////////////////////////////////////////////////////////////////////////////HTML CSS Templates///////////////////////////////////////////////////////////////

//This template contains main flexbox with a cloumn display to be used
let cost_tab = `<div
style="
  display: flex;
  flex-direction: column;
  gap: 0px;
  background-color: hsl(20, 50%, 98%);
"
>
<div id="tab_${number}">
  <div style="display: flex; flex-direction: row; padding-left: 15px">
    <div>
      <p>Classic Tiramisu</p>
      <p style="margin-top: -10px">Cost</p>
    </div>
    <p style="margin-left: 100px">Cross</p>
  </div>
  <hr style="width: 290px; margin-top: -5px" />
</div>
</div>`;

//This template contains additional tabs which can be populated as per need
const Additional_Tab = `<div id="tab_${number}">
<div style="display: flex; flex-direction: row; padding-left: 15px">
  <div>
    <p>Classic Tiramisu</p>
    <p style="margin-top: -10px">Cost</p>
  </div>
  <p style="margin-left: 100px">Cross</p>
</div>
<hr style="width: 290px; margin-top: -5px" />
</div>`;

//This template contains Total cost, neutral delievery and Confirmation button
const Template_Confirmation = `<div style="display: flex; flex-direction: row; padding-left: 15px">
<p>Cost</p>
<p style="margin-left: 180px" id="Total_Cost">Dollar</p>
</div>
<div style="padding-left: 15px; margin-top: -15px">
<p style="background-color: hsl(13, 31%, 94%); margin-right: 25px">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      fill="#1EA575"
      d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
    />
    <path
      fill="#1EA575"
      d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
    />
  </svg>
  This is a carbon neutral delievery.
</p>
</div>
<div style="padding: 20px">
<button
  style="
    padding: 15px 80px 15px 80px;
    margin-left: 15px;
    border-radius: 30px;
    background-color: hsl(14, 86%, 42%);
    border-color: hsl(14, 86%, 42%);
    color: white;
    box-shadow: none;
  "
>
  Confirmation
</button>
</div>`;






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
