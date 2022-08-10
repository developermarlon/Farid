import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import FoundationIcon from "react-native-vector-icons/Foundation";
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
      <View
        style={[
          styles.gpElementItem,
          formStatus?.[data.idForm]?.[data.key] && String(formStatus?.[data.idForm]?.[data.key]) !== "" && { borderColor: res.colors.valid },
        ]}
      >
        <TextInput
          multiline
          numberOfLines={3}
          placeholder={data.placeHolder}
          keyboardType="default"
          value={formStatus?.[data.idForm]?.[data.key] ? formStatus?.[data.idForm]?.[data.key] : null}
          onChangeText={(value) =>
            onSetDataField({
              idForm: data.idForm,
              key: data.key,
              value
            })
          }
          style={styles.txtGpElementItemField}
        />
        <FoundationIcon
          name="text-color"
          style={[
            styles.icGpElementItem,
            formStatus?.[data.idForm]?.[data.key] && String(formStatus?.[data.idForm]?.[data.key]) !== "" && { color: res.colors.valid },
          ]}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  gpElement: {
    marginHorizontal: 20,
    flex: 1,
    marginVertical: 15,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: 'bold'
  },
  gpElementItem: {
    minHeight: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 5,
  },
  icGpElementItem: {
    color: "#000000",
    fontSize: 25,
    marginRight: 18,
    alignSelf: "center",
  },
  txtGpElementItemField: {
    minHeight: 100,
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "justify",
    flex: 1,
    marginRight: 21,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
    lineHeight: 12,
  },
});
