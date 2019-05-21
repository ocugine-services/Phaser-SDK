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
//  Ocugine Phaser Plugin
//====================================================
var OcuginePhaserPlugin = function (scene) {
  this.scene = scene; // Set Scene
  this.systems = scene.sys; // Set Scene Systems

  // Check Scene is boosted
  if (!scene.sys.settings.isBooted) {
    scene.sys.events.once('boot', this.boot, this);
  }
};

// Register this plugin with the PluginManager
OcuginePhaserPlugin.register = function (PluginManager) {
  PluginManager.register('OcuginePhaserPlugin', OcuginePhaserPlugin, 'ocuginePhaser');
};

//====================================================
//  Ocugine Phaser Plugin Class
//====================================================
OcuginePhaserPlugin.prototype = {
  //====================================================
  //  @method       boot
  //  @usage        Called when the plugin is loaded by
  //                the Phaser PluginManager
  //  @args         none
  //  @returns      none
  //====================================================
  boot: function () {
    var eventEmitter = this.systems.events; // Set Event Emitter
    eventEmitter.on('shutdown', this.shutdown, this); // Shutdown Method
    eventEmitter.on('destroy', this.destroy, this); // Destroy Method
  },

  //====================================================
  //  @method       boot
  //  @usage        Called when a Scene shuts down, it
  //                may then come back again later (which
  //                will invoke the 'start' event) but
  //                should be considered dormant.
  //  @args         none
  //  @returns      none
  //====================================================
  shutdown: function () {
    /* TODO: Shutdown */
  },

  //====================================================
  //  @method       destroy
  //  @usage        Called when a Scene is destroyed
  //                by the Scene Manager
  //  @args         none
  //  @returns      none
  //====================================================
  destroy: function () {
    this.shutdown(); // Shutdown
    this.scene = undefined; // Clear Scene
  }
};

//====================================================
//  Ocugine SDK for Phaser
//====================================================
