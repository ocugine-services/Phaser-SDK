//====================================================
//  Ocugine SDK for Phaser 3
//  Sofware Development Kit developed specially for
//  Ocugine Services. With this library you can
//  use all features of Ocugine Services
//
//  @name           Ocugine SDK
//  @developer      CodeBits Interactive
//  @version        0.4.0a
//  @build          401
//  @url            https://ocugine.pro/
//  @docs           https://docs.ocugine.pro/
//  @license        MIT
//====================================================
//====================================================
//  Ocugine Phaser Demo
//====================================================
// Phaser Configs
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

// Create Phaser Game
var game = new Phaser.Game(config); // New Phaser Instance

// Preload Game
function preload (){
  // Load Plugin
  this.load.plugin('OcuginePhaserPlugin', 'ocugine.phaser.js'); // Load Ocugine Plugin

  /* TODO: Preload game resources */
}

// Create Game
function create (){
    // Initialize Ocugine Plugin
    this.sys.install('OcuginePhaserPlugin'); // Install Plugin
    console.log(this.sys.ocuginePhaser); // Test It

    /* TODO: Create Game resources */
}
