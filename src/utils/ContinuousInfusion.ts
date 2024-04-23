export class ContinuousInfusion {
  constructor() {}

  private static initialFlow(
    initialDose: number,
    weight: number,
    infusionTime: number,
    concentration: number
  ): number {
    return weight * initialDose * (infusionTime / concentration);
  }

  static calculate({
    weight,
    minDose,
    maxDose,
    decimalPrecision,
    infusionTime,
    concentration,
    standard,
  }: InfusionInput): string {
    const initialDose = minDose + (maxDose - minDose) / 2;
    if (standard) {
      weight = 1;
    }
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }
}
