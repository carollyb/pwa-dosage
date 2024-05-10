import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/Main";
import CalculatorIntubation from "./pages/CalculatorIntubation";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorVasoactive from "./pages/CalculatorVasoactive";
import CalculatorHypernatremia from "./pages/CalculatorHypernatremia";
import CalculatorHyponatremia from "./pages/CalculatorHyponatremia";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Calculadoras",
          }}
        />
        <Stack.Screen
          name="CalculatorIntubation"
          component={CalculatorIntubation}
          options={{
            title: "Intubação Orotraqueal",
          }}
        />
        <Stack.Screen
          name="CalculatorVasoactive"
          component={CalculatorVasoactive}
          options={{
            title: "Drogas Vasoativas",
          }}
        />
        <Stack.Screen
          name="CalculatorHyponatremia"
          component={CalculatorHyponatremia}
          options={{
            title: "Hiponatremia",
          }}
        />
        <Stack.Screen
          name="CalculatorHypernatremia"
          component={CalculatorHypernatremia}
          options={{
            title: "Hipernatremia",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
