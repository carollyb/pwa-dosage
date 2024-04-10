export class ContinuousInfusion {
  constructor() {}

  static noradrenaline(weight: number): string {
    const concentration = 40; // 40 mcg/mL
    const minDose = 0.01;
    const maxDose = 1.5;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate =
      weight * initialDose * (infusionTime / concentration);
    return initialFlowRate.toFixed(decimalPrecision);
  }
}
