import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text,Image } from "react-native";
import res from "res/R";
import FoundationIcon from "react-native-vector-icons/Foundation";


const imagenes = [
    require('../../../res/images/img1.jpeg'),
    require('../../../res/images/img2.jpeg'),
    require('../../../res/images/img3.jpeg'),
    require('../../../res/images/img4.jpeg')
]
const  Type_17 = ({ data }) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  
  return (
    <View style={styles.gpElement}>
        <Image
            source={imagenes[data?.img]}
            style={{
                width:'100%'
            }}
            resizeMode='contain'
        />

      <Text style={styles.lblgpElementTitle}>{data?.title}</Text>
      <View
        style={[
          styles.gpElementItem,
        //   text !== "" && { borderColor: res.colors.valid },
        ]}
      >
        <View>
            <TextInput
            placeholder={'Babor 1'}
            keyboardType="decimal-pad"
            value={text}
            onChangeText={(value) => setText(value)}
            style={[
                styles.txtGpElementItemField,
                text !== "" && { borderColor: res.colors.valid },
            ]}
            />
            <TextInput
            placeholder={'Babor 2'}
            keyboardType="decimal-pad"
            value={text2}
            onChangeText={(value) => setText2(value)}
            style={[
                styles.txtGpElementItemField,
                text !== "" && { borderColor: res.colors.valid },
            ]}
            />
        </View>
        <View>
            <TextInput
            placeholder={'Estribor 1'}
            keyboardType="decimal-pad"
            value={text3}
            onChangeText={(value) => setText3(value)}
            style={[
                styles.txtGpElementItemField,
                text !== "" && { borderColor: res.colors.valid },
            ]}
            />
            <TextInput
            placeholder={'Estribor 2'}
            keyboardType="decimal-pad"
            value={text4}
            onChangeText={(value) => setText4(value)}
            style={[
                styles.txtGpElementItemField,
                text !== "" && { borderColor: res.colors.valid },
            ]}
            />
        </View>
        
        
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gpElement: {
    marginHorizontal: 20,
    marginVertical: 15,
    flex:1
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: "bold",
  },
  gpElementItem: {
    // height: 60,
    // minHeight: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    // borderWidth: 1,
    flexDirection: "row",
    marginTop: 5,
    alignItems:'center',
    justifyContent:'space-around'
    
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
    // alignSelf: "center",
    fontWeight: "bold",
    borderWidth:1,
    margin:5
  },
});
export default Type_17;