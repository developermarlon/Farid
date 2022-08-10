import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Animated, Text, Dimensions, Easing } from "react-native";
import  Svg, {Circle} from "react-native-svg";

import res from "../../res/R";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 30;
const boxWidth = 100;
const boxHeight = 100;
const circunference = radius * 2 * Math.PI;

export default function CircularProgress({progress,textStyle}){
  const [progressLabel, setProgressLabel] = useState('0');

  const progressController = useRef(new Animated.Value(0)).current;

  const α = progressController.interpolate({
    inputRange:[0,1],
    outputRange:[circunference,(circunference-(circunference*progress/100))]
  })

  const animate = () => {
    Animated.timing(progressController,{
      duration: 2000,
      toValue:1,
      easing: Easing.bezier(0.61, 1, 0.88, 1),
      useNativeDriver:false
    }).start();
  }

  useEffect(() => {
    progressController.addListener(({value}) => {
      const progressPercentage = Math.floor(value*progress);
      setProgressLabel(progressPercentage);
    })
    animate();

    return () => progressController.removeAllListeners();
  }, [])

  return (
    <>
      <View style={{width:boxWidth, height:boxHeight, transform:[{rotateZ:'-90deg'}]}}>
        <Svg width={boxWidth} height={boxHeight}>
          <Circle 
            cx="50"
            cy="50"
            r={radius}
            stroke={'#fff'}
            strokeWidth="8"
            fill="transparent"
          />
          <AnimatedCircle
            cx="50"
            cy="50"
            r={radius}
            stroke={res.colors.yellow}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={`${circunference} ${circunference}`}
            strokeDashoffset={α}
          />
        </Svg>
        <View style={[styles.progressLabelView,{
          transform:[{rotateZ:'90deg'}],
          right: progressLabel == 100 ? (boxWidth/2)-18 : (boxWidth/2)-15
        }]}>
          <Text style={[textStyle]}>{progressLabel}%</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  progressLabelView:{
    position:'absolute',
    right:(boxWidth/2)-18,
    bottom: (boxWidth/2)-10
  }
})