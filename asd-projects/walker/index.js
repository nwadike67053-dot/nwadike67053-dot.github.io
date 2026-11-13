/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  // setup
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  };

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  const L_KEY = {
    ENTER: 13,
    LEFT: 65,
    UP: 87,
    RIGHT: 68,
    DOWN: 83,
  };
  // Game Item Objects

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  // logic

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT || event.which === L_KEY.LEFT) {
      walker.speedX = -5;
    } else if (event.which === KEY.UP || event.which === L_KEY.UP) {
      walker.speedY = -5;
    } else if (event.which === KEY.RIGHT || event.which === L_KEY.RIGHT) {
      walker.speedX = 5;
    } else if (event.which === KEY.DOWN || event.which === L_KEY.DOWN) {
      walker.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === L_KEY.LEFT) {
      walker.speedX = 0;
    } else if (event.which === KEY.UP || event.which === L_KEY.UP) {
      walker.speedY = 0;
    } else if (event.which === KEY.RIGHT || event.which === L_KEY.RIGHT) {
      walker.speedX = 0;
    } else if (event.which === KEY.DOWN || event.which === L_KEY.DOWN) {
      walker.speedY = 0;
    }
  }

  function wallCollision() {
    if (walker.x > $("#board").width() - $("#walker").width() || walker.x < 0) {
      walker.x -= walker.speedX;
    }
    // i am very veri unsmart actually
    if (
      walker.y < 0 ||
      walker.y > $("#board").height() - $("#walker").height()
    ) {
      walker.y -= walker.speedY;
    } 
  }
  // helper

  function repositionGameItem() {
    walker.x = walker.x + walker.speedX;
    walker.y = walker.y + walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
