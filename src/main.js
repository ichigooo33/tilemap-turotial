let config = 
{
    type: Phaser.CANVAS,
    render:{
        pixelArt: true
    },
    width: 480,
    height: 320,
    physics:{
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    zoom: 1.5,
    scene: [area01]
}

let game = new Phaser.Game(config);