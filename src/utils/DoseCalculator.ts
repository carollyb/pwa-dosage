type TDoseCalculatorInput = {
  medicine: string;
  value: number;
};

const CalculusBasis: {
  [key: string]: { multiplier: number; divisor: number };
} = {
  lidocaina: {
    multiplier: 1.5,
    divisor: 20,
  },
  fentanil: {
    multiplier: 2,
    divisor: 50,
  },
  cetamina: {
    multiplier: 2,
    divisor: 50,
  },
};

export default function DoseCalculator({
  medicine,
  value,
}: TDoseCalculatorInput): string {
  let multiplier = CalculusBasis[medicine].multiplier;
  let divisor = CalculusBasis[medicine].divisor;

  return ((value * multiplier) / divisor).toFixed(1);
}
