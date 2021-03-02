import MathController from "./components/mathController.js";

class App {
  constructor() {
    this.controllers = {
      mathController: new MathController()
    }
  }
}

window['app'] = new App()

