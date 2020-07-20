// This is the Client.
// In our scenario this would have been directly calling functions in operations.js.
// We've introduced the Command Pattern to decouple this Client from operations.js (Receiver).
// This also allows us to introduce the Invoker (calculator.js) so we can track 
// and undo any calculator operations.

const { AddCommand, SubtractCommand, MultiplyCommand, DivideCommand } = require("./commands");
const Calculator = require("./calculator");

class Client {
  constructor() {
    this.calculator = new Calculator();
  }

  init() {
    this.calculator.execute(new AddCommand(10));
    this.calculator.execute(new SubtractCommand(5));

    console.log(this.calculator.getCurrentValue());

    this.calculator.execute(new MultiplyCommand(2));
    this.calculator.execute(new DivideCommand(4));

    console.log(this.calculator.getCurrentValue());

    this.calculator.undo();
    this.calculator.undo();

    console.log(this.calculator.getCurrentValue());
  }
}

new Client().init();
