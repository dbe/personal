const Buffable = (superclass) => {
  return class extends superclass {
    constructor() {
      super(...arguments);

      this.buffs = [];
    }

    applyBuff(buff) {
      this.buffs.push(buff);
      buff.on(this);
    }

    update() {
      this.buffs = this.buffs.filter(buff => {
        buff.durationRemaining--;

        //Should just be === 0, but just protecting against weird cases I cant think of.
        if(buff.durationRemaining <= 0) {
          this._removeBuff(buff);
          return false;
        }

        return true;
      });
    }

    _removeBuff(buff) {
      buff.off(this);
    }
  }
}

export default Buffable;
