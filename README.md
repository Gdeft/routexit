# Routexit
Exit the game whenever the script detects routers that are next to each other. Tile checking is randomized.

```js
Events.on(EventType.Trigger.update, run(function(){
  if(Vars.state.is(GameState.State.playing)){
    //Randomized tile position.
    tile = Vars.world.tile(Mathf.random(Vars.world.width()), Mathf.random(Vars.world.height()));

    //Check if there is a router in tile.
    if(tile.block() == Blocks.router){
      //Check blocks that are linked to the router. *Totally efficient*
      if(tile.getNearbyLink(0).block() == Blocks.router || tile.getNearbyLink(1).block() == Blocks.router || tile.getNearbyLink(2).block() == Blocks.router || tile.getNearbyLink(3).block() == Blocks.router){
        //Exit the game.
        Core.app.exit();
      }
    }
  }
}));
```
