class Player {
  constructor(){
    this.name=null;
    this.index=null;
    this.distance=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

static getPlayerinfo(){
      database.ref("players").on("value",(data)=>{
        allplayers=data.val();
      })

}
}