import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import messaging from "@react-native-firebase/messaging";

import res from "res/R";
import CustomTextInput from "library/components/TextInput";
import AlertPro from "library/components/AlertPro";
import axios from "axios";


const screen = Dimensions.get("window");

const Login = (props) => {
  const { isConnected } = useNetInfo();
  const [password, setPassword] = useState("admin");
  const [documentNumber, setDocumentNumber] = useState("admin@admin.com");

  const [alertPro, setRefAlertPro] = useState();
  const [messageAlert, setMessageAlert] = useState({
    heading: "",
    message: "",
  });

  async function checkApplicationPermission() {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      //setMessagingAuthorizationStatus(true);
      //console.log('User has notification permissions enabled.');
      return true;
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      //setMessagingAuthorizationStatus(true);
      //console.log('User has provisional notification permissions.');
      return false;
    } else {
      //console.log('User has notification permissions disabled');
      return false;
    }
  }

  const onSendData = async () => {
    const REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!REG.test(documentNumber)) {
      setMessageAlert({
        heading: "Correo Electrónico no válido",
        message: "El formato del correo electrónico no es válido",
      });
      alertPro.open();
      return false;
    }

    const result = await login({ usuario: documentNumber, password: password })

    if (result.status !== 201) {
      setMessageAlert({
        heading: "Datos incorrectos",
        message: "Verifique usuario y contraseña",
      });
      alertPro.open();
      return false;
    }




    messaging()
      .getToken()
      .then((token) => {
        props.onGetUser({
          api_token: result?.data.api_token,
          token: token,
          username: documentNumber,
          password: password,
          usuarioCreacion: 1,
        });
      });
  };

  useEffect(() => {
    if (props.userStatus.error) {
      setMessageAlert(props.userStatus.error);
      alertPro && alertPro.open();
    }
  }, [props.userStatus.error]);

  return (
    <ScrollView
      style={{
        backgroundColor: res.colors.backgroundColor,
        flex: 1,
      }}
    >
      <Image
        resizeMode="cover"
        source={res.images.fondoLogin}
        style={res.palette.imageBackground}
      />
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View style={styles.header}>
          <Text style={res.palette.titleH1}>
            <Text style={{ color: "#DE9528" }}>Guía{' '}</Text>Pesquera
          </Text>
          <Text style={res.palette.subTitleH1}>Acuicultura y Pesca con Responsabilidad</Text>
        </View>
        <View style={styles.gpBody}>
          <View style={styles.gpLogo}>
            <Image
              source={res.images.isoTipo}
              style={{ width: "100%", height: "100%", minHeight: 150 }}
              resizeMode="contain"
            />
          </View>
          <CustomTextInput.Simple
            config={{
              placeholder: "Número de Identificación o Correo Electrónico",
              type: "default",
              editable: true,
            }}
            icon={{
              type: res.fonts.fontAwesome5,
              name: "badge",
              style: {},
            }}
            data={{
              value: documentNumber,
              onChangeText: setDocumentNumber,
            }}
          />
          <CustomTextInput.Simple
            config={{
              placeholder: "Contraseña",
              type: "default",
              editable: true,
            }}
            icon={{
              type: res.fonts.fontAwesome5,
              name: "lock",
              style: {},
            }}
            data={{
              value: password,
              onChangeText: setPassword,
            }}
          />
          {!props.userStatus.loading ? (
            <TouchableOpacity
              disabled={
                props.userStatus.loading ||
                !isConnected ||
                documentNumber == "" ||
                password == ""
              }
              style={[
                res.palette.btnConfirm,
                {
                  backgroundColor:
                    props.userStatus.loading ||
                      !isConnected ||
                      documentNumber == "" ||
                      password == ""
                      ? res.colors.optionItemBackground
                      : res.colors.btnConfirmBackgroundColor,
                },
                { marginBottom: 40 },
              ]}
              onPress={async () => {
                await checkApplicationPermission();
                onSendData();
              }}
            >
              <Text style={res.palette.btnConfirmText}>
                {isConnected ? "Iniciar Sesión" : "Sin conexión"}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={{ alignItems: "center", marginVertical: 13 }}>
              <ActivityIndicator size="large" color={res.colors.green} />
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL("http://google.com")}
          style={styles.gpFooter}
        >
          <Text style={res.palette.code}>
            Copyright © Altosentido 2021{"\n"}
            Todos los Derechos Reservados
          </Text>
        </TouchableOpacity>
      </View>
      <AlertPro
        config={null}
        messageAlert={messageAlert}
        setRef={setRefAlertPro}
        onClose={() => {
          props.onSetUserEmpty();
        }}
      />
    </ScrollView>
  );
};


const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'U1l0UWpEQm9VemQ0QjNIVkM4ZmJtU3BDbDVGUkdtdnRJcHdPTE5wSTY2MUdTelJQdXkzMlFYVjF3bmhk62e803bce032e'
};


async function login(data) {
  try {
    const url = `http://68.183.50.234:12345/api/user`;

    const apiCall = await axios.post(url, data, headers)


    return { data: apiCall.data, status: apiCall.status }
  } catch (error) {
    return { status: error.response.status }
  }


}

const styles = StyleSheet.create({
  header: {
    marginTop:
      Platform.OS == "ios" ? screen.height * 0.2 : screen.height * 0.16,
  },
  gpBody: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: res.colors.backgroundColor,
    marginTop: screen.width * 0.1,
    borderRadius: 15,
    borderBottomRightRadius: 30,
    shadowColor: res.colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 60,
    minHeight: screen.height * 0.3,
  },
  gpLogo: {
    // marginHorizontal: 40,
    marginVertical: 20,
    //backgroundColor: 'red',
    flex: 1,
  },
  gpFooter: {
    bottom: Platform.OS == "ios" ? 40 : 10,
    width: "100%",
  },
});

export default Login;
