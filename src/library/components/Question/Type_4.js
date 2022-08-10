import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import "moment/locale/es";

import res from "res/R";
moment.updateLocale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
});

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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    onSetDataField({
      idForm: data.idForm,
      key: data.key,
      value: date
    })
    hideDatePicker();
  };

  return (
    <TouchableOpacity
      style={styles.gpElement}
      onPress={() => {
        setDatePickerVisibility(true);
      }}
    >
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={styles.gpElementItem}>
        <Text
          style={styles.txtGpElementItemField}
        >
          {moment(formStatus?.[data.idForm]?.[data.key] ? new Date(formStatus?.[data.idForm]?.[data.key]) : new Date(moment())).format("MMMM D")} del {moment(formStatus?.[data.idForm]?.[data.key] ? formStatus?.[data.idForm]?.[data.key] : new Date(moment())).format("yyyy")}
        </Text>
        <FontistoIcon name="date" style={styles.icGpElementItem} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={formStatus?.[data.idForm]?.[data.key] ? new Date(formStatus?.[data.idForm]?.[data.key]) : new Date(moment())}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
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
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: res.colors.valid,
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
