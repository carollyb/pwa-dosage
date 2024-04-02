import { ReactNode } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import DoseCalculator from "../utils/DoseCalculator";

type CardProps = {
  title: string;
  medicine: string;
  value: number | null;
};

function Card({ title, medicine, value }: CardProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      {value ? (
        <Text style={styles.result}>
          {DoseCalculator({ medicine: medicine, value: value })} mL
        </Text>
      ) : (
        <Text>--</Text>
      )}
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
    gap: 8,
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

export default Card;
