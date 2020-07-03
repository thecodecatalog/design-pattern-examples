const { add, subtract, multiply, divide } = require("./operations");

class Command {
  // all Commands follow this interface - execute and undo methods and the value to operate on
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

const AddCommand = function (value) {
  // 1st argument is the function that executes this action (defined in Receiver)
  // 2nd argument is the function that performs the opposite action
  return new Command(add, subtract, value);
};

const SubtractCommand = function (value) {
  return new Command(subtract, add, value);
};

const MultiplyCommand = function (value) {
  return new Command(multiply, divide, value);
};

const DivideCommand = function (value) {
  return new Command(divide, multiply, value);
};

module.exports = {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
};
