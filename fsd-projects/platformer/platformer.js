$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 650, 300, 10, "purple");
    createPlatform(300, 450, 300, 10, "purple");
    createPlatform(500, 550, 200, 250, "purple");
    createPlatform(550, 315, 100, 10, "purple");
    createPlatform(525, 175, 175, 10, "purple");
    createPlatform(690, 185, 10, 200, "purple");
    createPlatform(700, 620, 50, 50, "purple");
    createPlatform(700, 100, 200, 100, "black");
    createPlatform(900, 100, 100, 900, "black");
    createPlatform(350, 350, -300, -300, "yellow");
    createPlatform(1399, 110, -400, -10);

    // TODO 3 - Create Collectables
    createCollectable("database", 1399, 150, 0.5, 0.999, 1000, 1300, 2);

    createCollectable("diamond", 750, 690, 1, 0);
    createCollectable("diamond", 750, 690, 1, 0);
    createCollectable("diamond", 800, 690, 1, 0);
    createCollectable("diamond", 850, 690, 1, 0);

    //createCollectable("diamond", 1330, 0, 0.9, 0.2);
    //createCollectable("kennedi", 1310, 0, 0.8, 0.3);
    //createCollectable("grace", 1290, 0, 0.7, 0.4);
    //createCollectable("steve", 1270, 0, 0.6, 0.5);

    // TODO 4 - Create Cannons

    createCannon("right", 500, 1000);
    createCannon("left", 650, 10000);
   createCannon("left", 200, 15000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
