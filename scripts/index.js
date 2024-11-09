import * as PIXI from "../pixi/pixi.mjs"

const _pixiApp = new PIXI.Application({
    width: 1024,
    height: 768,
});

document.body.appendChild(_pixiApp.view);

new Game();