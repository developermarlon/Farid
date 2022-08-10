import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import { connect } from 'react-redux';

import {
  setDataField
} from '../../redux/actions/formAction';

const mapStateToProps = state => {
  return {
    formStatus: state.formReducer,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSetDataField: data => {
      dispatch(setDataField(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(({ data, formStatus, onSetDataField }) => {

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={styles.gpElementGroup}>
        {data.data.map((item, id) => (
          <View key={id} style={styles.gpElementItemField}>
            <TextInput
              placeholder={item.placeHolder}
              keyboardType="default"
              // value={item.value}
              // onChangeText={(text) => {
              //   item.value = item.value + text;
              // }}
              style={styles.txtGpElementItemField}
            />
            {id + 2 <= data.data.length && (
              <Text style={styles.separator}>,</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
});

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
  },
  gpElementGroup: {
    height: 60,
    minHeight: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    marginTop: 5,
    flexDirection: "row",
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
