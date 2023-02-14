const { Engine, World, Bodies } = require('matter-js');
const engine = Engine.create();
const world = engine.world;
const rectangle = Bodies.rectangle(100, 100, 50, 50);
World.add(world, rectangle);
Engine.run(engine);

setInterval(() => {
  // update the world and render the bodies
  World.update(world, 16.67);
}, 16.67);
