import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

type RootStackParamList = {
  Main: undefined;
  CalculatorIntubation: undefined;
  CalculatorVasoactive: undefined;
  CalculatorHyponatremia: undefined;
  CalculatorHypernatremia: undefined;
  CalculatorContinuedSedation: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

function Main({ navigation }: Props) {
  return (
    <ScrollView>
      <Pressable
        style={styles.main}
        onPress={() => navigation.navigate("CalculatorIntubation")}
      >
        <Text style={styles.pressable}>
          Intubação Orotraqueal (sequência rápida)
        </Text>
      </Pressable>

      <Pressable
        style={styles.main}
        onPress={() => navigation.navigate("CalculatorVasoactive")}
      >
        <Text style={styles.pressable}>Drogas Vasoativas</Text>
      </Pressable>

      <Pressable
        style={styles.main}
        onPress={() => navigation.navigate("CalculatorHyponatremia")}
      >
        <Text style={styles.pressable}>Hiponatremia</Text>
      </Pressable>

      <Pressable
        style={styles.main}
        onPress={() => navigation.navigate("CalculatorHypernatremia")}
      >
        <Text style={styles.pressable}>Hipernatremia</Text>
      </Pressable>

      <Pressable
        style={styles.main}
        onPress={() => navigation.navigate("CalculatorContinuedSedation")}
      >
        <Text style={styles.pressable}>Sedação Contínua</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  main: {
    backgroundColor: "#506D71",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 14,
    gap: 8,
  },
  pressable: {
    fontFamily: "Inter_500Medium",
    fontSize: 24,
    color: "#E8E8E8",
  },
});
export default Main;
