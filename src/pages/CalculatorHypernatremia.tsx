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
import getResults from "../utils/Hypernatremia";
import SodiumRangeError from "../components/SodiumRangeError";
import { MAX_REF_SODIUM, MIN_REF_SODIUM } from "../utils/consts";

function CalculatorHypernatremia() {
  const [result, setResult] = useState<{ [key: string]: number } | null>(null);
  const [data, setData] = useState<{ [key: string]: string } | null>(null);
  const [sodiumRangeError, setSodiumRangeError] = useState<boolean>(false);

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
      info: "sodium",
      title: "Sódio sérico",
    },
    {
      id: "4",
      info: "sodium",
      title: "mEq/L",
    },
    {
      id: "5",
      info: "sex",
      title: "Sexo",
    },
    {
      id: "6",
      info: "sex",
      title: "Selecione",
    },
    {
      id: "7",
      info: "button",
      title: "Calcular",
    },
  ];

  const handleSubmit = (data: any): void => {
    const { weight, sodium, sex } = data;

    if (weight === undefined) {
      return;
    }
    if (sodium === undefined) {
      return;
    }
    if (sex === undefined) {
      return;
    }
    if (sodium >= MIN_REF_SODIUM && sodium <= MAX_REF_SODIUM) {
      setSodiumRangeError(true);
      return;
    }
    const results = getResults({
      weight: data.weight,
      sodium: data.sodium,
      sex: data.sex,
    });
    setSodiumRangeError(false);
    setResult(results);
  };
  interface DataItem {
    id: string;
    info: string;
    title: string;
  }
  const Item = ({ item, index }: { item: DataItem; index: number }) => {
    if (index % 2 === 0) {
      if (index === 6) {
        return (
          <View style={styles.cell3}>
            <Pressable
              style={styles.button}
              onPress={() => {
                handleSubmit(data);
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
      if (index === 5) {
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
          Calculadora para manejo da HIPERNATREMIA nas primeiras 24 horas
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

      {result && !sodiumRangeError && (
        <>
          <View style={styles.main}>
            <Text style={styles.textResult}>
              Considerando que é seguro variar a [Na+]sérico em até 8 mEq/L em
              24 horas, o volume necessario para causar esta redução, por
              solução mais utilizada, é de:
            </Text>
            <View style={styles.resultBox}>
              <Text style={styles.result}>{`Água livre: ${result[
                "water"
              ].toLocaleString("pt-BR")} mL`}</Text>
              <Text style={styles.result}>{`Soro Glicosado 5%: ${result[
                "water"
              ].toLocaleString("pt-BR")} mL`}</Text>
              <Text style={styles.result}>{`Solução Salina 0,45%: ${result[
                "salineSolution"
              ].toLocaleString("pt-BR")} mL`}</Text>
              <Text style={styles.result}>{`Solução Salina 0,225%: ${result[
                "salineSolution2"
              ].toLocaleString("pt-BR")} mL`}</Text>
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.text}>Infusão em 24 horas</Text>

            <View style={styles.card}>
              <Text style={styles.textResult}>{`Soro Glicosado 5%`}</Text>
              <Text style={styles.result}>{`Soro Glicosado 5% EV ${result[
                "glucoseSolution"
              ].toLocaleString("pt-BR")} mL/h`}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.textResult}>{`Solução Salina 0,45%`}</Text>
              <Text
                style={styles.result}
              >{`250 mL SF 0,9% + 250 mL AD EV ${result[
                "salineSolutionFlow"
              ].toLocaleString("pt-BR")} mL/h`}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.textResult}>{`Solução Salina 0,225%`}</Text>
              <Text
                style={styles.result}
              >{`125 mL SF 0,9% + 375 mL AD EV ${result[
                "salineSolution2Flow"
              ].toLocaleString("pt-BR")} mL/h`}</Text>
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.text}>Considerações</Text>
            <Text style={styles.textResult}>
              - Solicitar Na+ sérico a cada 2 horas
            </Text>
            <Text style={styles.textResult}>
              - Preferir a via enteral, se disponível
            </Text>
          </View>
        </>
      )}

      {sodiumRangeError && <SodiumRangeError />}
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

export default CalculatorHypernatremia;
