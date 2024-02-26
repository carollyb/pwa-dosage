import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/Main";
import Calculator from "./pages/Calculator";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
          name="Indicações Clínicas"
          component={Main}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="plus" size={20} color={color} />
            ),
          }}
          name="Calculadora"
          component={Calculator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
