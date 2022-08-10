import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import res from "res/R";

const Form = (props) => {
  return (
    <TouchableOpacity
      key={props.data.idForm}
      style={[styles.container]}
      onPress={() => {
        props.navigation.navigate("FormExecute", { data: props.data });
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={styles.lblTitulo}>{props.data.name}</Text>
        <Text style={styles.lblDescription}>{props.data.description}</Text>
      </View>

      <View style={styles.gpInfo}>
        {props.data.info.map((item, id) => (
          <View style={styles.gpInfoItem} key={id}>
            <Text style={styles.lblInfoLabel}>{item.title}</Text>
            <Text style={styles.lblInfoValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.gpAction}>
        <TouchableOpacity
          style={[res.palette.btnConfirm]}
          onPress={() =>
            props.navigation.navigate("FormExecute", { data: props.data })
          }
        >
          <Text style={res.palette.btnDangerText}>GENERAR</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: res.colors.backgroundColor,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: res.colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  lblTitulo: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 40,
    fontWeight: "bold",
  },
  lblDescription: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 5,
  },
  gpInfo: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 30,
  },
  gpInfoItem: {
    flex: 1,
  },
  lblInfoLabel: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.green,
    fontSize: 14,
  },
  lblInfoValue: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.darkText,
    fontSize: 12,
    fontWeight: "bold",
  },
  gpAction: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 10,
  },
});

export default Form;
