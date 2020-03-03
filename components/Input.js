import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput
        maxLength={35}
        placeholder="Enter your task here"
        style={styles.input}
        onChangeText={input => props.textChange(input)}
        value={props.input}
        underlineColorAndroid="transparent"
      />

      <View style={styles.counter}>
        <Text style={styles.counterText}>{props.input.length}/35</Text>
      </View>

      <TouchableOpacity style={styles.add} onPress={props.addNew}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  input: {
    backgroundColor: "#F3F3F3",
    flex: 1,
    fontSize: 15,
    height: 50,
    paddingLeft: 20
  },
  add: {
    width: 50,
    backgroundColor: "#11d97f",
    justifyContent: "center",
    alignItems: "center"
  },
  addText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#323232"
  },
  counter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F3"
  },
  counterText: {
    fontSize: 12,
    opacity: 0.4,
    padding: 10
  }
});

export default Input;
