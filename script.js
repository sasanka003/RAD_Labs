// Attach click event listeners to exercise buttons
document.getElementById('exercise1').addEventListener('click', () => {
  window.location.href = 'exercise1.html'
});


document.getElementById('exercise2').addEventListener('click', () => {
  window.location.href = 'exercise2.html';
});

document.getElementById('exercise3').addEventListener('click', () => {
  window.location.href = 'exercise3.html';
});

document.getElementById('exercise4').addEventListener('click', () => {
  window.location.href = 'exercise4.html';
});

document.getElementById('exercise5').addEventListener('click', () => {
  window.location.href = 'exercise5.html';
});


// Capture console.log output
var consoleOutput = [];
var originalConsoleLog = console.log;

console.log = function() {
  var message = Array.from(arguments).map(convertToString).join(" ");
  consoleOutput.push(message);
  originalConsoleLog.apply(console, arguments);
  updateConsoleOutput();
};

// Update the <div> element with console output
function updateConsoleOutput() {
  var consoleDiv = document.getElementById("output");
  consoleDiv.innerHTML = consoleOutput.join("<br>");
}

// Convert non-string values to string representation
function convertToString(value) {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}

