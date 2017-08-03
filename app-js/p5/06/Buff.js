class Buff {
  constructor(attr, amount, duration) {
    this.attr = attr;
    this.amount = amount;
    this.durationRemaining = duration;
  }

  on(buffable) {
    buffable[this.attr] += this.amount;
  }

  off(buffable) {
    buffable[this.attr] -= this.amount;
  }
}

export default Buff;
