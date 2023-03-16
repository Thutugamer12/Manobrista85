//Criar uma referência para tela
canvas = document.getElementById("a")
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_height = 100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5
greencar_y = 225
function add() {backgroundImagetag = new Image();
	backgroundImagetag.onload = uploadBackground;
	backgroundImagetag.src = backgroundImage;
	greencarImagetag = new Image();
	greencarImagetag.onload = uploadGreenCar
	greencarImagetag.src = greencarImage
	//carregar carro e imagens de fundo na tela.
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
ctx.drawImage(backgroundImagetag,0,0,canvas.width,canvas.height)
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
ctx.drawImage(greencarImagetag,greencar_x,greencar_y,greencar_width,greencar_height)
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '87')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '83')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '65')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '68')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y>=0){
	greencar_y = greencar_y-10
	uploadBackground()
	uploadGreenCar()
}	//Definir função para mover o carro para cima
}

function down()
{
	if(greencar_y<=350){
		greencar_y = greencar_y+10
		uploadBackground()
		uploadGreenCar()
	}	//Definir função para mover o carro para baixo
}

function left()
{
	if(greencar_x>=0){
		greencar_x = greencar_x-10
		uploadBackground()
		uploadGreenCar()
	}	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	if(greencar_x<=750){
		greencar_x = greencar_x+10
		uploadBackground()
		uploadGreenCar()
	}	//Definir função para mover o lado direito do carro
}
