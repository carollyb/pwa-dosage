type THyponametremiaInput = {
  weight: string;
  currentSodium: string;
  desiredSodium: string;
  sex: string;
};
type THyponametremiaOutput = {
  sodiumDeficiency: number;
};

export default function getResults({
  weight,
  currentSodium,
  desiredSodium,
  sex,
}: THyponametremiaInput): THyponametremiaOutput {
  let water = sex === "Homem" ? 0.6 : 0.5;
  return {
    sodiumDeficiency:
      water * Number(weight) * (Number(desiredSodium) - Number(currentSodium)),
  };
}
