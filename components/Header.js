import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = props => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}> {props.title} </Text>
      </View>
      <Button
        style={styles.clear}
        onPress={() => props.clearAll()}
        title="Clear List"
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    backgroundColor: "#323232",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
    // textTransform: 'uppercase',
  },

  clear: {
    color: "white",
    marginRight: 20
  }
});

export default Header;
