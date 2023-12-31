var gdjs;
(function(gdjs2) {
  class LoadingScreenPixiRenderer {
    constructor(runtimeGamePixiRenderer, loadingScreenSetup) {
      this._pixiRenderer = runtimeGamePixiRenderer.getPIXIRenderer();
      if (!this._pixiRenderer) {
        return;
      }
      this._loadingScreen = new PIXI.Container();
      this._progressText = new PIXI.Text(" ", {
        fontSize: "30px",
        fontFamily: "Arial",
        fill: "#FFFFFF",
        align: "center"
      });
      this._loadingScreen.addChild(this._progressText);
      if (loadingScreenSetup && loadingScreenSetup.showGDevelopSplash) {
        this._madeWithText = new PIXI.Text("BSC Games", {
          fontSize: "30px",
          fontFamily: "Arial",
          fill: "#FFFFFF",
          align: "center"
        });
        this._madeWithText.position.y = this._pixiRenderer.height / 2 - 130;
        this._websiteText = new PIXI.Text("https://bsc-games.com/", {
          fontSize: "30px",
          fontFamily: "Arial",
          fill: "#FFFFFF",
          align: "center"
        });
        this._websiteText.position.y = this._pixiRenderer.height / 2 + 100;
        this._splashImage = PIXI.Sprite.from(gdjs2.splashImage);
        this._splashImage.position.x = this._pixiRenderer.width / 2;
        this._splashImage.position.y = this._pixiRenderer.height / 2;
        this._splashImage.anchor.x = 0.5;
        this._splashImage.anchor.y = 0.5;
        this._splashImage.scale.x = this._pixiRenderer.width / 800;
        this._splashImage.scale.y = this._pixiRenderer.width / 800;
        //this._loadingScreen.addChild(this._splashImage);
        this._loadingScreen.addChild(this._madeWithText);
        this._loadingScreen.addChild(this._websiteText);
      }
    }
    render(percent) {
      if (!this._pixiRenderer) {
        return;
      }
      const screenBorder = 10;
      if (this._madeWithText) {
        this._madeWithText.position.x = this._pixiRenderer.width / 2 - this._madeWithText.width / 2;
        this._madeWithText.position.y = this._pixiRenderer.height / 2 - this._splashImage.height / 2 - this._madeWithText.height - 20;
      }
      if (this._websiteText) {
        this._websiteText.position.x = this._pixiRenderer.width - this._websiteText.width - screenBorder;
        this._websiteText.position.y = this._pixiRenderer.height - this._websiteText.height - screenBorder;
      }
      this._progressText.text = percent + "%";
      this._progressText.position.x = screenBorder;
      this._progressText.position.y = this._pixiRenderer.height - this._progressText.height - screenBorder;
      this._pixiRenderer.render(this._loadingScreen);
    }
    unload() {
    }
  }
  gdjs2.LoadingScreenRenderer = LoadingScreenPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=loadingscreen-pixi-renderer.js.map
