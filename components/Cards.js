import React from "react";
import checktrue from "../assets/checked.png";
import checkfalse from "../assets/unchecked.png";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

export default class Cards extends React.Component {
  render() {
    const Cards = this.props.Cards;

    return (
      <TouchableOpacity
        style={styles.Cards}
        onPress={() => this.props.toggleStatus()}
      >
        <View>
          {Cards.status ? (
            <Image style={styles.checkbox} source={checktrue} opacity={0.3} />
          ) : (
            <Image style={styles.checkbox} source={checkfalse} />
          )}
        </View>

        <View style={styles.content}>
          <Text
            style={
              Cards.status
                ? { textDecorationLine: "line-through", opacity: 0.3 }
                : { textDecorationLine: "none" }
            }
          >
            {Cards.title}
          </Text>
        </View>

        <Button
          style={styles.buttonLayout}
          title="   ✖   "
          color={Cards.status ? "lightgrey" : "crimson"}
          onPress={() => this.props.removeItem()}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Cards: {
    width: "100%",
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20
  },

  removeButton: {
    width: 100
  },

  checkbox: {
    width: 20,
    height: 20
  }
});
