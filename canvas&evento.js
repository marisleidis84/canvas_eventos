// Aqui creamos 2 objetos para guardar los datos de las entrada text y button
let texto = document.getElementById("text_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

// Aqui creamos 1 objeto para guardar los datos del canvas y poder dibujar
let d = document.getElementById("dibujito");
let ancho = d.width;
let lienzo = d.getContext("2d");
let colorcito = "#AAf";

//Estos son los bordes del canvas
dibujarLineas("#FAA", 299, 299, 299, 1);
dibujarLineas("#FAA", 1, 299, 299, 299);
dibujarLineas(colorcito, 299, 1, 1, 1);
dibujarLineas(colorcito, 1, 1, 1, 299);

//Esta funcion es la que usamos para dibujar la linea
function dibujarLineas(color, xinicial, yinicil, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicil);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//En esta funcion pintamos varias lineas y se ejecuta con un evento
function dibujoPorClick() {
    let lineas = parseInt(texto.value);
    let espacio = ancho / lineas;
    let xi, yf, xf, yi;


    for (let l = 0; l < lineas; l++) {

        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLineas(colorcito, 0, yi, xf, 300);
        dibujarLineas(colorcito, 300, yi, xf, 0);

        xi = 300 - espacio * (l + 1);
        yf = espacio * (l + 1);
        dibujarLineas("#FAA", xi, 0, 0, yf);
        dibujarLineas("#FAA", xi, 300, 300, yf);
    }
}