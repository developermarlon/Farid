import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch, ButtonGroup } from "react-native-elements";
import "moment/locale/es";

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
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let buttonsList = [];
    data.data.map((item, key) => {
      buttonsList.push(item.title);
    });
    setListData(buttonsList);
  }, []);

  const onSelectedIndex = (index) => {
    onSetDataField({
      idForm: data.idForm,
      key: data.key,
      value: index
    })
  }

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <ButtonGroup
        onPress={onSelectedIndex}
        selectedIndex={formStatus?.[data.idForm]?.[data.key] ? formStatus?.[data.idForm]?.[data.key] : 0}
        buttons={listData}
        // containerStyle={{ height: 50 }}
        vertical
      />
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
    fontWeight: 'bold'
  },
  gpElementItem: {
    height: 60,
    minHeight: 60,
    // borderRadius: 5,
    // borderColor: "rgba(0,0,0,1)",
    // borderWidth: 1,
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
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "center",
    flex: 1,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
