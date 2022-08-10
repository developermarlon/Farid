import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

import res from "res/R";

const screen = Dimensions.get("window");
const FormExecute = (props) => {
  return (
    <View style={styles.container}>
      <ContentLoader
        height={screen.height * 0.82}
        width={screen.width}
        speed={1}
        backgroundColor={res.colors.simpleBackgroundColor}
        foregroundColor={res.colors.simpleBorderColor}
      >
        {/* Only SVG shapes */}
        <Rect
          x="20"
          y="20"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="90"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="160"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="230"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="300"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="370"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
        <Rect
          x="20"
          y="440"
          rx="5"
          ry="5"
          width={screen.width - 40}
          height={60}
        />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: res.colors.simpleBackgroundColor,
    alignItems: "center",
    minHeight: screen.height * 0.92,
    marginHorizontal: 40,
  },
});

export default FormExecute;
