import IncomeTax from "./incomeTax.ts";

export default class OldTaxRegime extends IncomeTax {
  constructor() {
    super(
      50000, // standardDeduction
      500000, // initialRelief
      [
        { upto: 250000, percent: 0 },
        { upto: 500000, percent: 5 },
        { upto: 1000000, percent: 20 },
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