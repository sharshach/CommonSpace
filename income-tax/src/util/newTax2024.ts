import IncomeTax from "./incomeTax.ts";

export default class NewTax2024Regime extends IncomeTax {
  constructor() {
    super(
      75000, // standardDeduction
      700000, // initialRelief
      [
        { upto: 300000, percent: 0 },
        { upto: 700000, percent: 5 },
        { upto: 1000000, percent: 10 },
        { upto: 1200000, percent: 15 },
        { upto: 1500000, percent: 20 },
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