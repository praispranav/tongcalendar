import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import Button from "../components/ButtonFeedBackAndOpacity";
import { colors } from "../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { allDay, dayClick } from "../actionCreator";
import { Months } from "../data/months";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Calendar(props) {
  // state array for displaying date.
  const [state, setstate] = useState([]);
  const dispatch = useDispatch();
  const Gstate = useSelector((s) => s.entities.admin);
  const date = new Date();
  const EventData = Gstate.eventdata;

  function EventFilter(year, month, date) {
    const YearFIlter = EventData.filter((item) => item.year == year);
    const FilteredEvents = YearFIlter.filter((item) => item.month == month);
    const DayFil = FilteredEvents.filter((item) => item.day == date);
    return DayFil;
  }

  var DayS = [];
  const newDate = (yearId, monthId) => {
    var dt = new Date(yearId, monthId);
    var month = dt.getMonth() + 1;
    var daysInMonth = new Date(yearId, month, 0).getDate();
    for (let i = 0; i < daysInMonth; i++) {
      const day = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"][
        new Date(yearId, monthId, i).getDay()
      ];
      const below10 = () => {
        if (i + 1 <= 9) {
          const Helloabc = i + 1;
          return "0" + Helloabc;
        } else {
          return i + 1;
        }
      };
      var eventFilter = EventFilter(yearId, month, below10());
      const YearName = date.getFullYear();
      const DayName = date.getDate();
      const Inv = i + 1;
      var todayFunc = () => {
        if (
          monthId == date.getMonth() &&
          yearId == YearName &&
          Inv == DayName
        ) {
          return true;
        } else {
          return false;
        }
      };
      var x = { date: i + 1, day: day, event: eventFilter, today: todayFunc() };
      DayS.push(x);
    }
    if (DayS[0].day === "Tue") {
      DayS.splice(0, 0, { date: "Null", day: "Mon" });
    } else if (DayS[0].day === "Wed") {
      DayS.splice(
        0,
        0,
        { date: "Null", day: "Mon", event: "Null" },
        { date: "Null", day: "Tue", event: "Null" }
      );
    } else if (DayS[0].day === "Thr") {
      DayS.splice(
        0,
        0,
        { date: "Null", day: "Mon", event: "Null" },
        { date: "Null", day: "Tue", event: "Null" },
        { date: "Null", day: "Wed", event: "Null" }
      );
    } else if (DayS[0].day === "Fri") {
      DayS.splice(
        0,
        0,
        { date: "Null", day: "Mon", event: "Null" },
        { date: "Null", day: "Tue", event: "Null" },
        { date: "Null", day: "Wed", event: "Null" },
        { date: "Null", day: "Thr", event: "Null" }
      );
    } else if (DayS[0].day === "Sat") {
      DayS.splice(
        0,
        0,
        { date: "Null", day: "Mon", event: "Null" },
        { date: "Null", day: "Tue", event: "Null" },
        { date: "Null", day: "Wed", event: "Null" },
        { date: "Null", day: "Thr", event: "Null" },
        { date: "Null", day: "Fri", event: "Null" }
      );
    } else if (DayS[0].day === "Sun") {
      DayS.splice(
        0,
        0,
        { date: "Null", day: "Mon", event: "Null" },
        { date: "Null", day: "Tue", event: "Null" },
        { date: "Null", day: "Wed", event: "Null" },
        { date: "Null", day: "Thr", event: "Null" },
        { date: "Null", day: "Fri", event: "Null" },
        { date: "Null", day: "Sat", event: "Null" }
      );
    }
    dispatch(allDay(DayS));
    return setstate(DayS);
  };
  const [pageinit, setpageinit] = useState(false);

  const Y = date.getFullYear();
  const m = date.getMonth();
  const [yearSelector, setyearSelector] = useState(2021);
  const [monthSelector, setmonthSelector] = useState(m);

  useEffect(() => {
    newDate(yearSelector, monthSelector);
    setpageinit(true);
  }, [yearSelector, monthSelector, Gstate.eventdata]);

  const dayName = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  const handleMonth = (event) => {
    setmonthSelector(event);
  };
  const Visiblity = (WeekNumber) => {
    if (WeekNumber !== undefined) {
      if (WeekNumber.length !== 0 && WeekNumber !== "Null") {
        return 5;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  const TodayFuncStyle = (WeekNumber) => {
    return WeekNumber === true ? "red" : "black";
  };
  const [DateClick, setDateClick] = useState(new Date());
  const [ModelOpen, setModelOpen] = useState(false);
  const handleEventOpen = (dateEvent, monthEvent, yearEvent) => {
    setModelOpen(true);
    dispatch(dayClick(new Date(yearEvent, monthEvent, dateEvent)));
    setDateClick(new Date(yearEvent, monthEvent, dateEvent));
  };
  const handleDateClick = (event) => {
    dispatch(
      dayClick({ day: event, month: monthSelector, year: yearSelector })
    );
  };
  const handleYearNext = () => {
    setyearSelector(yearSelector + 1);
  };
  const handleYearBack = () => {
    setyearSelector(yearSelector - 1);
  };
  return (
    <>
      {pageinit ? (
        <>
          {/* Year */}
          <View style={[styles.flexColumn, styles.alignCenter, styles.marginTop]}>
            <View style={styles.flex}>
              <Button onPress={() => handleYearBack()}>
                <AntDesign name="arrowleft" size={20} />
              </Button>
              <Text>{yearSelector}</Text>
              <Button onPress={() => handleYearNext()}>
                <AntDesign name="arrowright" size={20} />
              </Button>
            </View>
          </View>
          {/* months */}
          <View
            style={[
              styles.flex,
              styles.space_between,
              styles.paddingHorizontal,
              styles.marginTop,
            ]}
          >
            {Months.slice(0, 6).map((item) => (
              <Button key={item.id} onPress={() => handleMonth(item.id)}>
                <View
                  style={[
                    styles.borderRounded,
                    monthSelector === item.id ? styles.bgpink2 : styles.bgGrey,
                    styles.paddingHorizontal,
                    styles.paddingVerticalSmall,
                  ]}
                >
                  <Text
                    style={
                      monthSelector === item.id
                        ? styles.textWhite
                        : styles.textBlack
                    }
                  >
                    {item.label}
                  </Text>
                </View>
              </Button>
            ))}
          </View>
          <View
            style={[
              styles.flex,
              styles.space_between,
              styles.paddingHorizontal,
              styles.marginTop,
            ]}
          >
            {Months.slice(6, 12).map((item) => (
              <Button key={item.id} onPress={() => handleMonth(item.id)}>
                <View
                  style={[
                    styles.borderRounded,
                    monthSelector === item.id ? styles.bgpink2 : styles.bgGrey,
                    styles.paddingHorizontal,
                    styles.paddingVerticalSmall,
                  ]}
                >
                  <Text
                    style={
                      monthSelector === item.id
                        ? styles.textWhite
                        : styles.textBlack
                    }
                  >
                    {item.label}
                  </Text>
                </View>
              </Button>
            ))}
          </View>

          <View style={[styles.flex]}>
            {dayName.map((i) => (
              <>
                <View key={i} style={[styles.flexColumn]}>
                  <View
                    key={i}
                    style={[
                      styles.heightCalendar,
                      styles.flexColumn,
                      styles.evenly,
                      styles.alignCenter,
                    ]}
                  >
                    <Text style={[styles.boldText, styles.bold]}>{i}</Text>
                  </View>
                  {Gstate.days
                    .filter((item) => item.day === i)
                    .map((item) => {
                      return (
                        <Button
                          key={item.date}
                          onPress={() =>
                            item.date === "Null"
                              ? console.log("No events")
                              : handleDateClick(item.date)
                          }
                        >
                          <View
                            style={[
                              styles.heightCalendar,
                              styles.flexColumn,
                              styles.evenly,
                              styles.alignCenter,
                            ]}
                          >
                            <Text style={{ color: TodayFuncStyle(item.today) }}>
                              {item.date === "Null" ? " " : item.date}
                            </Text>
                            {/* {item.event.length === 0 ? (
                              <Text>No Events</Text>
                            ) : (
                              console.log("Events.Imens", item.date, item.event)
                            )} */}
                            <View
                              style={[
                                colors.eventColorDate,
                                { width: Visiblity(item.event) },
                              ]}
                            ></View>
                          </View>
                        </Button>
                      );
                    })}
                </View>
              </>
            ))}
          </View>
        </>
      ) : null}
    </>
  );
}
