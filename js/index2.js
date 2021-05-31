//dibujo rectangulo//
//var miCanvas=document.getElementById("rectangulo"); //la primera linea declara la variable miCanvas, la cual define un nuevo objeto de disenio en el elemento canvas del documento en curso, que hemos identificado con el id="rectangulo"
//var miDibujo=miCanvas.getContext("2d"); //la segunda linea declara otra variable llamada miDibujo, este objeto esta definido en el elemento miCanvas y se usara par crear un grafico en dos dimensiones 
//miDibujo.fillStyle="rgb(210,210,210)";//en esta linea aplicamos color sobre el elemento rectangulo
//miDibujo.rect(290,150,200,100); //nuestra cuarta linea nos permite utilizar el metodo rect para definir un rectangulo en el objeto miDibujo. Para definir nuestro rectangulo utilizaremos las coordenadas X (10px), Y(10px) contados a partir del angulo superior izq del elemento canvas con un width(200px) y height(200px). 
//miDibujo.fill();//nuestra quinta linea solicita que se cree o se muestre el rectangulo definido
//tambien podemos utilizar el metodo fillRect() el cual nos permite definir y dibujar nuestro rectangulo al mismo tiempo
//var miDibujo=document.getElementById("rectangulo") .getContext("2d");
//miDibujo.fillRect(20,20,200,100)

//dibujo circulo//
//para dibujar esta forma lo declaramos con el metodo arc().
//la sintaxis es la sig: arc(x, y, radius, startAngle, endAngle, antiClockwise)
//x= coordenada horizontal calculada a partir del centro del ovalo
//y= coordenada vertical calculada a partir del centro del ovalo
//radius= radio del ovalo
//startAngle= punto de partida del arco en radianes
//endAngle= punto de llegada del arco en radianes
//antiClockwise= valor booleano que indica que el arco sera dibujado en sentido de las agujas del reloj (valor=true) si es en sentido contrario (valor=false)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//sombrero de mario
ctx.beginPath();
ctx.rect(700, 0, 500, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();


ctx.beginPath();
ctx.rect(600, 100, 900, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

//cara de mario-medida de cada pixel
ctx.beginPath();
ctx.rect(1200, 200, 100, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(1200, 300, 300, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//ojos//
ctx.beginPath();
ctx.rect(1100, 200, 100, 200);
ctx.fillStyle = "black";
ctx.fill();

//mejilla//
ctx.beginPath();
ctx.rect(900, 200, 200, 400);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(1100, 400, 100, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(800, 300, 100, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(700,500, 200, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//oreja//
ctx.beginPath();
ctx.rect(600, 300, 100, 200);
ctx.fillStyle = "#C49A73";
ctx.fill();


//nariz//
ctx.beginPath();
ctx.rect(1300, 400, 300, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//mustache//
ctx.beginPath();
ctx.rect(1100, 500, 400, 100);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(1200, 400, 100, 100);
ctx.fillStyle = "black";
ctx.fill();

//cabello//
ctx.beginPath();
ctx.rect(600, 200, 300, 100);
ctx.fillStyle = "#532118";
ctx.fill();

ctx.beginPath();
ctx.rect(700, 300, 100, 200);
ctx.fillStyle = "#532118";
ctx.fill();

ctx.beginPath();
ctx.rect(800, 400, 100, 100);
ctx.fillStyle = "#532118";
ctx.fill();

ctx.beginPath();
ctx.rect(500, 300, 100, 300);
ctx.fillStyle = "#532118";
ctx.fill();

ctx.beginPath();
ctx.rect(600, 500, 100, 100);
ctx.fillStyle = "#532118";
ctx.fill();

//cuello//
ctx.beginPath();
ctx.rect(700, 600, 700, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//brazo-izq//
ctx.beginPath();
ctx.rect(1400, 200, 300, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1500, 300, 200, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1600, 400, 100, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1500, 500, 100, 200);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1400, 600, 100, 200);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1300, 700, 100, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

//mano-izq//
ctx.beginPath();
ctx.rect(1400, 0, 300, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(1500, 100, 200, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//brazo-der//
ctx.beginPath();
ctx.rect(400, 700, 400, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(400, 800, 500, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(500, 900, 400, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

//mano-der//
ctx.beginPath();
ctx.rect(200, 900, 300, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(200, 800, 200, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

ctx.beginPath();
ctx.rect(300, 1000, 100, 100);
ctx.fillStyle = "#C49A73";
ctx.fill();

//torso//
//pecho//
ctx.beginPath();
ctx.rect(900, 700, 300, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

ctx.beginPath();
ctx.rect(1000, 800, 300, 100);
ctx.fillStyle = "#9D2121";
ctx.fill();

//jumper//
ctx.beginPath();
ctx.rect(800, 700, 100, 100);
ctx.fillStyle = "#303A99";
ctx.fill();

ctx.beginPath();
ctx.rect(1200, 700, 100, 100);
ctx.fillStyle = "#303A99";
ctx.fill();

ctx.beginPath();
ctx.rect(1300, 800, 100, 100);
ctx.fillStyle = "#303A99";
ctx.fill();

ctx.beginPath();
ctx.rect(900, 800, 100, 100);
ctx.fillStyle = "#303A99";
ctx.fill();

ctx.beginPath();
ctx.rect(900, 900, 400, 100);
ctx.fillStyle = "#303A99";
ctx.fill();

ctx.beginPath();
ctx.rect(1000, 1000, 100, 100);
ctx.fillStyle = "yellow";
ctx.fill()

ctx.beginPath();
ctx.rect(1300, 900, 100, 100);
ctx.fillStyle = "yellow";
ctx.fill()

//left-leg//
ctx.beginPath();
ctx.rect(1400, 900, 200, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

ctx.beginPath();
ctx.rect(1100, 1000, 500, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

ctx.beginPath();
ctx.rect(1100, 1100, 500, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

//left-foot//
ctx.beginPath();
ctx.rect(1600, 800, 100, 400);
ctx.fillStyle = "#491C16";
ctx.fill();

ctx.beginPath();
ctx.rect(1700, 700, 100, 500);
ctx.fillStyle = "#491C16";
ctx.fill();

//right-leg//
ctx.beginPath();
ctx.rect(600, 1000, 400, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

ctx.beginPath();
ctx.rect(600, 1100, 500, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

ctx.beginPath();
ctx.rect(600, 1200, 600, 100);
ctx.fillStyle = "#303A99";
ctx.fill()

//right-foot//
ctx.beginPath();
ctx.rect(400, 1100, 200, 200);
ctx.fillStyle = "#491C16";
ctx.fill()

ctx.beginPath();
ctx.rect(300, 1200, 100, 200);
ctx.fillStyle = "#491C16";
ctx.fill()

ctx.beginPath();
ctx.rect(400, 1300, 100, 100);
ctx.fillStyle = "#491C16";
ctx.fill()

//details//
ctx.beginPath();
ctx.moveTo(1400, 0);
ctx.lineTo(1400, 100);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1400, 200);
ctx.lineTo(1400, 300);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgba(255, 255, 255, 0.4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1700, 700);
ctx.lineTo(1700, 800);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgba(0, 0, 0, 0.5";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1600, 800);
ctx.lineTo(1600, 900);
ctx.lineWidth = 20;
ctx.strokeStyle = "rgba(0, 0, 0, 0.5";
ctx.stroke();