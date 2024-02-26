import { useState } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Card from "../components/Card";

const weight = Array.from({ length: 101 }, (value, index) => index + 40);

function Calculator() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          Intubação Orotraqueal - Sequência Rápida
        </Text>
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
        <Text>1. PRÉ-MEDICAÇÃO</Text>
        <Text>Lidocaína reduz a incidência de laringoespasmo</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Lidocaína 2% (20 mg/mL) </Text>
        {value ? (
          <Text style={styles.result}>{((value * 1.5) / 20).toFixed(1)}</Text>
        ) : (
          <Text>--</Text>
        )}
        <Text style={styles.result}> mL</Text>
      </View>

      <Card
        title="Fentanil (50 mcg/mL)"
        medicine="fentanil"
        value={value}
      ></Card>

      <View style={styles.intro}>
        <Text>2. INDUÇÃO/SEDAÇÃO</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Cetamina (50 mg/mL) </Text>
        {value ? (
          <Text style={styles.result}>{((value * 2) / 50).toFixed(1)}</Text>
        ) : (
          <Text>--</Text>
        )}
        <Text style={styles.result}> mL</Text>
      </View>
    </View>
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

export default Calculator;
