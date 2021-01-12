import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Button,
  ColorPropType,
} from "react-native";
import colors from "../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const height = Dimensions.get("window").height;

export default function Details({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.detailsWrapper}>
      <ImageBackground source={item.imageBig} style={styles.datialsBigPic}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.detialsNavs}>
          <Entypo name="chevron-left" size={48} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.detailsPicMainText}>{item.title}</Text>
        <View style={styles.IconTextWrapper}>
          <Entypo name="location-pin" size={18} color={colors.white} />
          <Text style={styles.LocationWrapper}>{item.location}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoWrapper}>
        <Text style={styles.DescriptionStyle}> Description</Text>
        <Text style={styles.DescriptionTextStyle} >{item.description}</Text>
        <View style={styles.ratingsWrapper}>
          <View>
            <Text style={styles.ratingHeadings}>Price</Text>
            <View style={styles.ratingsWrapper2}>
              <Text style={styles.ratingDetails}>$350</Text>
              <Text style={styles.ratingDetailSub}>/person</Text>
            </View>
          </View>
          <View>
            <Text style={styles.ratingHeadings}>Rating</Text>
            <View style={styles.ratingsWrapper2}>
              <Text style={styles.ratingDetails}>4.5</Text>
              <Text style={styles.ratingDetailSub}>/5</Text>
            </View>
          </View>
          <View>
            <Text style={styles.ratingHeadings}>Duration</Text>
            <View style={styles.ratingsWrapper2}>
              <Text style={styles.ratingDetails}>3</Text>
              <Text style={styles.ratingDetailSub}> hours</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    flex: 1,
  },

  datialsBigPic: {
    height: height * 0.6,
  },
  detialsNavs:{
      marginTop:20,
      marginLeft:10
  },
  infoWrapper: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginTop: -20,
    padding: 20,
  },
  detailsPicMainText: {
    fontSize: 28,
    //fontWeight:'bold',
    color: colors.white,
    marginTop: 230,
    paddingLeft: 20,
  },
  IconTextWrapper: {
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
    alignItems: "center",
  },
  LocationWrapper: { color: colors.white, fontSize: 18 },
  DescriptionStyle: {
    fontSize: 24,
    marginLeft: -10,
    paddingBottom: 20,
  },
  DescriptionTextStyle:{
   color:colors.darkGray,
   fontSize:16,
   height:78
  },
  ratingsWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingHeadings: {
    fontSize: 18,
    color: colors.darkGray,
  },
  ratingDetails: {
    fontSize: 35,
    color: colors.orange,
  },
  ratingDetailSub:{
      color:colors.darkGray,
      
  },
  ratingsWrapper2: {
    flexDirection: "row",
   alignItems: 'center',
    
  },

  buttonStyle: {
      marginTop:20,
    padding: 14,
    borderRadius: 15,
    backgroundColor: colors.orange,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonTextStyle:{
      fontSize:20,
      color:colors.white
  }
});
