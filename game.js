
	var canvas= document.getElementById('back');
  var context = canvas.getContext('2d');
	
	 celdas=matriz();
  
//gameStart funcion principal que se llama para iniciar simulacion ciclando cada 150
function gameStart(){
    

    setInterval(function(){
      glider(celdas);
      drawCellsOnCanvas(celdas);
        const update = actualizar(celdas);
        drawCellsOnCanvas(update);
        celdas = update;
    },150);

}
//funcion para crear matriz de 50x50
function matriz(){
   var celdas = new Array(50);
  for(var rows=0;rows<50;rows++){
     celdas[rows]= new Array(50);
    for(var cols=0; cols<50;cols++){
         celdas[rows][cols]=0;
    }
      
  }
   return celdas;
}
//funcion para llenar las celulas vivas iniciales
function glider(){
  celdas[1][5]=1;
  celdas[1] [6]=1;
  celdas[2] [5]=1 
  celdas[2] [6]=1; 
  celdas[11] [5]=1;
  celdas[11] [6]=1;
  celdas[11] [7]=1;
  celdas[12] [4]=1;
  celdas[12] [8]=1;
  celdas[13] [3]=1;
  celdas[13] [9]=1;
  celdas[14] [3]=1;
  celdas[14] [9]=1;
  celdas[15] [6]=1;
  celdas[16][4]=1;
  celdas[16] [8]=1;
  celdas[17] [5]=1;
  celdas[17] [6]=1;
  celdas[17][7]=1;
  celdas[18] [6]=1;
  celdas[21] [3]=1;
  celdas[21][4]=1;
  celdas[21] [5]=1;
  celdas[22] [3]=1;
  celdas[22] [4]=1;
  celdas[22] [5]=1;
  celdas[23] [2]=1;
  celdas[2] [6]=1;
  celdas[25] [1]=1;
  celdas[25] [2]=1;
  celdas[25] [6]=1;
  celdas[25] [7]=1;
  celdas[35] [3]=1;
  celdas[35] [4]=1;
  celdas[36] [3]=1;
  celdas[36] [4]=1;


  

 
}
  //funcion para saber cuantos vecinos vivos tienen las celulas

function findAliveNeighbors(celdas,rows,cols){

	var cantidad=0;

  function llena(rows, cols) {
     return celdas[rows]&&celdas[rows][cols];

  }

	     if(rows > 0 && cols > 0 && rows < 49 && cols < 49) {
      
              if (llena(rows-1, cols-1)) cantidad++;
                if (llena(rows,   cols-1)) cantidad++;
                if (llena(rows+1, cols-1)) cantidad++;
                if (llena(rows-1, cols  )) cantidad++;
                if (llena(rows+1, cols  )) cantidad++;
                if (llena(rows-1, cols+1)) cantidad++;
                if (llena(rows,   cols+1)) cantidad++;
                if (llena(rows+1, cols+1)) cantidad++;
                return cantidad
        } 
}


//funcion que determina el estado de las celulas para la siguiente ronda de acuerdo a las reglas del juego
function actualizar(celdas){
  var nextRound=matriz();

	for(var rows=0;rows<50;rows++){
		for(var cols=0;cols<50;cols++){

			
        var vecinos = findAliveNeighbors(celdas,rows,cols);
             
            if (celdas[rows][cols] == 1) {
               if (vecinos < 2) {
                  nextRound[rows][cols] = 0;
               }
               else if (vecinos > 3) {
                  nextRound[rows][cols] = 0;
               }
               else if (vecinos == 2 || vecinos == 3) {
                  nextRound[rows][cols] = 1;
               }
            }
            else if (celdas[rows][cols] == 0 && vecinos == 3) {
               nextRound[rows][cols] = 1;
            }
		}
	}
	return nextRound;
}
//funcion para dibujar las celulas en el canvas
function drawCellsOnCanvas(celdas){
  function can(rows,cols, cord){
      context.beginPath();
     context.rect(rows*7,cols*7,7,7);
     context.fillStyle = cord ? 'purple' : '#EEE'
     context.strokeStyle='black';
     context.stroke();
     context.fill();
  }

  for(var rows=0;rows<celdas.length;rows++){
    for(var cols=0;cols<celdas[rows].length;cols++){
     can(rows, cols,celdas[rows][cols]); 
    }
  }      
}


	
  

  




