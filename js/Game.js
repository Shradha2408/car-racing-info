class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getPlayerinfo();
    if(allplayers!==undefined){
      var position=150;
      for(var i in allplayers){
        if(i==="player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(20)
        text(allplayers[i].name+":"+allplayers[i].distance,100,position)
        position=position+50
      }
    }
    if(keyDown(UP_ARROW)&& player.index!==null){
      player.distance=player.distance+50
      player.update()
    }
  }
}
