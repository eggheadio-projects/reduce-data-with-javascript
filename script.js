var data = [1, 2, 3];
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);

  return acc;
}, []);

var doubleMapped = data.map(function(item) {
  return item * 2;
});

var data2 = [1, 2, 3, 4, 5, 6];
var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }

  return acc;
}, []);

var evenFiltered = data2.filter(function(item) {
  return (item % 2 === 0);
});

var filterMapped = data2.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});

var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

// console.time('bigData');
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});
// console.timeEnd('bigData');

// console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
// console.timeEnd('bigDataReduce');
displayInPreview(reducedBigData)

// display in plunker preview
function displayInPreview(string) {
  console.log(string)
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}