type THypernametremiaInput = {
  weight: string;
  sodium: string;
  sex: string;
};

type THypernametremiaOutput = {
  water: number;
  salineSolution: number;
  salineSolution2: number;
};

export default function getResults({
  weight,
  sodium,
  sex,
}: THypernametremiaInput): THypernametremiaOutput {
  const CONCENTRATION_SG5 = 0;
  const CONCENTRATION_SG045 = 77;
  const CONCENTRATION_SG0225 = 38;
  const MAX_ELEVATION = 8;
  let water = sex === "Homem" ? 0.6 : 0.5;

  const variationWater = calculateVariation(
    CONCENTRATION_SG5,
    Number(sodium),
    water,
    Number(weight)
  );

  const variationSS = calculateVariation(
    CONCENTRATION_SG045,
    Number(sodium),
    water,
    Number(weight)
  );

  const variationSS2 = calculateVariation(
    CONCENTRATION_SG0225,
    Number(sodium),
    water,
    Number(weight)
  );

  return {
    water: calculateVolume(MAX_ELEVATION, variationWater),
    salineSolution: calculateVolume(MAX_ELEVATION, variationSS),
    salineSolution2: calculateVolume(MAX_ELEVATION, variationSS2),
  };
}

function calculateVariation(
  concentration: number,
  sodium: number,
  water: number,
  weight: number
) {
  return (concentration - Number(sodium)) / (water * Number(weight) + 1);
}

function calculateVolume(elevation: number, variation: number) {
  const volumeWater = (elevation * 1000) / Number(variation.toFixed(1));
  return Math.round(volumeWater) * -1;
}
