// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Thomas Livengood" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
// let subTotalgb = 0 //Table value for Subtotal of Gingerbread Cookies

console.log([gb])

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
//Selecting the element with an id of sub-gb
const gbMinusBtn = document.querySelector('#minus-gb')
//Selecting the element for the quantity of gingerbread cookies in Order Summary Table
var subTotalGb = document.querySelector('#qty-gb')

console.log('subTotalgb')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    //button click on + to increase the value of a variable
    gb=gb+=1
//  console.log([gb])
    subTotalGb=gb
    console.log([subTotalGb])
    })

//Event Listener for Clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread - button was clicked!')
    //button click on - to decrease the value of [gb] variable
    gb=gb-=1
//  console.log([gb])
    subTotalGb=gb
    console.log([subTotalGb])
    })

console.log('I am here')



// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

//Function  - Add Click
//step 1 - button click on to increase the value of a variable
//step 2 - updated value of variable is displayed in order summary table
//step 3 - variable for total is updated for  



// TODO: Hook up event listeners for the rest of the buttons