import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import res from "res/R";
import { Avatar } from 'react-native-elements';

export default function Step(props) {

    const percentage = 17;
    return (
        <TouchableOpacity
            style={[styles.container]}
            onPress={() => {

            }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.lblTitulo}>PASO # (HH:MM)</Text>
                <Text style={styles.lblSubtitulo}>
                    Completado:
                    <Text style={{ color: percentage < 100 ? res.colors.red : res.colors.green, }}>
                        {percentage}%
                    </Text>
                </Text>
            </View>
            <Avatar size='large' rounded activeOpacity={0.7} containerStyle={{ marginRight: 10 }}
                overlayContainerStyle={{ backgroundColor: res.colors.backgroundColorIcon }}
                icon={{
                    type: percentage < 100 ? res.fonts.icons.feather : res.fonts.icons.fontAwesome,
                    name: percentage < 100 ? 'arrow-right' : 'check-circle',
                    color: percentage < 100 ? res.colors.iconColor : res.colors.green,
                    size: 40,
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: res.colors.backgroundColor,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
    lblTitulo: {
        fontFamily: res.fonts.titleH3,
        color: res.colors.darkText,
        fontSize: 16,
        marginLeft: 20,
        marginTop: 30
    },
    lblSubtitulo: {
        color: "#121212",
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 30
    },
});
