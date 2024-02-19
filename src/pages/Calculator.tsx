import { useState } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const weight = Array.from({ length: 101 }, (value, index) => index + 40);

function Calculator() {
  const [value, setValue] = useState<number>(1);
  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.title}>Drogas Vasoativas em Infusão Contínua</Text>
        <SelectDropdown
          defaultButtonText={"Selecione o peso (kg)"}
          data={weight}
          onSelect={(selectedItem, index) => {
            setValue(selectedItem);
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>NORADRENALINA SIMPLES</Text>
        {value && <Text style={styles.text}>{value}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
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
});

export default Calculator;
