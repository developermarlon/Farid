import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StepIndicator from 'react-native-step-indicator';

export default function Step({ activeStep, data, onPressAction }) {

  const CUSTOM_STYLE = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }

  const [stepCount, setStepCount] = useState(parseInt(data.length / 10));
  const [listLabels, setListLabels] = useState([]);

  useEffect(() => {
    let tempLabels = [];
    let questionsCount = 1;
    for (let i = 1; i <= stepCount; i++) {
      if (i === stepCount) {
        tempLabels.push(questionsCount + '-' + data.length);
      } else {
        tempLabels.push(questionsCount + '-' + (questionsCount + 9));
        questionsCount += 10;
      }
    }
    setListLabels(tempLabels);
  }, []);

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={CUSTOM_STYLE}
        currentPosition={activeStep}
        stepCount={stepCount}
        labels={listLabels}
        onPress={(position) => { onPressAction(position) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 30,
  }
});
