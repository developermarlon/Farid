import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

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
//data, formStatus, onSetDataField
export default connect(mapStateToProps, mapDispatchToProps)((props) => {

  const searchRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  console.log(props.data.title)

  return (
    <View
      style={isOpen ? styles.suggestionsList : styles.gpElement}
      pointerEvents={!props.data ? "none" : "auto"}
    >
      <Text style={styles.lblgpElementTitle}>{props.data.title}</Text>
      <AutocompleteDropdown
        controller={(controller) => {
          searchRef.current = controller;
        }}
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        // onClear={props.onSelect}
        onSelectItem={setSelectedItem}
        // onSelectItem={(item) => {
        //   if (item) {
        //     props.onSelect(item);
        //     setSearchText(false);
        //   }
        // }}
        // showClear={props.itemSelect ? true : undefined}
        // dataSet={data}
        dataSet={props.data.data}
        // loading={props.data.loading}
        textInputProps={{
          // value: searchText
          //   ? undefined
          //   : props.itemSelect && props.itemSelect.title,
          placeholder: props.data.placeHolder,
          // placeholder: props.config.placeholder,
          autoCorrect: false,
          placeholderTextColor: props.data
            ? res.colors.placeholderTextColor
            : res.colors.placeholderTextColorDisabled,
          autoCapitalize: "none",
          style: !props.data
            ? styles.suggestionsListContainerStyleNotData
            : selectedItem
              ? styles.textInputPropsStyleValid
              : styles.textInputPropsStyle,
        }}
        // onChangeText={(text) => {
        //   setSearchText(true);
        // }}
        // showChevron={props.data ? true : false}
        containerStyle={styles.containerStyle}
        debounce={600}
        suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
        rightButtonsContainerStyle={styles.rightButtonsContainerStyle}
        inputHeight={50}
        onOpenSuggestionsList={(e) => setIsOpen(e)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  gpElement: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  suggestionsList: {
    zIndex: 99,
    marginTop: 10,
    marginHorizontal: 20,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: "bold",
  },
  noData: {
    backgroundColor: res.colors.backgroundColorHeader,
  },
  textInputPropsStyle: {
    color: "#000000",
    fontSize: 12,
    fontFamily: res.fonts.value,
    backgroundColor: res.colors.simpleBackgroundColor,
    borderRadius: 5,
    borderColor: res.colors.simpleBorderColor,
    borderWidth: 1,
    fontWeight: "bold",
    height: 60,
    minHeight: 60,
  },
  textInputPropsStyleValid: {
    color: "#000000",
    fontSize: 12,
    fontFamily: res.fonts.value,
    backgroundColor: res.colors.simpleBackgroundColor,
    borderRadius: 5,
    borderColor: res.colors.valid,
    borderWidth: 1,
    fontWeight: "bold",
  },
  containerStyle: {
    flexGrow: 1,
    flexShrink: 1,
  },
  rightButtonsContainerStyle: {
    height: 60,
    minHeight: 60,
    top: 10,
    backgroundColor: "transparent",
    marginHorizontal: 10,
  },
  suggestionsListContainerStyleNotData: {
    backgroundColor: res.colors.headerTintColor,
  },
});
