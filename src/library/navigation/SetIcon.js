import * as React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FoundationIcon from "react-native-vector-icons/Foundation";

const IconWithBadge = ({ FontType, name, badgeCount, color, size }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <FontType name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
      <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}></Text>
    </View>
  );
};

const SetIcon = ({ route, focused, color, size }) => {
  let iconName;
  let IconFont = MaterialCommunityIconsIcon;
  let badgeCount = 0;
  switch (route.name) {
    case "Main":
      iconName = focused ? "dynamic-form" : "format-list-numbered";
      IconFont = focused ? MaterialIconsIcon : MaterialIconsIcon;
      break;
    case "Sells":
      iconName = focused ? "sellsy" : "sellsy";
      IconFont = focused ? FontAwesomeIcon : FontAwesomeIcon;
      break;
    case "Orders":
      iconName = focused ? "history" : "history";
      IconFont = focused ? OcticonsIcon : OcticonsIcon;
      break;
    case "Profile":
      iconName = focused ? "user" : "user";
      IconFont = focused ? EntypoIcon : EntypoIcon;
      break;
    default:
      iconName = focused ? "ios-list" : "ios-list";
      IconFont = focused ? IoniconsIcon : IoniconsIcon;
      break;
  }
  return (
    <IconWithBadge
      FontType={IconFont}
      name={iconName}
      size={size}
      color={color}
      badgeCount={badgeCount}
    />
  );
};

export default SetIcon;
