import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import res from 'res/R';
import CustomTextInput from 'library/components/TextInput';
import CustomAutocomplete from 'library/components/Select';
import AlertPro from 'library/components/AlertPro';
import { useSelector } from 'react-redux';

export default function Profile(props) {
  const [tabActive, setTabActive] = useState(0);
  const user = useSelector(store => store.userReducer.currentUser)

  // Profile
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentType, setDocumentType] = useState();
  const [documentNumber, setDocumentNumber] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState(null);
  const [stateByCountry, setStateByCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  // Credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [alertPro, setRefAlertPro] = useState();
  const [messageAlert, setMessageAlert] = useState({
    heading: '',
    message: '',
  });

  useEffect(() => {
    if (props.masterDataStatus.error) {
      if (props.masterDataStatus.error) {
        setMessageAlert(props.masterDataStatus.error);
        alertPro && alertPro.open();
      }
    } else {
      props.getDocumentType({
        token: props.userStatus.currentUser.Token,
        posicion: 0,
        top: 10,
      });
      props.getCountry({
        token: props.userStatus.currentUser.Token,
        posicion: 0,
        top: 10,
      });
    }
  }, [props.masterDataStatus.error]);

  useEffect(() => {
    if (
      props.masterDataStatus.listDocumentType &&
      props.masterDataStatus.listCountry
    ) {
      // console.log(props.userStatus.currentUser.Id);
      props.onGetUserProfile({
        token: props.userStatus.currentUser.Token,
        id: props.userStatus.currentUser.Id,
      });
    }
  }, [
    props.masterDataStatus.listDocumentType,
    props.masterDataStatus.listCountry,
  ]);

  const sendData = () => {
    if (!tabActive) {
      console.log({
        token: props.userStatus.currentUser.Token,
        idClient: props.userStatus.currentUser.Id,
        name,
        lastName,
        documentType,
        documentNumber,
        mobile,
        country,
        stateByCountry,
        city,
        address,
      });
      // Perfil
      // props.onSetUserProfile({
      //     token: props.userStatus.currentUser.token,
      //     idClient: props.userStatus.currentUser.idClient,
      //     name,
      //     lastName,
      //     documentType,
      //     documentNumber,
      //     mobile,
      //     country,
      //     stateByCountry,
      //     city,
      //     address,
      //     // IMAGEN
      // });
    } else {
      // Credenciales
      if (newPassword != confirmNewPassword) {
        setMessageAlert({
          heading: 'Contraseñas Incorrectas',
          message:
            'Por favor revisa las contraseñas, las contraseñas no coinciden',
        });
        alertPro.open();
        return false;
      }
      props.onSetUserProfileCredential({
        token: props.userStatus.currentUser.token,
        idClient: props.userStatus.currentUser.idClient,
        password,
        newPassword,
      });
    }
  };

  
  return (
    // !props.masterDataStatus.loading ?
    <ScrollView style={styles.container}>
    
    <Avatar
      onPress={() => alert('Camera or Galery')}
      icon={{
        name: 'user-md',
        type: 'font-awesome',
        color: res.colors.clearText,
      }}
      rounded
      //source={res.images.heart}
      size="xlarge"
      //size={100}
      containerStyle={{
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: res.colors.darkGray,
      }}>
      <Avatar.Accessory
        name="file-photo-o"
        type="font-awesome"
        size={35}
        color={res.colors.red}
        style={{backgroundColor: res.colors.clearText}}
      />
    </Avatar>
    <View style={{justifyContent:'center',alignItems:'center'}} >
      <Text>{user.email}</Text>
    </View>
   
    <View style={styles.gpContainer}>
      
      <TouchableOpacity
        onPress={() => setTabActive(0)}
        style={[styles.gpTab, tabActive || styles.gpTabSelect]}>
        <EntypoIcon
          name="creative-commons-attribution"
          style={styles.icTabElement}
        />
        <Text style={[styles.lblGpTab, !tabActive || styles.itemNotSelect]}>
          Perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabActive(1)}
        style={[styles.gpTab, !tabActive || styles.gpTabSelect]}>
        <MaterialCommunityIconsIcon
          name="security"
          style={styles.icTabElement}
        />
        <Text style={[styles.lblGpTab, tabActive || styles.itemNotSelect]}>
          Credenciales
        </Text>
      </TouchableOpacity>
    </View>
    {/* {!tabActive ? (
      <>
        <CustomTextInput.Simple
          config={{
            placeholder: 'Nombre',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.evilicon,
            name: 'person-pin',
            style: {},
          }}
          data={{
            value: name,
            onChangeText: setName,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Apellido',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.evilicon,
            name: 'family-restroom',
            style: {},
          }}
          data={{
            value: lastName,
            onChangeText: setLastName,
          }}
        />
        <CustomAutocomplete.Autocomplete
          config={{
            placeholder: 'Tipo Documento',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'select-all',
            style: {},
          }}
          onSelect={setDocumentType}
          itemSelect={documentType}
          data={{
            data: props.masterDataStatus.listDocumentType,
            loading: props.masterDataStatus.loadingDocumentType,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Número de Identificación o DNI',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'format-list-numbered',
            style: {},
          }}
          data={{
            value: documentNumber,
            onChangeText: setDocumentNumber,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Número de teléfono o celular',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'phone',
            style: {},
          }}
          data={{
            value: mobile,
            onChangeText: setMobile,
          }}
        />
        <CustomAutocomplete.Autocomplete
          config={{
            placeholder: 'País',
            type: 'default',
            editable: false,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'select-all',
            style: {},
          }}
          onSelect={data => {
            setCountry(data);
            setStateByCountry();
            props.masterDataStatus.listStateByCountry = null;
            props.masterDataStatus.listCityByState = null;
            if (data) {
              props.getStateByCountry({
                token: props.userStatus.currentUser.Token,
                idPais: data.id,
              });
            }
          }}
          itemSelect={country}
          data={{
            value: country,
            data: props.masterDataStatus.listCountry,
            loading: props.masterDataStatus.loadingCountry,
          }}
        />
        <CustomAutocomplete.Autocomplete
          config={{
            placeholder: 'Departamento o Estado',
            type: 'default',
            editable: false,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'select-all',
            style: {},
          }}
          onSelect={data => {
            setStateByCountry(data);
            setCity();
            props.masterDataStatus.listCityByState = null;
            if (data) {
              props.getCityByState({
                token: props.userStatus.currentUser.Token,
                idDepartamento: data.id,
              });
            }
          }}
          itemSelect={stateByCountry}
          data={{
            data: props.masterDataStatus.listStateByCountry,
            loading: props.masterDataStatus.loadingStateByCountry,
          }}
        />
        <CustomAutocomplete.Autocomplete
          config={{
            placeholder: 'Ciudad',
            type: 'default',
            editable: false,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'select-all',
            style: {},
          }}
          onSelect={data => {
            setCity(data);
          }}
          itemSelect={city}
          data={{
            data: props.masterDataStatus.listCityByState,
            loading: props.masterDataStatus.loadingCityByState,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Dirección de residencia',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.antdesign,
            name: 'location-on',
            style: {},
          }}
          data={{
            value: address,
            onChangeText: setAddress,
          }}
        />
      </>
    ) : (
      <>
        <CustomTextInput.Simple
          config={{
            placeholder: 'Correo Electrónico',
            type: 'default',
            editable: false,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'mail',
            style: {},
          }}
          data={{
            value: email,
            onChangeText: setEmail,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Contraseña Actual',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'lock',
            style: {},
          }}
          data={{
            value: password,
            onChangeText: setPassword,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Nueva Contraseña',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'security',
            style: {},
          }}
          data={{
            value: newPassword,
            onChangeText: setNewPassword,
          }}
        />
        <CustomTextInput.Simple
          config={{
            placeholder: 'Confirmar Contraseña',
            type: 'default',
            editable: true,
          }}
          icon={{
            type: res.fonts.fontAwesome5,
            name: 'security',
            style: {},
          }}
          data={{
            value: confirmNewPassword,
            onChangeText: setConfirmNewPassword,
          }}
        />
      </>
    )} */}
    <TouchableOpacity
      disabled={
        props.userStatus.loading || !tabActive
          ? name === '' || lastName === ''
          : password === '' || newPassword === '' || confirmNewPassword === ''
      }
      style={[
        res.palette.btnConfirm,
        {
          backgroundColor:
            props.userStatus.loading ||
            (tabActive &&
              (password == '' ||
                newPassword == '' ||
                confirmNewPassword == '')) ||
            (!tabActive && (name == '' || lastName == ''))
              ? res.colors.optionItemBackground
              : res.colors.btnConfirmBackgroundColor,
        },
        {marginTop: 20, marginBottom: 20},
      ]}
      onPress={() => sendData()}>
      {props.userStatus.loading ? (
        <View style={{alignItems: 'center', marginVertical: 13}}>
          <ActivityIndicator size="large" color={res.colors.green} />
        </View>
      ) : (
        <Text style={res.palette.btnConfirmText}>
          {!tabActive ? 'Actualizar Perfil' : 'Actualizar Credenciales'}
        </Text>
      )}
    </TouchableOpacity>
    <TouchableOpacity
      style={[res.palette.btnDanger, {marginTop: 20, marginBottom: 60}]}
      onPress={() => props.onSetUserEmpty()}>
      <Text style={res.palette.btnDangerText}>CERRAR SESIÓN</Text>
    </TouchableOpacity>
    <AlertPro
      config={null}
      messageAlert={messageAlert}
      setRef={setRefAlertPro}
      onClose={() => {
        console.log(props.masterDataStatus.error);
        if (
          props.masterDataStatus.error &&
          props.masterDataStatus.error.code === 401
        ) {
          props.onSetUserEmpty();
        }
      }}
    />
  </ScrollView>
    // :
    // <>
    //     <Avatar
    //         onPress={() => alert('Camera or Galery')}
    //         icon={{ name: 'user-md', type: 'font-awesome', color: res.colors.clearText }}
    //         rounded
    //         //source={res.images.heart}
    //         size="xlarge"
    //         //size={100}
    //         containerStyle={{
    //             alignSelf: 'center',
    //             marginTop: 20,
    //             backgroundColor: res.colors.darkGray
    //         }}
    //     >
    //         <Avatar.Accessory
    //             name="file-photo-o"
    //             type="font-awesome"
    //             size={35}
    //             color={res.colors.red}
    //             style={{ backgroundColor: res.colors.clearText }}
    //         />
    //     </Avatar>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gpContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  gpTab: {
    width: '50%',
  },
  gpTabSelect: {
    borderBottomColor: res.colors.confirmBorderColor,
    borderBottomWidth: 3,
  },
  lblGpTab: {
    fontFamily: res.fonts.titleH3,
    color: res.colors.darkText,
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 'bold',
  },
  icTabElement: {
    color: res.colors.yellow,
    fontSize: 25,
    alignSelf: 'center',
  },
  itemNotSelect: {
    opacity: 0.4,
  },
});
