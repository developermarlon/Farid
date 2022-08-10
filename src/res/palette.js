import { Dimensions } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const screen = Dimensions.get("window");

export default {
  titleH1: {
    fontFamily: fonts.titleH1,
    color: colors.title,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  subTitleH1: {
    fontFamily: fonts.subTitleH1,
    color: colors.subTitle,
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 10,
  },
  btnConfirm: {
    backgroundColor: colors.btnConfirmBackgroundColor,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  btnDanger: {
    backgroundColor: colors.btnDangerBackgroundColor,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  btnConfirmText: {
    fontFamily: fonts.button,
    color: colors.btnConfirmText,
    fontSize: 14,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnDangerText: {
    fontFamily: fonts.button,
    color: colors.btnDangerText,
    fontSize: 14,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleH2: {
    fontFamily: fonts.titleH1,
    color: colors.title,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 10,
  },
  subTitleH2: {
    fontFamily: fonts.subTitleH2,
    color: colors.subTitle,
    fontSize: 14,
    textAlign: "center",
    //fontWeight: 'bold',
    marginRight: 10,
  },
  titleHeader: {
    fontFamily: fonts.titleH1,
    color: colors.title,
    fontSize: 14,
    //textAlign: "center",
    fontWeight: "bold",
  },
  titleLoading: {
    fontFamily: fonts.titleH1,
    color: colors.title,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    height: screen.height * 0.75,
    width: "100%",
  },
  titleH3: {
    fontFamily: fonts.titleH3,
    color: colors.darkText,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  subTitleH3: {
    fontFamily: fonts.titleH3,
    color: colors.darkText,
    fontSize: 12,
    textAlign: "center",
    //fontWeight: 'bold',
    marginHorizontal: 10,
  },

  text: {
    fontFamily: fonts.text,
    color: colors.text,
    fontSize: 14,
  },
  code: {
    fontFamily: fonts.code,
    color: colors.code,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonFullH: {
    backgroundColor: colors.buttonBackgroundColor,
    borderRadius: 5,
  },
};
