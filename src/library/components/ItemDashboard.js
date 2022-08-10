import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import res from "res/R";

export default function ItemDashboard(props) {

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => {
        props.navigation.navigate('Protocol');
      }}
    >

      <View style={{ width: '70%' }}>
        <Text style={styles.lblTitulo}>TITULO</Text>
        <Text style={styles.lblFecha}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </View>
      <View style={styles.gpInfo}>
        <Text style={styles.lblPorcentaje}>90 %</Text>
        <Text style={styles.lblCompletado}>Completado</Text>
      </View>
      <View style={styles.gpOption}>
        <TouchableOpacity
          style={[styles.btnOption, { backgroundColor: res.colors.darkGray }]}
          onPress={() => {
            props.navigation.navigate('Protocol');
          }}>
          <Text style={styles.lblOption}>
            CONTINUAR
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: res.colors.backgroundColor,
    borderRadius: 10,
    justifyContent: 'center',
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
  icEliminar: {
    color: res.colors.red,
    fontSize: 30,
    position: 'absolute',
    right: 10,
    top: 10
  },
  lblTitulo: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 40,
    fontWeight: 'bold'
  },
  lblUser: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  lblFecha: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
  },
  lblPorcentaje: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.green,
    fontSize: 12,
    fontWeight: 'bold'
  },
  lblCompletado: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.darkText,
    fontSize: 12,
    right: 20,
    top: 80
  },
  lblCompletado: {
    fontFamily: res.fonts.subTitleH3,
    color: res.colors.darkText,
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 136
  },
  gpInfo: {
    position: 'absolute',
    right: 30,
    top: 50,
    alignItems: 'flex-end'
  },
  gpOption: {
    flexDirection: 'row',
    alignSelf: "flex-end",
    marginVertical: 20,
    marginRight: 10
  },
  btnOption: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: res.colors.yellow,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center'
  },
  lblOption: {
    marginVertical: 5,
    marginHorizontal: 10,
    color: res.colors.clearText,
    fontWeight: 'bold'
  }
});