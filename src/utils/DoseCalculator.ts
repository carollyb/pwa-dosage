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
  etomidato: {
    multiplier: 0.3,
    divisor: 2,
  },
  midazolam: {
    multiplier: 0.15,
    divisor: 5,
  },
  propofol_1: {
    multiplier: 1.5,
    divisor: 10,
  },
  propofol_2: {
    multiplier: 1.5,
    divisor: 20,
  },
  succinilcolina: {
    multiplier: 1,
    divisor: 10,
  },
  atracurio: {
    multiplier: 0.5,
    divisor: 5,
  },
  rocuronio: {
    multiplier: 1.2,
    divisor: 10,
  },
  cisatracurio: {
    multiplier: 0.2,
    divisor: 2,
  },
  pancuronio: {
    multiplier: 0.08,
    divisor: 2,
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
