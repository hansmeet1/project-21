const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball
var ground;
var left;
var right;
var top_wall;
var btn1
var btn2

function setup() {
    createCanvas(700, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 390, 1000, 20);
    right = new Ground(690, 200, 20, 700);
    left = new Ground(500, 340, 20, 400);
    top_wall = new Ground(200, 10, 1000, 20);
    btn1 = createImg("right.png")
    btn1.position(220, 30)
    btn1.size(50, 50)
    btn1.mouseClicked(hForce)
    rectMode(CENTER);
    ellipseMode(RADIUS);
    var ballOption = { restitution: 0.9 }
    ball = Bodies.circle(200, 100, 20, ballOption)
    World.add(world, ball)
}

function draw() {
    background(51);
    ground.show();
    top_wall.show();
    left.show();
    right.show();
    Engine.update(engine);
    ellipse(ball.position.x, ball.position.y, 20)
}

function hForce() {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 })
}