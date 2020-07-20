// Invoker
// The Invoker decides when an action should be executed.
// We use it to keep track of the Commands that have been executed so we can undo them later.

module.exports = class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
  }

  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }

  getCurrentValue() {
    return this.current;
  }
};
