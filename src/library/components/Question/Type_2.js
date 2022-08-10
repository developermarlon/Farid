import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


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
          formStatus?.[data.idForm]?.[data.key] && String(formStatus[data.idForm][data.key]) !== "" && { borderColor: res.colors.valid },
        ]}
      >
        <TextInput
          placeholder={data.placeHolder}
          keyboardType="numeric"
          value={formStatus[data.idForm][data.key] ? String(formStatus?.[data.idForm]?.[data.key]) : data.data}
          onChangeText={(value) => onSetDataField({
            idForm: data.idForm,
            key: data.key,
            value
          })}
          style={[
            styles.txtGpElementItemField,
            formStatus?.[data.idForm]?.[data.key] && String(formStatus?.[data.idForm]?.[data.key]) !== "" && { borderColor: res.colors.valid },
          ]}
        />
        <MaterialCommunityIcons
          name="numeric"
          color={"red"}
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
    marginVertical: 15,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: "bold",
  },
  gpElementItem: {
    height: 60,
    minHeight: 60,
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
    height: 40,
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "justify",
    flex: 1,
    marginRight: 21,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
});