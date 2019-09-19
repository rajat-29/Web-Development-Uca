var canvas = document.getElementById("canvasGame");
var ctx = canvas.getContext("2d");

//variable declaration for bricks
var brickRow =5;
var brickCol = 8;
var brickWidth = 52;
var brickHeight = 25;
var brickPadding = 10;
var brickMarginTop = 20;
var brickMarginLeft = 5; 

var rightKey = false;
var leftKey = false;
var lives = 3;
var score = 0;

//variable declaration for ball
var x = canvas.width/2;
var y = canvas.height - 30;
var radius = 15;
var dx = 2;
var dy = -2;

// variable declaration for paddle
var paddleHeight = 7;
var paddleWidth = 70;
var paddleX = (canvas.width-paddleWidth)/2;

//initilizing brick arrays
var bricks = [];
for(var c=0;c<brickCol;c++)
{
	bricks[c] =[];
	for(var r=0;r<brickRow;r++)
	{
		bricks[c][r] = {x:0, y:0, print:1};
	}
}
//console.log(bricks)

// detect right and left key pressed
function pressKey(e)
{
	//console.log(e.key)
	if(e.key == 'ArrowRight') 
	{
		rightKey = true;
	}
	else if(e.key == 'ArrowLeft')
	{
		leftKey = true;
	}
}

// detect right and left key realeased
function releaseKey(e)
{
	if(e.key == 'ArrowRight') 
	{
		rightKey = false;
	}
	else if(e.key == 'ArrowLeft')
	{
		leftKey = false;
	}
}

// detect mouse moving paddle
function mouseMove(e)
{
	var tempX = e.clientX - canvas.offsetLeft;
	if(tempX > 0 && tempX < canvas.width)
	{
		paddleX = tempX - paddleWidth/2;
	}
}

function drawBricks()
{
	//console.log('k')
	for(var c=0;c<brickCol;c++)
	{
		for(var r=0;r<brickRow;r++)
		{
			if(bricks[c][r].print == 1)
			{
				var brickX = (c*(brickWidth+brickPadding))+brickMarginLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickMarginTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX,brickY,brickWidth,brickHeight);
				ctx.fillStyle = "lightgreen";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBall()
{
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI*2);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillStyle = "wheat";
	ctx.fill();
	ctx.closePath();
}

function checkBallBoundaries()
{
	//console.log(paddleX+paddleWidth)
	if(x+dx > canvas.width-radius || x+dx < radius)
	{
		dx = -dx;
	}
	if(y+dy < radius)
	{
		dy = -dy;
	}
	else if(y+dy > canvas.height-radius)
	{
		if(x > paddleX && x < paddleX+paddleWidth)
		{
			dy = -dy;
		}
		else
		{
			lives--;
			if(lives == 0)
			{
				alert("Game Over!!")
				location.reload();
			}
			else
			{
				console.log('fdsfds')
				x = canvas.width/2;
				y = canvas.height-30;
				dx = 2;
				dy = -2;
				paddleX = (canvas.width-paddleWidth)/2;
				//drawPaddle();
			}
		}
	}
}

function drawScore()
{
	ctx.font = "18px Arial"
	ctx.fillStyle = "white"
	ctx.fillText("Score : " + score, 4, 15);
}

function drawLives()
{
	ctx.font = "18px Arial"
	ctx.fillStyle = "white"
	ctx.fillText("Lives : " + lives, canvas.width-75, 15);
}

function collisionDetector()
{
	for(var c=0;c<brickCol;c++)
	{
		for(var r=0;r<brickRow;r++)
		{
			var temp = bricks[c][r];
			if(temp.print == 1)
			{
				if(temp.x<x && x<temp.x+brickWidth && temp.y<y && y<temp.y+brickHeight)
				{
					dy = -dy;
					temp.print = 0;
					score++;
					if(score == brickCol*brickRow)
					{
						alert("Congratulations, You Won!")
						location.reload();
					}

				}
			}
		}
	}
}

function main()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawBricks();
	drawBall();
	drawPaddle();

	checkBallBoundaries();

	collisionDetector();
	drawScore();
	drawLives();

	// moving ball
	x += dx;
	y += dy;

	// handling paddle
	//console.log(leftKey)
	if(rightKey && paddleX <canvas.width - paddleWidth)
		paddleX += 7;
	if(leftKey && paddleX > 0)
		paddleX -= 7;

	requestAnimationFrame(main);
}

main();

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);
document.addEventListener("mousemove", mouseMove)