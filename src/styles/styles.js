import { StyleSheet, Dimensions } from "react-native";

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 25;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
export const shadowOpt = { btnWidth: deviceWidth - 55, btnHeight: 45 };

export const spaceHeight = deviceHeight - 375 - 45;
export const ThemeColorPink = "#e91e63";
// export const ThemeColorPink = "#843030";
const BluePrimary = "blue";

const halfWidth = deviceWidth - deviceWidth / 2.5;

export const styles = StyleSheet.create({
  marginTop: {
    marginTop: 15,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  paddingVertical: {
    paddingTop: 18,
    paddingBottom: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  space_between: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  logo: {
    width: 30,
    height: 30,
  },
  bgWhite: {
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
  },
  pink: {
    color: ThemeColorPink,

  },
  borderRounded: {
    borderRadius: 30,
    // overflow: "hidden"
  },
  bgGrey: {
    backgroundColor: "#e0e0e0",
  },
  searchButton: {
    paddingHorizontal: 8,
    width: halfWidth - 30,
    height: 33,
  },
  smallLogo: {
    width: 20,
    height: 20,
  },
  textField: {
    width: halfWidth - 88,
  },
  textField2: {
    width: halfWidth,
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: "black",
  },
  paddingBottomSmall: {
    paddingBottom: 7,
    paddingHorizontal: 8,
  },
  bannerImage: {
    width: deviceWidth,
    height: 250,
    marginVertical: 10,
  },
  category: {
    backgroundColor: "#fce4ec",
    width: deviceWidth / 4 - 20,
    height: deviceWidth / 4 - 20,
    borderRadius: 50,
    marginHorizontal: 5,
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  justifyCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
  },
  marginVertical: {
    marginVertical: 10,
  },
  discountbanner: {
    width: deviceWidth,
    height: 120,
  },
  newArrival: {
    backgroundColor: "#fce4ec",
    width: halfWidth - 60,
    height: 125,
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  boldText: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 15,
  },
  newArrivalImage: {
    width: 50,
    height: 50,
  },
  width: {
    width: 20,
  },
  paddingVerticalLarge: {
    paddingVertical: 28,
  },
  marginBottomLarge: {
    marginBottom: 90,
  },
  product: {
    width: halfWidth - 60,
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "rgb(235,235,235)",
    height: 300,
    marginTop: 7,
  },
  productImage: {
    width: halfWidth - 60,
    height: 220,
  },
  heading2: {
    fontSize: 22,
  },
  bgpink: {
    backgroundColor: ThemeColorPink,
    color: "white",
    marginLeft: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  line_trough: {
    textDecorationLine: "line-through",
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 8,
  },
  textWhite: {
    color: "white",
  },
  paddingVerticalSmall: {
    paddingVertical: 5,
  },
  marginVerticalSmall: {
    marginVertical: 5,
  },
  textBlack: {
    color: "black",
  },
  backgroundImage: {
    height: 250,
    width: deviceWidth,
  },
  position_relative: {
    position: "relative",
  },
  position_absolute: {
    position: "absolute",
  },
  marginBottom_0: {
    marginBottom: 0,
  },
  top50: {
    top: 150,
    zIndex: 1000,
  },
  heightAuto: {
    height: 500,
  },
  product2: {
    width: halfWidth - 118,
    borderWidth: 1,
    borderRadius: 3,
    overflow: "hidden",
    borderColor: "rgb(235,235,235)",
    height: 190,
    marginTop: 7,
    padding: 5,
    backgroundColor: "white",
    // marginLeft: 10,
  },
  productImage2: {
    width: halfWidth - 130,
    borderRadius: 3,
    height: 150,
  },
  textCenter: {
    textAlignVertical: "center",
    textAlign: "center",
  },
  bgBlack: {
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  opacity5: {
    opacity: 1,
  },
  top25: {
    top: 80,
    right: 0,
  },
  evenly: {
    justifyContent: "space-evenly",
  },
  fullWidth: {
    width: deviceWidth,
  },
  fullWidth2: {
    width: deviceWidth - 30,
  },
  topLeft: {
    top: 5,
    left: -5,
    borderRadius: 0,

    zIndex: 10000,
  },
  paddingHorizontalLarge: {
    paddingHorizontal: halfWidth - 120,
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: ThemeColorPink,
  },
  categoryWidth: {
    width: deviceWidth >= 350 ? 125 : deviceWidth / 4,
  },
  borderBottomSmall: {
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },
  shadow: {
    shadowColor: `#000`,
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryProductWidth: {
    width: deviceWidth >= 350 ? deviceWidth - 155 : deviceWidth / 4,
  },
  borderRoundedSmall: {
    borderRadius: 3,
    overflow: "hidden",
  },
  shdowSmall: {
    elevation: 4,
  },
  borderRadius_0: {
    borderRadius: 0,
  },
  accountTop: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,  
  },
  marginTopLarge: {
    marginTop: 60,
    marginBottom:70,
  },
  profileImage: {
    borderWidth: 2,
    borderColor: "white",
    padding: 2,
    borderRadius: 70,
  },
  bgRed: {
    backgroundColor: "#f44336",
  },
  marginBottomSmall: {
    marginBottom: 7,
  },
  border: {
    borderWidth: 1,
    borderColor: "white",
  },
  marginTop2: {
    marginTop: 30,
  },
  top90:{
    bottom: -30,
    zIndex: 5
  },
  borderBlack:{
    borderColor:"lightgrey",
    borderWidth: .51
  },
  height50:{
    height: 450
  },
  padding:{
    padding: 10,
    paddingTop: 0
  },
  bgpink2:{
    backgroundColor: ThemeColorPink,
  },
  blueDot:{
    backgroundColor: BluePrimary,
    width: 5, height: 5

  },
  border:{
    borderWidth:1,
    borderColor: "lightgrey"
  },
  heightCalendar:{
    height: (deviceHeight - 100 )/8,
    width: (deviceWidth) /7
  },
  text18:{
    fontSize: 16
  },
  borderSpace:{
    width: deviceWidth,
    height: 20,
    backgroundColor: "rgb(240,240,240)"
  }
});
