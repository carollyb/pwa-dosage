import { useState } from "react";
import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";
import { ContinuousInfusion } from "../utils/ContinuousInfusion";
import DropdownWeight from "../components/DropdownWeight";

function CalculatorVasoactive() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Drogas Vasoativas</Text>
        <DropdownWeight setValue={setValue} />
      </View>

      <View style={styles.intro}>
        <Text style={styles.text}>NORADRENALINA SIMPLES</Text>
        <Text>0,01 - 3,3 µg/kg/min</Text>
        <Text>Noradrenalina (4 mg/4mL) 4 mL + 96 mL SG 5% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.noradrenaline(value)} mL/h
          </Text>
        )}
      </View>
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
