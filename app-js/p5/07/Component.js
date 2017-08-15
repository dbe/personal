const ITEM_PROTOTYPES = [
  {
    power: 3,
    battery: -5
  },
  {
    battery: 5
  },
  {
    shields: 50,
    battery: -10
  }
];

class Component {
  constructor(attributes) {
    this.attributes = attributes;
  }

  toString() {
    return Object.keys(this.attributes).map(k => {
      return `${k}: ${this.attributes[k]}`;
    }).join("\n");
  }

  //Rolls a new component of given quality
  static roll(quality) {
    let prototypes = this.rollPrototypes();
    prototypes = prototypes.map(pt => this.applyQualityAndBlur(pt, quality));
    let combined = this.combinePrototypes(prototypes);

    return new Component(combined);
  }

  static combinePrototypes(prototypes) {
    let combined = {};

    prototypes.forEach(pt => {
      Object.keys(pt).forEach(k => {
        let value = combined[k] || 0;
        combined[k] = value + pt[k];
      });
    });

    return combined;
  }

  //Multiplies prototype by quality factor
  //Also applies a gaussian blur such that doubling, or halving the value occurs 3 stds outside the mean
  static applyQualityAndBlur(pt, quality) {
    let blurred = {};

    Object.keys(pt).forEach(k => {
      let value = pt[k];
      blurred[k] = Math.round(quality * randomGaussian(value, value / 3));
    });

    return blurred;
  }

  static getRandomPrototype() {
    return ITEM_PROTOTYPES[Math.floor(random(ITEM_PROTOTYPES.length))]
  }

  static rollPrototypes() {
    let prototypes = [];

    for(let i = 0; i < this.rollNumPrototypes(); i++) {
      prototypes.push(this.getRandomPrototype());
    }

    return prototypes;
  }

  //Calculates how many of the above prototypes get combined into the component
  //Minimum of 1, but has a gaussian distribution of accumulating more
  static rollNumPrototypes() {
    return Math.max(1, Math.floor(randomGaussian(1)));
  }
}

export default Component;
