var hypnoticBall, database;
var position;


function setup(){
   // Criando Banco de Dados
  database = firebase.database();
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('Bola/Position');
  // on é um ouvinte que acompanha as mudanças do banco de dados.
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      database.ref('Bola/Position').set({
        'x': position.x -1 ,
        'y': position.y + 0
      })
    }
   if(keyDown(RIGHT_ARROW)){
      database.ref('Bola/Position').set({
        'x': position.x + 1 ,
        'y': position.y + 0
      })
    }
   if(keyDown(UP_ARROW)){
      database.ref('Bola/Position').set({
        'x': position.x + 0 ,
        'y': position.y - 1
      })
    }
   if(keyDown(DOWN_ARROW)){
      database.ref('Bola/Position').set({
        'x': position.x + 0 ,
        'y': position.y + 1
      })
    }
    drawSprites();
  
}

// function writePosition(x,y){
//   /* ref é usado para se refirir a localização do valor do Banco de Dados.
//   set é definir o valor do banco de dados.*/
//   database.ref('Bola/Position').set({
//     'x': position.x + x ,
//     'y': position.y + y
//   })
// }

function readPosition(data){
  position = data.val();
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Dados não recebidos do banco de dados.");
}