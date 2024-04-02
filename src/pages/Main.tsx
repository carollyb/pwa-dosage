import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Pressable, Text } from "react-native";

type RootStackParamList = {
  Main: undefined;
  CalculatorIntubation: undefined;
  CalculatorVasoactive: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

function Main({ navigation }: Props) {
  return (
    <ScrollView>
      <Pressable onPress={() => navigation.navigate("CalculatorIntubation")}>
        <Text>Intubação Orotraqueal (sequência rápida)</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("CalculatorVasoactive")}>
        <Text>Drogas Vasoativas</Text>
      </Pressable>
    </ScrollView>
  );
}

export default Main;
