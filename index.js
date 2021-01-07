/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  
  const time = parseInt(string.split(":")[0])
  if ( time >= 0 && time <= 11) {
      return "Good Morning";
    } else if (time >= 12 && time <= 17) {
      return "Good Afternoon";
    } else if (time >= 18 && time <= 23) {
      return "Good Evening";
    };
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let doc = document.getElementById("greeting");
  doc.innerText = string;
}