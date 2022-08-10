import React from 'react';
import { StyleSheet } from 'react-native';
import AlertPro from 'react-native-alert-pro';

const AlertProCustom = props => {
  let alertPro = React.createRef();
  return (
    <AlertPro
      ref={ref => {
        props.setRef(ref);
        alertPro = ref;
      }}
      onConfirm={() => alertPro.close()}
      onCancel={() => alertPro.close()}
      onClose={() => props.onClose()}
      title={props.messageAlert ? props.messageAlert.heading : ''}
      message={props.messageAlert ? props.messageAlert.message : ''}
      textCancel={
        props.config && props.config.textCancel
          ? props.config.textCancel
          : 'Cancelar'
      }
      textConfirm={
        props.config && props.config.textConfirm
          ? props.config.textConfirm
          : 'Aceptar'
      }
      showCancel={
        props.config && props.config.showCancel
          ? props.config.showCancel
          : false
      }
      customStyles={{
        mask: styles.mask,
        container: styles.container,
        title: styles.title,
        message: styles.message,
        buttonConfirm: styles.buttonConfirm,
        buttonCancel: styles.buttonCancel,
        textConfirm: styles.textConfirm,
        textCancel: styles.textCancel,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mask: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  container: {
    borderWidth: 1,
    borderColor: '#353540',
    shadowColor: '#353540',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Calibri',
    color: '#353540',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    fontFamily: 'Calibri',
  },
  buttonConfirm: {
    backgroundColor: '#353540',
    justifyContent: 'center',
  },
  buttonCancel: {
    backgroundColor: '#353540',
    justifyContent: 'center',
  },
  textConfirm: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Calibri',
  },
  textCancel: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Calibri',
  },
});

export default AlertProCustom;
