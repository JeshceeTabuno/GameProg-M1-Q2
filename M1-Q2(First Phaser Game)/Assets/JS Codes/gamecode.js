var config= {
    type: Phaser.Auto,
    width:800, 
    height:600, 
    scene:
    {preload: preload, create: create, update: update}
};
var game = new Phaser.Game(config);


function preload(){
this.load.image('Hero', 'Assets/Textures/Images/Warrior.png');
this.load.image('Goblin', 'Assets/Textures/Images/Enemy Goblin.png');
this.load.image('bg', 'Assets/Textures/BackGround/ForestBackGround.jpg');
}
function create(){
    this.add.image(400,300, 'bg');
}
function update(){
    
}

