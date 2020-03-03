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
        style={styles.cardContainer}
        onPress={() => this.props.toggleStatus()}
      >
        <View style={styles.Cards}>
          <View>
            {Cards.status ? (
              <Image style={styles.checkBox} source={checktrue} opacity={0.3} />
            ) : (
              <Image style={styles.checkBox} source={checkfalse} />
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
        </View>

        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={() => this.props.removeItem()}
        >
          <View
            style={styles.buttonStyle}
            backgroundColor={Cards.status ? "lightgrey" : "#d33336"}
          >
            <Text style={styles.buttonText}>✖</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  Cards: {
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    // flexGrow: 1,
    width: "85%",
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  checkBox: {
    width: 20,
    height: 20,
    marginRight: 10
  },

  buttonLayout: {
    width: "15%"
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    color: "black",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 15
  }
});
