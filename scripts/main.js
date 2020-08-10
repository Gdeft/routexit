Events.on(EventType.Trigger.update, run(function(){
  if(Vars.state.is(GameState.State.playing)){
    tile = Vars.world.tile(Mathf.random(Vars.world.width()), Mathf.random(Vars.world.height()));

    if(tile.block() == Blocks.router){
      if(tile.getNearbyLink(0).block() == Blocks.router || tile.getNearbyLink(1).block() == Blocks.router || tile.getNearbyLink(2).block() == Blocks.router || tile.getNearbyLink(3).block() == Blocks.router){
        print("Router chain detected!");
        Core.app.exit();
      }
    }
  }
}));
