interface TaxSlab {
  upto: number;
  percent: number;
}

interface Surcharge {
  threshold: number;
  percent: number;
}

export default abstract class IncomeTax {
  protected standardDeduction: number;
  protected initialRelief: number;
  protected arrayOfTaxSlabs: TaxSlab[];
  protected arrayOfSurcharges: Surcharge[];
  protected cess: number;

  constructor(
    standardDeduction: number,
    initialRelief: number,
    arrayOfTaxSlabs: TaxSlab[],
    arrayOfSurcharges: Surcharge[],
    cess: number
  ) {
    this.standardDeduction = standardDeduction;
    this.initialRelief = initialRelief;
    this.arrayOfTaxSlabs = arrayOfTaxSlabs;
    this.arrayOfSurcharges = arrayOfSurcharges;
    this.cess = cess;
  }

  protected calculateBasicTax(taxableIncome: number): number {
    let tax = 0;
    let previousSlabLimit = 0;

    for (const slab of this.arrayOfTaxSlabs) {
      if (taxableIncome > slab.upto) {
        tax += (slab.upto - previousSlabLimit) * (slab.percent / 100);
        previousSlabLimit = slab.upto;
      } else {
        tax += (taxableIncome - previousSlabLimit) * (slab.percent / 100);
        break;
      }
    }

    return tax;
  }

  protected calculateSurcharge(tax: number, income: number): number {
    let surcharge = 0;
    for (const surchargeSlab of this.arrayOfSurcharges) {
      if (income > surchargeSlab.threshold) {
        surcharge += tax * (surchargeSlab.percent / 100);
      }
    }
    return surcharge;
  }

  protected calculateCess(tax: number): number {
    return tax * (this.cess / 100);
  }

  calculateTax(income: number): number {
    let taxableIncome = income - this.standardDeduction;
    if (taxableIncome <= this.initialRelief) return 0;

    let basicTax = this.calculateBasicTax(taxableIncome);
    let surcharge = this.calculateSurcharge(basicTax, income);
    let cess = this.calculateCess(basicTax + surcharge);

    return basicTax + surcharge + cess;
  }
}