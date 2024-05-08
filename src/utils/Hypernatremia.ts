type THypernametremiaInput = {
  weight: string;
  sodium: string;
  sex: string;
};

type THypernametremiaOutput = {
  water: number;
};

export default function getResults({
  weight,
  sodium,
  sex,
}: THypernametremiaInput): THypernametremiaOutput {
  const CONCENTRATION_SG5 = 0;
  const MAX_ELEVATION = 8;
  let water = sex === "Homem" ? 0.6 : 0.5;

  const variation =
    (CONCENTRATION_SG5 - Number(sodium)) / (water * Number(weight) + 1);

  const volume = (MAX_ELEVATION * 1000) / Number(variation.toFixed(1));
  const finalVolume = Math.round(volume) * -1;
  return {
    water: finalVolume,
  };
}
