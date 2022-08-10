import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

import res from 'res/R';

const Autocomplete = props => {
  const searchRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState(false);

  useEffect(() => {
    if (props.data.data) {
      let resultData = [];
      props.data.data.map(item => {
        resultData.push({
          id: item.id,
          title: item.nombre,
        });
      });
      setData(resultData);
    }
  }, [props.data.data]);

  useEffect(() => {
    if (!props.data.data && !props.itemSelect) {
      searchRef.current.clear();
    }
  }, [props.itemSelect]);

  return (
    <View
      style={isOpen ? styles.suggestionsList : null}
      pointerEvents={!props.data.data ? 'none' : 'auto'}>
      <AutocompleteDropdown
        controller={controller => {
          searchRef.current = controller;
        }}
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onClear={props.onSelect}
        onSelectItem={item => {
          if (item) {
            props.onSelect(item);
            setSearchText(false);
          }
        }}
        showClear={props.itemSelect ? true : undefined}
        dataSet={data}
        loading={props.data.loading}
        textInputProps={{
          value: searchText
            ? undefined
            : props.itemSelect && props.itemSelect.title,
          placeholder: props.config.placeholder,
          autoCorrect: false,
          placeholderTextColor: props.data.data
            ? res.colors.placeholderTextColor
            : res.colors.placeholderTextColorDisabled,
          autoCapitalize: 'none',
          style: !props.data.data
            ? styles.suggestionsListContainerStyleNotData
            : styles.textInputPropsStyle,
        }}
        onChangeText={text => {
          setSearchText(true);
        }}
        showChevron={props.data.data ? true : false}
        containerStyle={styles.containerStyle}
        debounce={600}
        suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
        rightButtonsContainerStyle={styles.rightButtonsContainerStyle}
        inputHeight={50}
        onOpenSuggestionsList={e => setIsOpen(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsList: {
    zIndex: 99,
  },
  noData: {
    backgroundColor: res.colors.backgroundColorHeader,
  },
  textInputPropsStyle: {
    color: '#000000',
    fontSize: 16,
    fontFamily: res.fonts.value,
    backgroundColor: res.colors.simpleBackgroundColor,
    borderRadius: 5,
    borderColor: res.colors.simpleBorderColor,
    borderWidth: 1,
  },
  containerStyle: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: 30,
  },
  rightButtonsContainerStyle: {
    height: 30,
    top: 10,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
  suggestionsListContainerStyleNotData: {
    backgroundColor: res.colors.headerTintColor,
  },
});

export default Autocomplete;
