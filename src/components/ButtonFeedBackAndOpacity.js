import React from "react";
import { TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { Platform } from "react-native";
import { styles } from "../styles/styles"

function ButtonFeedBackAndOpacity(props) {
  const Style = props.style;
  const Press = props.onPress;  
  const Children = props.children;
  return (
    <>
      {Platform.OS === "android" && Platform.Version >= 21 ? (
        <TouchableNativeFeedback
          style={Style}
          onPress={(event) => Press(event)}>
              {Children}
          </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity style={Style} onPress={(event)=> Press() }>
            {Children}
        </TouchableOpacity>
      )
      }
    </>
  );
}

export default React.memo(ButtonFeedBackAndOpacity)