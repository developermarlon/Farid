import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Type_3 from "./Type_3";

import res from "res/R";

const Type_13 = ({ data }) => {
  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={styles.gpElementGroup}>
        {data.data.map((item, id) => (
          <Type_3
            key={id}
              data={{
              title: item.title,
              placeHolder: item.placeHolder,
                data: item.data
              }}
            />
        ))}
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
    paddingBottom: 15
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

export default Type_13;
