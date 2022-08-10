import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import MultiSelect from 'react-native-multiple-select';

import res from "res/R";

const Type_14 = ({ data }) => {

  const [selectedItems, setSelectedItems] = useState([]);

  onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={[styles.gpElementGroup, data.styleContainer]}>
        <MultiSelect
          hideTags={data.hideTags || false}
          items={data.data}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Elegir elementos"
          searchInputPlaceholderText={data.single ? 'Buscar elemento...' : "Buscar elementos..."}
          onChangeInput={(text) => console.log(text)}
          altFontFamily="Calibri Light"
          tagRemoveIconColor={res.colors.inValid}
          tagBorderColor={res.colors.simpleBorderColor}
          tagTextColor={res.colors.simpleColor}
          selectedItemTextColor={res.colors.valid}
          selectedItemIconColor={res.colors.valid}
          itemTextColor={res.colors.simpleColor}
          displayKey="title"
          searchInputStyle={{ color: res.colors.simpleColor  }}
          submitButtonColor={res.colors.valid}
          submitButtonText="Confirmar"
          single={data.single || false}
        />
        <View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gpElement: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: 'bold'
  },
  gpElementGroup: {
    minHeight: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20
    // flexDirection: "row",
  },
  icGpElementItem: {
    color: "#000000",
    fontSize: 25,
    marginRight: 18,
    alignSelf: "center",
  },
  gpElementItemField: {
    flex: 1,
    flexDirection: "row",
  },
  txtGpElementItemField: {
    height: 40,
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "center",
    flex: 1,

    alignSelf: "center",
    fontWeight: "bold",
  },
  separator: {
    color: "#121212",
    fontSize: 20,
    fontFamily: res.fonts.value,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Type_14;
