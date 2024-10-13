//  my simple calculator

const display = document.getElementById("display")

function appendToDisplay(input){           // Function to append values to the display
    display.value +=input;

}

function clearDisplay(){   // Function to clear the display
  display.value ="";

}

function calculate(){      // Function to calculate the  values
   try{
    display.value = eval(display.value);
   }
   catch(error){
       display.value = "Error";
   }

}
 function deleteLast(){                            // Use slice() to remove the last character from the string in display.value
    display.value=display.value.slice(0,-1);       // starting index 0 ending index -1

 }