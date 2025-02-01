import IncomeTax from "./incomeTax.ts";

export default class NewTax2025Regime extends IncomeTax {
    constructor() {
      super(
        75000, // standardDeduction
        1200000, // initialRelief
        [
          { upto: 400000, percent: 0 },
          { upto: 800000, percent: 5 },
          { upto: 1200000, percent: 10 },
          { upto: 1600000, percent: 15 },
          { upto: 2000000, percent: 20 },
          { upto: 2400000, percent: 25 },
          { upto: Infinity, percent: 30 }
        ], // arrayOfTaxSlabs
        [
          { threshold: 5000000, percent: 10 },
          { threshold: 10000000, percent: 15 },
          { threshold: 20000000, percent: 25 },
          { threshold: 50000000, percent: 37 }
        ], // arrayOfSurcharges
        4 // cess percentage
      );
    }
  }