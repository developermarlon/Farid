import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text,Image, Button } from "react-native";
import res from "res/R";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const  Type_18 = ({ data }) => {
    const [ tempUri, setTempUri ] = useState()

    const takePhoto = async() => {

        const result = await launchCamera({
            mediaType: 'photo',
            quality: 0.5
        })

        console.log(result?.assets[0]?.uri);

         setTempUri( result?.assets[0]?.uri );
        // launchCamera({
            // mediaType: 'photo',
            // quality: 0.5
        // }, (resp) => {
        //     if ( resp.didCancel ) return;
        //     if( !resp.uri ) return;
        //     console.log(resp);
        //     setTempUri( resp.uri );
        //     uploadImage( resp, _id );
        // });
    }

    const uploadImage = async( data, id ) => {

        const fileToUpload = {
            uri: data.uri,
            type: data.type,
            name: data.fileName
        }

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
           //API enviar foto 
           
        } catch (error) {
            console.log({ error })
        }

    }

    
   
    return (
    <View style={styles.gpElement}>
         {/* TODO: Mostrar imagen temporal */}
         {
            ( tempUri ) && (
                <Image 
                source={{ uri: tempUri }}
                style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                }}
                />
            )
        }


      <View
        style={[
          styles.gpElementItem,
        ]}
      >
        <Button
        title={data?.title}
        onPress={ takePhoto }
        color="#3A6FF3"
        />  
        
        
       
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
export default Type_18;