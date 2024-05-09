type THyponametremiaInput = {
  weight: string;
  currentSodium: string;
  desiredSodium: string;
  sex: string;
};
type THyponametremiaOutput = {
  sodiumDeficiency: number;
  salineVolume: number;
  expectedVariation: number;
  maxSalineVolumeIn24h: number;
  flow: number;
};

export default function getResults({
  weight,
  currentSodium,
  desiredSodium,
  sex,
}: THyponametremiaInput): THyponametremiaOutput {
  const CONCENTRATION = 0.513;
  const CONCENTRATION_SS = 513;
  const MAX_ELEVATION = 8;

  let water = sex === "Homem" ? 0.6 : 0.5;
  const totalBodyWater = water * Number(weight);
  const sodiumDeficiency =
    totalBodyWater * (Number(desiredSodium) - Number(currentSodium));

  const salineVolume = Math.round(sodiumDeficiency / CONCENTRATION);

  const expectedVariation1Lin24h = expectedVariation1L(
    CONCENTRATION_SS,
    Number(currentSodium),
    totalBodyWater
  );

  const expectedVariation = (salineVolume * expectedVariation1Lin24h) / 1000;

  const volumeIn24H = (MAX_ELEVATION * 1000) / expectedVariation1Lin24h;

  const flow = volumeIn24H / 24;

  return {
    sodiumDeficiency,
    salineVolume,
    expectedVariation,
    maxSalineVolumeIn24h: volumeIn24H,
    flow,
  };
}

function expectedVariation1L(
  concentration: number,
  currentSodium: number,
  water: number
): number {
  return Number(((concentration - currentSodium) / (water + 1)).toFixed(1));
}
