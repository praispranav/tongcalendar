import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import Button from "../components/ButtonFeedBackAndOpacity";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../actionCreator"

export default function Addevents() {
  const [id, setid] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const Gstate = useSelector((s) => s.entities.admin);
  const dispatch = useDispatch()

  const NewEvent = {
    id: id,
    stat: start,
    end: end,
    description: description,
  };

  const onSubmit = () => {
    const DateSplit = date.split("-");
    const NewArray = [];
    const find = Gstate.eventdata.find((element) => 
        element.month == DateSplit[1] &&
        element.day == DateSplit[0] &&
        element.year == DateSplit[2]
    );
    const AllEvents = () => {
      Gstate.eventdata.filter((item) => {
        if (
          item.month == DateSplit[1] &&
          item.day == DateSplit[0] &&
          item.year == DateSplit[2]
        ) {
          const LocalObject = {
            id: item.id,
            date: item.date,
            month: DateSplit[1],
            year: DateSplit[2],
            day: DateSplit[0],
            events: [NewEvent],
          };
          item.events.map((i) => {
            LocalObject.events.push(i);
          });
          NewArray.push(LocalObject);
        } else {
          NewArray.push(item);
        }
      });
    };
    if (find) {
      AllEvents();
    } else {
      Gstate.eventdata.map((abc)=>{
        NewArray.push(abc)
      })
      NewArray.push({
        id: 212,
        date: date,
        day: DateSplit[0],
        month: DateSplit[1],
        year: DateSplit[2],
        event: [NewEvent],
      });
    }

    dispatch(addEvent(NewArray))
    // console.log(NewArray)
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
        <Text style={styles.bold}>Add Event</Text>
        <View style={[styles.marginTop, styles.border, styles.borderRounded]}>
          <TextInput
            style={[{ paddingHorizontal: 10 }]}
            onChangeText={setid}
            value={id}
            placeholder={"Id Should be unique"}
          />
        </View>
        <View style={[styles.marginTop, styles.flex, styles.evenly]}>
          <View>
            <Text style={styles.smalltext}>Time Start HH:MMam/pm</Text>
            <View
              style={[
                styles.border,
                styles.borderRounded,
                styles.marginVerticalSmall,
              ]}
            >
              <TextInput
                style={[{ paddingHorizontal: 10 }]}
                onChangeText={setstart}
                value={start}
                placeholder={"HH:MMam/pm"}
              />
            </View>
          </View>
          <View>
            <Text style={styles.smalltext}>End Time HH:MMam/pm</Text>
            <View
              style={[
                styles.border,
                styles.borderRounded,
                styles.marginVerticalSmall,
              ]}
            >
              <TextInput
                style={[{ paddingHorizontal: 10 }]}
                onChangeText={setend}
                value={end}
                placeholder={"HH:MMam/pm"}
              />
            </View>
          </View>
        </View>
        <View style={styles.marginTop}>
          <Text>Date - DD-MM-YYYY</Text>
          <View style={[styles.border, styles.borderRounded]}>
            <TextInput
              placeholder={"DD-MM-YYYY"}
              style={styles.paddingHorizontal}
              value={date}
              onChangeText={setdate}
            />
          </View>
        </View>
        <View style={styles.marginTop}>
          <Text>Event Description</Text>
          <View style={[styles.border, styles.borderRounded]}>
            <TextInput
              value={description}
              style={styles.paddingHorizontal}
              onChangeText={setdescription}
              placeholder="Event Description"
            />
          </View>
        </View>
        <Button onPress={() => onSubmit()}>
          <View style={styles.marginVertical}>
            <Text
              style={[
                styles.bgpink2,
                styles.borderRounded,
                styles.paddingHorizontal,
                styles.textCenter,
                styles.textWhite,
                styles.paddingVerticalSmall,
                styles.bold,
              ]}
            >
              Submit
            </Text>
          </View>
        </Button>
      </View>
    </ScrollView>
  );
}
