import { Dispatch, SetStateAction } from "react";
import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type DropdownProps = {
  setValue: Dispatch<SetStateAction<number | null>>;
};

const weight = Array.from({ length: 101 }, (value, index) => index + 40);

function DropdownWeight({ setValue }: DropdownProps) {
  return (
    <SelectDropdown
      defaultButtonText={"Selecione o peso (kg)"}
      data={weight}
      onSelect={(selectedItem, index) => {
        setValue(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return `${selectedItem} kg`;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      dropdownStyle={styles.dropdown}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: "50%",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
  },
});

export default DropdownWeight;
