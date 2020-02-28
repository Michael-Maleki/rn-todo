import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#323232",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textTransform: 'uppercase',
  }
});

export default Header;
