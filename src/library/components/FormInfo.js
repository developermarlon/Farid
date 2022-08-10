import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { LinearProgress } from "react-native-elements";

import res from "res/R";

const FormInfo = (props) => {
  const [percentage, setPercentage] = useState(60);
  return (
    <View key={props.data.id} style={styles.container}>
      <View style={{ marginHorizontal: 40, marginTop: 30 }}>
        <Text style={[res.palette.titleH3, { marginBottom: 20 }]}>
          Tu Progreso
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Text style={[styles.lblPercentage, { textAlign: "left" }]}>0%</Text>
          <Text
            style={[
              styles.lblPercentage,
              { textAlign: "center", color: res.colors.yellow },
            ]}
          >
            50%
          </Text>
          <Text
            style={[
              styles.lblPercentage,
              { textAlign: "right", color: res.colors.green },
            ]}
          >
            100%
          </Text>
        </View>
        <LinearProgress
          color={res.colors.green}
          trackColor={res.colors.red}
          value={percentage / 100}
          variant={"determinate"}
        />
      </View>
      <View style={styles.gpInfo}>
        {props.data.info.map((item, id) => (
          <View style={styles.gpInfoItem} key={id}>
            <Text style={styles.lblInfoLabel}>{item.title}</Text>
            <Text style={styles.lblInfoValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: res.colors.backgroundColor,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: res.colors.optionItemBackgroundSelect,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // position: "absolute",
    top: 10,
    right: 0,
    left: 0,
    paddingTop: 20,
    marginBottom: 20,
    paddingBottom: 40,
    marginHorizontal: 10,
    zIndex: 99,
  },
  gpInfo: {
    flex: 1,
    marginHorizontal: 30,
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
  lblPercentage: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.darkText,
    fontSize: 14,
    flex: 1,
  },
});

export default FormInfo;
