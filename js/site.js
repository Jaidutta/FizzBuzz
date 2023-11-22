// get the values from the interface
// 1. starts or Controller function

function getValues() {
  // get values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;


  // We need to validate our inputs
  // parse into Integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

    // We call fizzBuzz
    //let collection = fizzBuzz(fizzValue, buzzValue);
      let fizzBuzzCollection = fizzBuzzC(fizzValue, buzzValue);

    // We call displayNumbers
    displayData(fizzBuzzCollection);
    
  } else {
    alert("You must enter integer/whole number");
  }
}





// 2. Logic function(s) -- This could be multiple function if it is complex
let fizzBuzzArray = [];

// do fizzBuzz
function fizzBuzz(fizzVal, buzzVal) {
  
  for (let index = 1; index <= 100; index++) {
    if(index % fizzVal == 0 && index % buzzVal == 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else if(index % fizzVal == 0) {
      fizzBuzzArray.push("Fizz");
    } else if(index % buzzVal == 0) {
      fizzBuzzArray.push("Buzz");
    } else {
      fizzBuzzArray.push(index);
    } 
    
  }
  return fizzBuzzArray;
}


function fizzBuzzB(fizzValue, buzzValue) {
  
  let Fizz = false;
  let Buzz = false;

  for (let index = 1; index <= 100; index++) {
    
    Fizz = (index % fizzValue) == 0;
    Buzz = (index % buzzValue) == 0;
    
    switch (true) {
      case Fizz && Buzz: 
      {
        fizzBuzzArray.push("FizzBuzz");
        break;
      }
      case Fizz: 
      {
        fizzBuzzArray.push("Fizz");
        break;
      }
      case Buzz: {
        fizzBuzzArray.push("Buzz");
        break;
      }
      default: {
        fizzBuzzArray.push(index);
        break;
      }
    }
  }

  return fizzBuzzArray;
}

function fizzBuzzC(fizzValue, buzzValue) {
  for(let index = 1; index <= 100; index++){
    let value = ((index % fizzValue == 0 ? 'Fizz' : '') + (index % buzzValue == 0 ? 'Buzz' : '') || index)
    fizzBuzzArray.push(value)
  }
  return fizzBuzzArray
}


// 3. display or View function


// loop over the array and create a tablerow for each item.
function displayData(array) {
  

    // Get the table body 
    let tableBody = document.getElementById("results")

    //get the templateRows
    let templateRow = document.getElementById("fbTemplate");

    // clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < fizzBuzzArray.length; index += 5) {
      
      
      let tableRow = document.importNode(templateRow.content, true);

      // grab just the tds and put them into an array
      let rowCols = tableRow.querySelectorAll("td");

      rowCols[0].textContent = fizzBuzzArray[index];
      rowCols[0].classList.add(fizzBuzzArray[0]);

      rowCols[1].textContent = fizzBuzzArray[index + 1];
      rowCols[1].classList.add(fizzBuzzArray[index + 1]);

      rowCols[2].textContent = fizzBuzzArray[index + 2];
      rowCols[2].classList.add(fizzBuzzArray[index + 2]);

      rowCols[3].textContent = fizzBuzzArray[index + 3];
      rowCols[3].classList.add(fizzBuzzArray[index + 3]);

      rowCols[4].textContent = fizzBuzzArray[index + 4];
      rowCols[4].classList.add(fizzBuzzArray[index + 4]);

      tableBody.appendChild(tableRow);
    }
    
  }

  