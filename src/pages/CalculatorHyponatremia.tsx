import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import getResults from "../utils/Hyponatremia";

function CalculatorHyponatremia() {
  const [result, setResult] = useState<{ [key: string]: number } | null>(null);
  const [data, setData] = useState<{ [key: string]: string } | null>(null);

  const DATA = [
    {
      id: "1",
      info: "weight",
      title: "Peso",
    },
    {
      id: "2",
      info: "weight",
      title: "kg",
    },
    {
      id: "3",
      info: "currentSodium",
      title: "Sódio atual",
    },
    {
      id: "4",
      info: "currentSodium",
      title: "mEq/L",
    },
    {
      id: "5",
      info: "desiredSodium",
      title: "Sódio desejado",
    },
    {
      id: "6",
      info: "desiredSodium",
      title: "mEq/L",
    },
    {
      id: "7",
      info: "sex",
      title: "Sexo",
    },
    {
      id: "8",
      info: "sex",
      title: "Selecione",
    },
    {
      id: "9",
      info: "button",
      title: "Calcular",
    },
  ];
  interface DataItem {
    id: string;
    info: string;
    title: string;
  }
  const Item = ({ item, index }: { item: DataItem; index: number }) => {
    if (index % 2 === 0) {
      if (index === 8) {
        return (
          <View style={styles.cell3}>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (data) {
                  const results = getResults({
                    weight: data.weight,
                    currentSodium: data.currentSodium,
                    desiredSodium: data.desiredSodium,
                    sex: data.sex,
                  });
                  setResult(results);
                }
              }}
            >
              <Text style={styles.pressable}>{item.title}</Text>
            </Pressable>
          </View>
        );
      } else {
        return (
          <View style={styles.cell2}>
            <Text>{item.title}</Text>
          </View>
        );
      }
    } else {
      if (index === 7) {
        return (
          <View style={styles.cell}>
            <SelectDropdown
              defaultButtonText={item.title}
              data={["Mulher", "Homem"]}
              onSelect={(selectedItem) => {
                setData({
                  ...data,
                  [item.info]: selectedItem,
                });
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return `${selectedItem}`;
              }}
              rowTextForSelection={(item) => {
                return item;
              }}
              buttonStyle={styles.dropdownButton}
              dropdownStyle={styles.dropdown}
              buttonTextStyle={styles.textDropdown}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.cell}>
            <TextInput
              style={styles.input}
              onChangeText={(e) =>
                setData({
                  ...data,
                  [item.info]: e,
                })
              }
              placeholder={item.title}
              keyboardType="numeric"
            />
          </View>
        );
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          Calculadora para reposição venosa de Na+ nas primeiras 24 horas
        </Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.flatlist}
          scrollEnabled={true}
        />
      </View>

      {result && (
        <View style={styles.main}>
          <Text style={styles.textResult}>Déficit de Na+:</Text>
          <View style={styles.resultBox}>
            <Text
              style={styles.result}
            >{`${result["sodiumDeficiency"]} mEq`}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
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
  card: {
    alignItems: "center",
    paddingTop: 16,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  cell2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 8,
  },
  cell3: {
    flex: 2,
    justifyContent: "center",
  },
  textDropdown: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 0,
  },
  dropdownButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B4B4B4",
  },
  dropdown: {
    width: "50%",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
  },
  flatlist: {
    width: "50%",
  },
  flatlistItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  title: {
    padding: 20,
    fontFamily: "Inter_500Medium",
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#506D71",
    fontWeight: "bold",
  },
  resultBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B845E",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderColor: "#B4B4B4",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#506D71",
    borderRadius: 20,
    marginTop: 16,
  },
  pressable: {
    fontFamily: "Inter_500Medium",
    fontSize: 24,
    textAlign: "center",
    color: "#E8E8E8",
  },
  textResult: {
    fontFamily: "Inter_400Regular",
  },
});

export default CalculatorHyponatremia;
