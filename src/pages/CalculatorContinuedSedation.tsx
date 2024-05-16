import { useState } from "react";
import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";
import { ContinuousInfusion } from "../utils/ContinuousInfusion";
import DropdownWeight from "../components/DropdownWeight";
import Slider from "@react-native-community/slider";

const ContinuedSedation = [
  {
    name: "fentanyl",
    title: "FENTANIL",
    dosage: "0,3 - 3 µg/kg/h",
    subtitle: "Fentanil (50 µg/mL) 50 mL + 50 mL SF 0,9% EV",
    concentration: 40,
    minDose: 0.01,
    maxDose: 1.5,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
];

function CalculatorContinuedSedation() {
  const [weight, setWeight] = useState<number | null>(null);
  const [dose, setDose] = useState<{ [key: string]: number } | null>(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sedação Contínua</Text>
        <DropdownWeight setValue={setWeight} />
      </View>

      {ContinuedSedation.map((item, index) => (
        <View style={styles.main} key={index}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.dosage}</Text>
          <Text>{item.subtitle}</Text>
          {weight && (
            <>
              <Slider
                value={item.minDose + (item.maxDose - item.minDose) / 2}
                style={{ width: "100%", height: 40 }}
                minimumValue={item.minDose}
                maximumValue={item.maxDose}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#FFFFFF"
                onValueChange={(e) =>
                  setDose({
                    ...dose,
                    [item.name]: e,
                  })
                }
              />
              <Text style={styles.result}>
                {ContinuousInfusion.calculate({
                  weight,
                  concentration: item.concentration,
                  minDose: item.minDose,
                  maxDose: item.maxDose,
                  decimalPrecision: item.decimalPrecision,
                  infusionTime: item.infusionTime,
                  standard: item.standard,
                  dose: dose ? dose[item.name] : 0,
                })}{" "}
                mL/h
              </Text>
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  main: {
    backgroundColor: "#E8E8E8",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 14,
    gap: 8,
  },
  intro: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8E8E8",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 14,
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    color: "#506D71",
    fontWeight: "bold",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B845E",
  },
});

export default CalculatorContinuedSedation;
