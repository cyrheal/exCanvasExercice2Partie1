var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");
ctx.fillStyle = "#d88437";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(155,-170,180,180);
// Fond
ctx.fillStyle = "#A9D7E6";
ctx.rotate(-45 * Math.PI / 180);
ctx.fillRect(100,100,250,250);

// rectangle
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(200,250,60,100);

// carré
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(150,150,50,50);
ctx.fillRect(250,150,50,50);
