// Create an entity
const box = new Entity();

// Create and add a `Transform` component to that entity
box.addComponent(new Transform());

// Set the fields in the component
box.getComponent(Transform).position.set(3, 1, 3);

// Create and apply a `BoxShape` component to give the entity a visible form
box.addComponent(new BoxShape());

// Add the entity to the engine
engine.addEntity(box);
