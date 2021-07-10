import React from "react"
import Calendar from "../screens/calendar"
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// import * as React from 'react';
import { View, Text, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { styles } from "../styles/styles";
import Feather from "react-native-vector-icons/Feather";
import DayEvent from "../screens/dayevent"
import AddEvents from "../screens/addevents"

const Tab = createMaterialTopTabNavigator();


function App({navigation}) {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Calendar navigation={navigation} />
        <DayEvent navigation={navigation} />
      </ScrollView>
    );
  }
  
  function SettingsScreen() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }



export default function CalendarTabs() {
    return (
      <>
        <SafeAreaView style={{ backgroundColor: "white" }}>
          <View
            style={[
              styles.paddingHorizontal,
              styles.paddingVerticalSmall,
              styles.flex, styles.alignCenter
            ]}
          >
            <View>
              <Feather name="menu" size={20} />
            </View>
            <View>
            <Text
              style={[
                // styles.paddingVertical,
                styles.paddingHorizontal,
                styles.text18,
              ]}
            >
              Calendar
            </Text>
            </View>
          </View>
        </SafeAreaView>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={App} />
          <Tab.Screen name="Add Events" component={AddEvents} />
        </Tab.Navigator>
      </>
    );
  }