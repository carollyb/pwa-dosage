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

  static noradrenaline(weight: number): string {
    const concentration = 40; // 40 mcg/mL
    const minDose = 0.01;
    const maxDose = 1.5;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static concentratedNoradr(weight: number): string {
    const concentration = 200; // 200 mcg/mL
    const minDose = 0.01;
    const maxDose = 3.3;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static adrenaline(weight: number): string {
    const concentration = 100; // 100 mcg/mL
    const minDose = 0.1;
    const maxDose = 2;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static vasopressin(weight: number): string {
    const concentration = 0.4;
    const minDose = 0.01;
    const maxDose = 0.04;
    const decimalPrecision = 3;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      1,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static dobutamine(weight: number): string {
    const concentration = 3000;
    const minDose = 2;
    const maxDose = 20;
    const decimalPrecision = 1;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static milrinone(weight: number): string {
    const concentration = 200;
    const minDose = 0.375;
    const maxDose = 0.75;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static levosimendan(weight: number): string {
    const concentration = 25;
    const minDose = 0.05;
    const maxDose = 0.2;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static dopaminDopa(weight: number): string {
    const concentration = 1000;
    const minDose = 1;
    const maxDose = 5;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static dopaminBeta(weight: number): string {
    const concentration = 1000;
    const minDose = 5;
    const maxDose = 15;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static dopaminAlpha(weight: number): string {
    const concentration = 2000;
    const minDose = 15;
    const maxDose = 50;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static sodiumNitroprussiade(weight: number): string {
    const concentration = 200;
    const minDose = 0.1;
    const maxDose = 10;
    const decimalPrecision = 2;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      weight,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }

  static nitroglycerine(weight: number): string {
    const concentration = 200;
    const minDose = 5;
    const maxDose = 100;
    const decimalPrecision = 1;
    const infusionTime = 60;

    const initialDose = minDose + (maxDose - minDose) / 2;
    const initialFlowRate = this.initialFlow(
      1,
      initialDose,
      infusionTime,
      concentration
    );
    return initialFlowRate.toFixed(decimalPrecision);
  }
}
