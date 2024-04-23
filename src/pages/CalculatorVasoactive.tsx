import { useState } from "react";
import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";
import { ContinuousInfusion } from "../utils/ContinuousInfusion";
import DropdownWeight from "../components/DropdownWeight";

const VasoactiveDrugs = [
  {
    title: "NORADRENALINA SIMPLES",
    dosage: "0,01 - 3,3 µg/kg/min",
    subtitle: "Noradrenalina (4 mg/4mL) 4 mL + 96 mL SG 5% EV",
    concentration: 40,
    minDose: 0.01,
    maxDose: 1.5,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "NORADRENALINA CONCENTRADA",
    dosage: "0,01 - 3,3 µg/kg/min",
    subtitle: "Noradrenalina (4 mg/4mL) 20 mL + 80 mL SG 5% EV",
    concentration: 200,
    minDose: 0.01,
    maxDose: 3.3,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "ADRENALINA",
    dosage: "0,1 - 2 µg/kg/min",
    subtitle: "Adrenalina (1 mg/mL) 10 mL + 90 mL SF 0,9% EV",
    concentration: 100,
    minDose: 0.1,
    maxDose: 2,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "VASOPRESSINA",
    dosage: "0,01 - 0,04 UI/min",
    subtitle: "Vasopressina (20 UI/mL) 2 mL + 98 mL SG 5% EV",
    concentration: 0.4,
    minDose: 0.01,
    maxDose: 0.04,
    decimalPrecision: 3,
    infusionTime: 60,
    standard: true,
  },
  {
    title: "DOBUTAMINA",
    dosage: "2 - 20 µg/kg/min",
    subtitle: "Dobutamina (250 mg/20mL) 60 mL + 190 mL SF 0,9% EV",
    concentration: 3000,
    minDose: 2,
    maxDose: 20,
    decimalPrecision: 1,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "MILRINONA",
    dosage: "0,375 - 0,75 µg/kg/min",
    subtitle: "Milrinona (1 mg/mL) 20 mL + 80 mL SG 5% EV, BI",
    concentration: 200,
    minDose: 0.375,
    maxDose: 0.75,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "LEVOSIMENDANA",
    dosage: "0,05 - 0,2 µg/kg/min",
    subtitle: "Levosimendana (2,5 mg/mL) 5 mL + 495 mL SG 5% EV, BI",
    concentration: 25,
    minDose: 0.05,
    maxDose: 0.2,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "DOPAMINA dose dopa",
    dosage: "1 - 5 µg/kg/min",
    subtitle: "Dopamina (50 mg/10mL) 50 mL + 200 mL SF 0,9% EV",
    concentration: 1000,
    minDose: 1,
    maxDose: 5,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "DOPAMINA dose beta",
    dosage: "5 - 15 µg/kg/min",
    subtitle: "Dopamina (50 mg/10mL) 50 mL + 200 mL SF 0,9% EV",
    concentration: 1000,
    minDose: 5,
    maxDose: 15,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "DOPAMINA dose alfa",
    dosage: "15 - 50 µg/kg/min",
    subtitle: "Dopamina (50 mg/10mL) 100 mL + 150 mL SF 0,9% EV",
    concentration: 2000,
    minDose: 15,
    maxDose: 50,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "NITROPRUSSIATO DE SÓDIO",
    dosage: "0,1 - 10 µg/kg/min",
    subtitle: "Nitroprussiato de Sódio (50 mg/2mL) 2 mL + 248 mL SG 5% EV",
    concentration: 200,
    minDose: 0.1,
    maxDose: 10,
    decimalPrecision: 2,
    infusionTime: 60,
    standard: false,
  },
  {
    title: "NITROGLICERINA",
    dosage: "5 - 100 µg/min",
    subtitle: "Nitroglicerina (5 mg/mL) 10 mL + 240 mL SF 0,9% EV",
    concentration: 200,
    minDose: 5,
    maxDose: 100,
    decimalPrecision: 1,
    infusionTime: 60,
    standard: true,
  },
];

function CalculatorVasoactive() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Drogas Vasoativas</Text>
        <DropdownWeight setValue={setValue} />
      </View>

      {VasoactiveDrugs.map((item, index) => (
        <View style={styles.main} key={index}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.dosage}</Text>
          <Text>{item.subtitle}</Text>
          {value && (
            <Text style={styles.result}>
              {ContinuousInfusion.calculate({
                weight: value,
                concentration: item.concentration,
                minDose: item.minDose,
                maxDose: item.maxDose,
                decimalPrecision: item.decimalPrecision,
                infusionTime: item.infusionTime,
                standard: item.standard,
              })}{" "}
              mL/h
            </Text>
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

export default CalculatorVasoactive;
