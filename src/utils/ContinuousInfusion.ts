export class ContinuousInfusion {
  constructor() {}

  private static initialFlow(
    dose: number,
    weight: number,
    infusionTime: number,
    concentration: number
  ): number {
    return weight * dose * (infusionTime / concentration);
  }

  static calculate({
    weight,
    minDose,
    maxDose,
    decimalPrecision,
    infusionTime,
    concentration,
    standard,
    dose,
  }: InfusionInput): string {
    if (standard) {
      weight = 1;
    }
    const initialFlowRate = this.initialFlow(
      weight,
      dose ? dose : minDose + (maxDose - minDose) / 2,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }
}
