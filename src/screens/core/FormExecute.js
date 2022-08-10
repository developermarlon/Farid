import React, { useEffect, useState, useMemo, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import res from "res/R";
import FormInfo from "library/components/FormInfo";
import Config from "library/configForm";
import Question from "library/components/Question";
import StepIndicator from "library/components/StepIndicator";
import FormExecuteLoad from "library/components/Loading/FormExecute";
import { ReactReduxContext } from 'react-redux';
import { END_POINT } from 'library/networking/URI';
import { restoreForm } from '../../library/redux/actions/formAction'

export default (({ route }) => {
  const { store } = useContext(ReactReduxContext)
  // const aceEditorRef = useRef();
  let aceEditorRef = React.createRef();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stepCount, setStepCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const sendRequest = async () => {
    console.log(`${END_POINT}${file.endpoint}`)
    console.log(store.getState().formReducer[route.params.data.idForm])
    try {
      const response = await fetch(`${END_POINT}${file.endpoint}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(store.getState().formReducer[route.params.data.idForm]),
        headers: {
          "Content-Type": "application/json",
          "Authorization": store.getState().userReducer.token
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      console.log(response);
      store.dispatch(restoreForm({
        idForm: file.idForm
      }))
      navigation.navigate("Main", {});
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  const Paint = ({ data }) => {
    switch (data.type) {
      case 1:
        return useMemo(() => <Question.Type_1 data={data} />, [data]);
      case 2:
        return useMemo(() => <Question.Type_2 data={data} />, [data]);
      case 3:
        return useMemo(() => <Question.Type_3 data={data} />, [data]);
      case 4:
        return useMemo(() => <Question.Type_4 data={data} />, [data]);
      case 5:
        return useMemo(() => <Question.Type_5 data={data} />, [data]);
      case 7:
        return useMemo(() => <Question.Type_7 data={data} />, [data]);
      case 8:
        return useMemo(() => <Question.Type_8 data={data} />, [data]);
      case 9:
        return useMemo(() => <Question.Type_9 data={data} />, [data]);
      case 10:
        return useMemo(() => <Question.Type_10 data={data} />, [data]);
      case 11:
        return useMemo(() => <Question.Type_11 data={data} />, [data]);
      case 13:
        return useMemo(() => <Question.Type_13 data={data} />, [data]);
      case 14:
        return useMemo(() => <Question.Type_14 data={data} />, [data]);
      case 15:
        return useMemo(() => <Question.Type_15 data={data} />, [data]);
      case 16:
        return useMemo(() => <Question.Type_16 data={data} />, [data]);
      case 17:
        return useMemo(() => <Question.Type_17 data={data} />, [data]);
      case 18:
        return useMemo(() => <Question.Type_18 data={data} />, [data]);
      default:
        return useMemo(() => <Question.Type_12 data={data} />, [data]);
    }
  };

  useEffect(() => {
    if (route.params.data) {
      switch (route.params.data.idForm) {
        case 1:
          setFile(Config.FT_IV_24);
          break;
        case 2:
          setFile(Config.FT_IV_18);
          break;
        case 3:
          setFile(Config.FT_IV_14);
          break;
        case 4:
          setFile(Config.FT_IV_15);
          break;
        case 5:
          setFile(Config.FT_IV_19);
          break;
        case 6:
          setFile(Config.FT_TEST);
          break;
        case 7:
          setFile(Config.FT_IV_13);
          break;
        case 8:
          setFile(Config.FT_IV_1);
          break;
        case 9:
          setFile(Config.FT_IV_2);
          break;
        case 10:
          setFile(Config.FT_IV_3);
          break;
        case 11:
          setFile(Config.FT_IV_4);
          break;
        case 12:
          setFile(Config.FT_IV_5);
          break;
        case 13:
          setFile(Config.FT_IV_6);
          break;
        case 14:
          setFile(Config.FT_IV_7);
          break;
        case 15:
          setFile(Config.FT_IV_8);
          break;
        case 16:
          setFile(Config.FT_IV_16);
          break;
        case 17:
          setFile(Config.FT_IV_9);
          break;
        case 18:
          setFile(Config.FT_IV_10);
          break;
        case 19:
          setFile(Config.FT_IV_11);
          break;


        default:
          setFile(Config.FT_TEST);
          break;
      }
      // setTimeout(() => {
      setLoading(false);
      // }, 2000);
    }
  }, [route.params]);

  const onPressPosition = (position) => {

    setActiveStep(position);
  }

  const renderItem = ({ item }) => {
    return (
      <Paint data={Object.assign(item, { idForm: file.idForm })} />
    );
  };

  const renderFooter = () => (
    file ? (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 30 }}>
        {
          activeStep !== 0 && (
            <TouchableOpacity
              style={[res.palette.btnDanger, { marginVertical: 20, marginHorizontal: 10 }]}
              onPress={async () => {
                setLoading(true);
                setActiveStep(activeStep - 1);
                setLoading(false);
                aceEditorRef.scrollToOffset({ x: 0, y: 0, animated: true, })
              }}
            >
              <Text style={res.palette.btnDangerText}>
                Atrás
              </Text>
            </TouchableOpacity>
          )
        }
        <TouchableOpacity
          style={[res.palette.btnConfirm, { marginVertical: 20 }]}
          onPress={async () => {
            if (parseInt(file.questions.length / 10) === (activeStep + 1)) {
              sendRequest()
            } else {

              setLoading(true);
              setActiveStep(activeStep + 1);
              setLoading(false);
              aceEditorRef.scrollToOffset({ x: 0, y: 0, animated: true, })
              // aceEditorRef.scrollToTop();
            }
          }}
        >
          <Text style={res.palette.btnConfirmText}>
            {
              parseInt(file.questions.length / 10) === (activeStep + 1) ? 'ENVIAR' : 'Siguiente'
            }
          </Text>
        </TouchableOpacity>
      </View>
    ) :
      <>
      </>
  );
  const renderFooter2 = () => (
    file ? (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 30 }}>

        <TouchableOpacity
          style={[res.palette.btnConfirm, { marginVertical: 20 }]}
          onPress={async () => {
            sendRequest()
          }}
        >
          <Text style={res.palette.btnConfirmText}>
            ENVIAR
          </Text>
        </TouchableOpacity>
      </View>
    ) :
      <>
      </>
  );
  const renderHeader = () => (
    <>
      <StepIndicator
        data={file ? file.questions : []}
        activeStep={activeStep}
        onPressAction={onPressPosition}
      />
      {/* <FormInfo data={route.params.data} /> */}
    </>
  );


  const renderList = () => {
    const tempStep = activeStep + 1;
    const questionStart = tempStep === 1 ? tempStep : tempStep * 10 - 9;
    const parInpar = file.questions.length % 2 == 0 ? 2 : 3
    const dividir = file.questions.length / parInpar;
    // console.log(dividir);
    const questionEnd = tempStep === parseInt(file.questions.length / 10) ? file.questions.length : questionStart + 9;

    const currentFilter = p => p.cons >= questionStart && p.cons <= questionEnd;
    // console.log(file.questions.filter(currentFilter));


    return file.questions.filter(currentFilter);


  };

  return (
    <View style={styles.container}>
      <View style={{ display: !file || loading ? 'flex' : 'none' }}>
        <FormExecuteLoad />
      </View>
      {/* <FlatList
        ref={ref => {
          aceEditorRef = ref;
        }}
        data={file ? renderList() : []}
      
        renderItem={renderItem }
        keyExtractor={(item) => item.title}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      /> */}

      {
        file?.idForm ? (
          <FlatList
            ref={ref => {
              aceEditorRef = ref;
            }}
            data={file ? renderList() : []}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
          />
        ) : (
          <FlatList

            data={file?.questions}

            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item?.title}
            // ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter2}
          />
        )
      }






    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: res.colors.simpleBackgroundColor,
  },
});
