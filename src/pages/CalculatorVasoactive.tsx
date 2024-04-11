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

      <View style={styles.main}>
        <Text style={styles.text}>NORADRENALINA SIMPLES</Text>
        <Text>0,01 - 3,3 µg/kg/min</Text>
        <Text>Noradrenalina (4 mg/4mL) 4 mL + 96 mL SG 5% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.noradrenaline(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>NORADRENALINA CONCENTRADA</Text>
        <Text>0,01 - 3,3 µg/kg/min</Text>
        <Text>Noradrenalina (4 mg/4mL) 20 mL + 80 mL SG 5% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.concentratedNoradr(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>ADRENALINA</Text>
        <Text>0,1 - 2 µg/kg/min</Text>
        <Text>Adrenalina (1 mg/mL) 10 mL + 90 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.adrenaline(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>VASOPRESSINA</Text>
        <Text>0,01 - 0,04 UI/min</Text>
        <Text>Vasopressina (20 UI/mL) 2 mL + 98 mL SG 5% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.vasopressin(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>DOBUTAMINA</Text>
        <Text>2 - 20 µg/kg/min</Text>
        <Text>Dobutamina (250 mg/20mL) 60 mL + 190 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.dobutamine(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>MILRINONA</Text>
        <Text>0,375 - 0,75 µg/kg/min</Text>
        <Text>Milrinona (1 mg/mL) 20 mL + 80 mL SG 5% EV, BI</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.milrinone(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>LEVOSIMENDANA</Text>
        <Text>0,05 - 0,2 µg/kg/min</Text>
        <Text>Levosimendana (2,5 mg/mL) 5 mL + 495 mL SG 5% EV, BI</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.levosimendan(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>DOPAMINA dose dopa</Text>
        <Text>1 - 5 µg/kg/min</Text>
        <Text>Dopamina (50 mg/10mL) 50 mL + 200 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.dopaminDopa(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>DOPAMINA dose beta</Text>
        <Text>5 - 15 µg/kg/min</Text>
        <Text>Dopamina (50 mg/10mL) 50 mL + 200 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.dopaminBeta(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>DOPAMINA dose alfa</Text>
        <Text>15 - 50 µg/kg/min</Text>
        <Text>Dopamina (50 mg/10mL) 100 mL + 150 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.dopaminAlpha(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>NITROPRUSSIATO DE SÓDIO</Text>
        <Text>0,1 - 10 µg/kg/min</Text>
        <Text>Nitroprussiato de Sódio (50 mg/2mL) 2 mL + 248 mL SG 5% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.sodiumNitroprussiade(value)} mL/h
          </Text>
        )}
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>NITROGLICERINA</Text>
        <Text>5 - 100 µg/min</Text>
        <Text>Nitroglicerina (5 mg/mL) 10 mL + 240 mL SF 0,9% EV</Text>
        {value && (
          <Text style={styles.result}>
            {ContinuousInfusion.nitroglycerine(value)} mL/h
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
