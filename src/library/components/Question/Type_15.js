import React, { createRef } from "react";
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from "react-native";
import SignatureCapture from "react-native-signature-capture";

import res from "res/R";

const Type_15 = ({ data }) => {

  const sign = new createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = (result) => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('Signature Captured Successfully');
    // console.log(result.encoded);
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    // console.log('dragged');
  };

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={styles.gpElementGroup}>
        <SignatureCapture
          style={styles.signature}
          ref={sign}
          onSaveEvent={_onSaveEvent}
          onDragEvent={_onDragEvent}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
          maxStrokeWidth={1}
          minStrokeWidth={1}
        />
        <View style={{ flexDirection: 'row' }}>
          {/* <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              saveSign();
            }}>
            <Text>Save</Text>
          </TouchableHighlight> */}
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              resetSign();
            }}>
            <Text>Reiniciar</Text>
          </TouchableHighlight>
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
  gpElementItemField: {
    flex: 1,
    flexDirection: "row",
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
    minHeight: 200,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default Type_15;
