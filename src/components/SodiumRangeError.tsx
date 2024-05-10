import { View, Text, StyleSheet } from "react-native";

function SodiumRangeError() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        Valores de referência para o sódio desejado: de 135 a 145 mEq/L
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#E8E8E8",
    padding: 20,
    borderRadius: 14,
    gap: 16,
    margin: 16,
  },
  text: {
    fontSize: 18,
    color: "#506D71",
    fontWeight: "bold",
  },
});

export default SodiumRangeError;
