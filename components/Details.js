import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import colors from "../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;

export default function Details({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.detailsWrapper}>
      <ImageBackground source={item.imageBig} style={styles.datialsBigPic}>
        <TouchableOpacity>
          <Entypo name="chevron-left" size={48} color={colors.white} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.infoWrapper}>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    flex: 1,
  },
  datialsBigPic: {},
  datialsBigPic: {
    height: height * 0.6,
  },
  infoWrapper: {
    marginTop: -20,
    borderRadius: 25,
  },
});
