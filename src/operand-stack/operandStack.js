export default class OperandStack {
  constructor() {
    this._stack = [];
  }

  peek(): number {
    if (this._stack.length > 0) {
      return this._stack[this._stack.length - 1];
    }

    return parseFloat(0);
  }

  push(value: number) {
    this._stack.push(value);
  }

  replaceTop(value: number) {
    if (this._stack.length > 0) {
      this.pop();
    }
    this.push(value);
  }

  pop(): number {
    if(this._stack.length === 0) {
      return parseFloat(0);
    }
    return this._stack.pop();
  }
}