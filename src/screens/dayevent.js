import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { Months } from "../data/months";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { deleteEvent } from "../actionCreator"

export default function Dayevent({ navigation }) {
  const state = useSelector((state) => state.entities.admin);
  const dispatch = useDispatch()
  const [EventObject, setEventObject] = useState();
  //   const Event =
  //     state.days.length !== 0
  //       ? state.days.filter((item) => item.date === state.dayselected.day)
  //       : null;

  const EventUpdater = () => {
    state.days
      .filter((i) => i.date === state.dayselected.day)
      .map((item) => setEventObject(item));
  };
  useEffect(() => {
    EventUpdater();
  }, [state.dayselected.day, state]);
  return (
    <>
      <View style={[styles.borderSpace]}></View>
      <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
        <View style={[styles.flex, styles.space_between]}>
          <Text style={[styles.bold, styles.boldText]}>Events</Text>
          <Text style={[styles.bold, styles.boldText]}>
            {state.dayselected.day} / {Months[state.dayselected.month].label} /{" "}
            {state.dayselected.year}
          </Text>
          <ButtonFeedBackAndOpacity
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={[styles.borderRounded, styles.bgRed]}>
              <Text
                style={[
                  styles.textWhite,
                  styles.paddingVerticalSmall,
                  styles.paddingHorizontal,
                ]}
              >
                Add New
              </Text>
            </View>
          </ButtonFeedBackAndOpacity>
        </View>
        <View>
          {EventObject !== undefined
            ? EventObject.event.length !== 0
              ? EventObject.event.map((item) => (
                  <View
                    style={[
                      styles.flexColumn,
                      styles.paddingVertical,
                      styles.paddingHorizontal,
                    ]}
                  >
                    {item.events.map((it) => (
                      <View
                        style={[
                          styles.border,
                          styles.marginTop,
                          styles.flex,
                          styles.space_between,
                        ]}
                      >
                        <View
                          style={[
                            styles.paddingHorizontal,
                            styles.paddingVertical,
                          ]}
                        >
                          <View style={styles.flex}>
                            <Text style={[styles.bold]}>{it.timeStart}</Text>
                            <Text
                              style={[styles.paddingHorizontal, styles.bold]}
                            >
                              {it.timeEnd}
                            </Text>
                          </View>
                          <Text>{it.description}</Text>
                        </View>
                        <View style={[styles.flexColumn, styles.space_between]}>
                          <ButtonFeedBackAndOpacity
                            onPress={() => dispatch(deleteEvent({parent:item.id,child:it.id}))}
                          >
                            <View style={[styles.borderRounded, styles.bgRed]}>
                              <Text
                                style={[
                                  styles.textWhite,
                                  styles.paddingVerticalSmall,
                                  styles.paddingHorizontal,
                                ]}
                              >
                                Delete
                              </Text>
                            </View>
                          </ButtonFeedBackAndOpacity>
                          <ButtonFeedBackAndOpacity
                            onPress={() => navigation.navigate("Settings")}
                          >
                            <View style={[styles.borderRounded, styles.bgRed]}>
                              <Text
                                style={[
                                  styles.textWhite,
                                  styles.paddingVerticalSmall,
                                  styles.paddingHorizontal,
                                ]}
                              >
                                Edit
                              </Text>
                            </View>
                          </ButtonFeedBackAndOpacity>
                        </View>
                      </View>
                    ))}
                  </View>
                ))
              : null
            : null}
          {/* {EventObject.events !== undefined
            ? EventObject.events.length !== 0
              ? EventObject.events.map((item) => (
                  <Text>
                    {console.warn(item.timeStart)}
                  </Text>
                ))
              : null
            : null} */}
        </View>
      </View>
    </>
  );
}
