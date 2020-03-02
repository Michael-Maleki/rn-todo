import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export default class TodoItem extends React.Component {
  render() {
    const TodoItem = this.props.TodoItem;

    return (
      <TouchableOpacity
        style={styles.TodoItem}
        onPress={() => this.props.toggleStatus()}
      >
        <Text
          style={TodoItem.status ? { color: "#42f57b" } : { color: "#313131" }}
        >
          {TodoItem.title}
        </Text>

				<Button 
				title= '✖' 
				color ={TodoItem.status ? "#42f57b" : "#313131"}
				onPress={() => this.props.removeItem()}
				/>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  TodoItem: {
    width: "100%",
    height: 40,
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20
  }
});
