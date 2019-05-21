# Phaser-SDK
Welcome to the Ocugine Plugin documentation for Phaser SDK. You can use this plugin to build your games based on Phaser Game Engine with Ocugine Services.

*This version of SDK is required Phaser 3*

# Installation
Ocugine SDK installation for Phaser 3 is very simple. Just follow this instructions:

### 1. Create an Account
Go to the Ocugine Website (https://ocugine.pro/) and create your Ocugine account. After this - create your first project.

### 2. Download Phaser
Download and install Phaser 3 game engine (https://phaser.io). This version of Ocugine Plugin works with Phaser v3.

### 3. Install Phaser Plugin
Download and connect Ocugine Phaser plugin for your project from GitHub (https://github.com/ocugine-services/Phaser-SDK) or Ocugine Control Panel (https://cp.ocugine.pro/).

### 4. Initialize Phaser Plugin
After this - initialize Ocugine SDK plugin.

*In the preload method:*
```
this.load.plugin('OcuginePhaserPlugin', 'ocugine.phaser.js'); // Load Ocugine Plugin
```

*In the create method:*
```
this.sys.install('OcuginePhaserPlugin'); // Install Plugin
console.log(this.sys.ocuginePhaser); // Test It
```

# Usage
