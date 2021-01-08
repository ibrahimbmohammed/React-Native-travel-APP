import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import learnMoreData from "../assets/data/learnMoreData";
import discoverData from "../assets/data/discoverData";
import profile from "../assets/images/person.png";
import { color } from "react-native-reanimated";
import Entypo from "react-native-vector-icons/Entypo";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Font, AppLoading } from "expo";

export default function Home({ navigation }) {
  const renderDiscoveryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <ImageBackground
          source={item.image}
          style={[styles.discoverItemPic,{marginLeft:item.id === 'discovery-1'? 20: 0}]}
          imageStyle={styles.discoverItemPhoto}
        >
          <Text style={styles.discoverTextPhoto}>{item.title}</Text>
          <View style={styles.discoverTextSubPhoto}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverTextSubPhoto2}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({ item }) => {
    return (
      <View style={styles.activityItemCon}>
        <Image style={styles.tinyLogo} source={item.image} />
        <Text style={styles.activitySingleItem}>{item.title}</Text>
      </View>
    );
  };
  const renderLearnMoreItem = ({ item }) => {
    return (
      <View style={styles.LearnMoreCon}>
        <ImageBackground
          source={item.image}
          style={styles.LearnMoreItemPic}
          imageStyle={styles.LearnMorePhoto}
        >
          <Text style={styles.LearnMoreTextPhoto}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <Feather
                name="menu"
                size={32}
                color={colors.black}
                style={styles.menuIcon}
              />
              <Image source={profile} style={styles.profileImage} />
            </View>
          </SafeAreaView>
          {/* Discover */}
          <View style={styles.discoveryWrapper}>
            <Text style={styles.discoverText}>Discovery</Text>
            <View style={styles.discoveryItems}>
              <Text style={[styles.discoverylist, { color: colors.orange }]}>
                All
              </Text>
              <Text style={styles.discoverylist}>Discoveries</Text>
              <Text style={styles.discoverylist}>Cities</Text>
              <Text style={styles.discoverylist}>Experiences</Text>
            </View>
            <View style={styles.discoverPicsection}>
              <FlatList
                data={discoverData}
                renderItem={renderDiscoveryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              ></FlatList>
            </View>
          </View>
          {/* Activity */}
          <View style={styles.activityWrapper}>
            <Text style={styles.activityMainText}>Activities</Text>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
          {/* Learn More */}
          <View style={styles.LearnMoreWrapper}>
            <Text style={styles.activityMainText}>Learn More</Text>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoveryWrapper: {
    marginLeft: 20,
  },
  discoverText: {
    fontFamily: "Lato",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  discoveryItems: {
    flexDirection: "row",
    marginTop: 10,
  },
  discoverylist: {
    fontSize: 16,
    marginRight: 30,
    color: colors.darkGray,
  },
  discoverItemPic: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  discoverItemPhoto: {
    borderRadius: 20,
  },
  discoverTextPhoto: {
    fontSize: 18,
    color: colors.white,
  },
  discoverTextSubPhoto: {
    flexDirection: "row",
    paddingTop: 10,
  },
  discoverTextSubPhoto2: {
    color: colors.white,
    fontSize: 12,
  },
  activityWrapper: {},
  activityMainText: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  activityItemCon: {
    marginTop: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  activitySingleItem: {
    fontSize: 13,
    color: colors.darkGray,
  },
  LearnMoreCon: {
    marginLeft: 20,
  },
  LearnMoreItemPic: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    //marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  LearnMorePhoto: {
    borderRadius: 20,
  },
  LearnMoreTextPhoto: {
    fontSize: 18,
    color: colors.white,
  },
  LearnMoreWrapper: {},
});
