var data = ["vote1", "vote2", "vote1", "vote2"];
function reducer(accumulator, value) {
  if (accumulator[value]) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }

  return accumulator;
}

var tally = data.reduce(reducer);

console.log(tally) || displayInPreview(tally);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}