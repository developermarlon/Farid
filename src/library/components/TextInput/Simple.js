import React from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import res from "res/R";
import { Icon } from 'react-native-elements';

export default Simple = props => {

    return (
        <View style={[styles.gpElement, !props.config || !props.config.editable ? { backgroundColor: res.colors.backgroundColorDisabled } : null]}>
            <TextInput
                placeholderTextColor={res.colors.placeholderTextColor}
                style={styles.txtElement}
                editable={props.config && props.config.editable ? props.config.editable : false}
                placeholder={props.config && props.config.placeholder ? props.config.placeholder : 'Escribe aquí'}
                keyboardType={props.config && props.config.keyboardType ? props.config.keyboardType : 'default'}
                value={props.data.value}
                onChangeText={props.data.onChangeText}
            />
            <Icon
                type={props.icon.type}
                name={props.icon.name}
                style={styles.icElementRight}
                color={res.colors.iconColor}
            />
        </View>
    );
    
};

const styles = StyleSheet.create({
    gpElement: {
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: res.colors.simpleBackgroundColor,
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 5,
        borderColor: res.colors.simpleBorderColor,
        borderWidth: 1,
    },
    icElement: {
        fontSize: 30,
        marginLeft: 15,
    },
    icElementRight: {
        fontSize: 30,
        marginHorizontal: 15
    },
    txtElement: {
        color: res.colors.simpleColor,
        fontSize: 16,
        flex:1,
        fontFamily: res.fonts.value,
        textAlign: "justify",
        marginHorizontal: 20,
        alignSelf: "center",
        minHeight: 40
    },
});