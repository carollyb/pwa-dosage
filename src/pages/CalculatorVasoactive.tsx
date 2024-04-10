import { useState } from "react";
import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { ContinuousInfusion } from "../utils/ContinuousInfusion";

const weight = Array.from({ length: 101 }, (value, index) => index + 40);

function CalculatorVasoactive() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Drogas Vasoativas</Text>
        <SelectDropdown
          defaultButtonText={"Selecione o peso (kg)"}
          data={weight}
          onSelect={(selectedItem, index) => {
            setValue(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return `${selectedItem} kg`;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
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
