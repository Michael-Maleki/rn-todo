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
        placeholder='Enter your task here'
        style={styles.input}
        onChangeText={input => props.textChange(input)}
        value={props.input}
      />
      <TouchableOpacity style={styles.add} onPress={props.addNew}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  input: {
    backgroundColor: "#F3F3F3",
    flex: 1,
    fontSize: 18,
    height: 35,
    paddingLeft: 20
  },
  add: {
    width: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center"
  },
  addText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#323232"
  }
});

export default Input;
