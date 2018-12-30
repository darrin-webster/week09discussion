// // #5 Change that element's background-color.
// document.getElementsByClassName("class1")[0].style.backgroundColor = "red";
//
// // #7 Create an h1 and then use innerText to add some text to it
// var newH1 = document.createElement("h1");
// newH1.innerText = "test content, added to an h1";
//
// // #8 Add that h1 to the div in your HTML
// document.getElementById("divId1").appendChild(newH1);
//
// // #10 Create an h1 element, create a text node. Add the text node to your h1, then add your h1 to your div.
// var anotherNewH1 = document.createElement("h1");
// var newTextNode = document.createTextNode("More test content for another h1");
//
// anotherNewH1.appendChild(newTextNode);
// document.getElementById("divId2").appendChild(anotherNewH1);
//
// // #12 Create a function that changes the image source and alt attributes when you click on that button
// function changeImageSrc() {
//   var image1 = document.getElementById("image1");
//
//   image1.src = "img/designersdesk.jpg"
//   image1.alt = "Coding Desk, Get to work"
// };
// # 13 Comment out all of your current code, and create a new, empty array stored in a variable.

var newVar = [];
// #15 Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).
var listItem = document.getElementsByTagName("ul")[0];

function afunction() {
  var inputValue = document.getElementsByTagName("input")[0].value;
  newVar.push(inputValue);
  listItem.innerHTML = "";
  for (i = 0; i < newVar.length; i++) {
    newListItem = document.createElement("li");
    newListItem.innerText = newVar[i];
    listItem.appendChild(newListItem);
  }
}