$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");

  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 160)
    .css("left", 50)
    .appendTo("#die2");

  function makeDot(top, left, elementID) {
    if (elementID === "#die2") {
      $("<div>")
        .css("height", 15)
        .css("width", 15)
        .css("background-color", "black")
        .css("position", "absolute")
        .css("top", top + 110)
        .css("left", left)
        .appendTo(elementID);
    } else {
      $("<div>")
        .css("height", 15)
        .css("width", 15)
        .css("background-color", "black")
        .css("position", "absolute")
        .css("top", top)
        .css("left", left)
        .appendTo(elementID);
    }
  }

  var randomNum;
  function rollDie(dieID) {
    randomNum = Math.ceil(Math.random() * 6);
    $(dieID).empty();
    // makeDot(50, 65, "#die");
    if (randomNum === 1) {
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(50, 50, dieID); // middle middle
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(25, 25, dieID); // 6 face
      makeDot(50, 25, dieID);
      makeDot(75, 25, dieID);

      makeDot(25, 75, dieID); // 6 face
      makeDot(50, 75, dieID);
      makeDot(75, 75, dieID);
    }
  }

  function handleClick() {
    rollDie("#die2");
    rollDie("#die");
    // position absolute is so,,,,,,,,,,,,,,
  }

  $("#die").on("click", handleClick);
  $("#die2").on("click", handleClick);
});
