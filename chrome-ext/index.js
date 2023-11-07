// Variables
let myLeads = [];


// Fetching ids
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el");
const inputBtn = document.querySelector("#input-btn");

// Input btn
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);

  // Clear the value
  inputEl.value = "";

  // Call the render load function
  renderLoad();
});


function renderLoad () {
  // Looping through array
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target = '_blank' href = "${myLeads[i]}">
        ${myLeads[i]}
        </a>
    </li>
    `
  }

  // Append li to ul 
  ulEl.innerHTML = listItems;
}