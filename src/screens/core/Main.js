import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, FlatList } from "react-native";

import res from "res/R";
import ItemMain from "library/components/Item/Form";
import Config from "library/configForm";
import { useSelector } from "react-redux";

const Main = (props) => {

  const renderHeader = () => (
    <>
      <Image
        style={styles.bgDashboard}
        source={res.images.logo}
        resizeMode="contain"
      />
      <Text style={[res.palette.titleH4, styles.lblDescription]} >
        De acuerdo al <Text style={{ color: "#BADA55" }}>Artículo 16</Text>, del{" "}
        <Text style={{ color: "#3AB5CD" }}>Decreto 4181 de 2011</Text>,
        es función de la{' '}
        <Text style={{ color: "#DE9528" }}>
          Dirección Técnica de Inspección y Vigilancia
        </Text>, ejercer el control y vigilancia de la actividad pesquera y
        acuícola, en coordinación con las demás autoridades públicas.
      </Text>
    </>
  )
  const renderItem = ({ item }) => {
    return (
      <ItemMain key={item.idForm} data={item} navigation={props.navigation} />
    );
  };

  const state = useSelector(store => store.userReducer)

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={Config.ListForm.filter(l => l.main === 1)}
      renderItem={renderItem}
      keyExtractor={item => item.idForm}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  bgDashboard: {
    width: "100%",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  containerItems: {
    marginVertical: 20,
    marginBottom: 50,
  },
  lblDescription: {
    textAlign: "justify",
    marginHorizontal: 20,
    color: res.colors.text,
  },
});

export default Main;
