import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import FoundationIcon from "react-native-vector-icons/Foundation";

const Type_8 = ({ data }) => {

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
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
    fontSize: 26,
    fontFamily: "Calibri",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Type_8;
