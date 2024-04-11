import { useState } from "react";
import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import DropdownWeight from "../components/DropdownWeight";

function CalculatorIntubation() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          Intubação Orotraqueal - Sequência Rápida
        </Text>
        <DropdownWeight setValue={setValue} />
      </View>
      <View style={styles.intro}>
        <Text>1. PRÉ-MEDICAÇÃO</Text>
        <Text>Lidocaína reduz a incidência de laringoespasmo</Text>
      </View>

      <Card
        title="Lidocaína 2% (20 mg/mL)"
        medicine="lidocaina"
        value={value}
      ></Card>

      <Card
        title="Fentanil (50 mcg/mL)"
        medicine="fentanil"
        value={value}
      ></Card>

      <View style={styles.intro}>
        <Text>2. INDUÇÃO/SEDAÇÃO</Text>
      </View>

      <Card
        title="Cetamina (50 mg/mL)"
        medicine="cetamina"
        value={value}
      ></Card>
      <Card
        title="Etomidato (2 mg/mL)"
        medicine="etomidato"
        value={value}
      ></Card>
      <Card
        title="Midazolam (5 mg/mL)"
        medicine="midazolam"
        value={value}
      ></Card>
      <Card title="Propofol 1%" medicine="propofol_1" value={value}></Card>
      <Card title="Propofol 2%" medicine="propofol_2" value={value}></Card>

      <View style={styles.intro}>
        <Text>3. BLOQUEIO NEUROMUSCULAR</Text>
        <Text>Estão colocados em ordem de preferência</Text>
      </View>

      <Card
        title="Succinilcolina (FR 100 mg) => 1 FR + 10 mL AD"
        medicine="succinilcolina"
        value={value}
      ></Card>
      <Card
        title="Atracúrio (10 mg/mL) => 5 mL + 5 mL AD"
        medicine="atracurio"
        value={value}
      ></Card>
      <Card
        title="Rocurônio (10 mg/mL)"
        medicine="rocuronio"
        value={value}
      ></Card>
      <Card
        title="Cisatracúrio (2 mg/mL)"
        medicine="cisatracurio"
        value={value}
      ></Card>
      <Card
        title="Pancurônio (2 mg/mL)"
        medicine="pancuronio"
        value={value}
      ></Card>
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
});

export default CalculatorIntubation;
