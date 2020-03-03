import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import Cards from "./components/Cards";

export default class App extends React.Component {
  state = {
    input: "",
    list: []
  };

  addNew() {
    let list = this.state.list;

    if (this.state.input == "") {
      Alert.alert("Whoops!", "Please enter a task.");
    } else {
      list.unshift({
        id: list.length + 1,
        title: this.state.input,
        status: false
      });

      this.setState({
        list,
        input: ""
      });
    }
  }

  toggleStatus(item) {
    let list = this.state.list;

    list = list.map(check => {
      if (check.id == item.id) {
        check.status = !check.status;
      }

      return check;
    });

    this.setState({ list });
  }

  removeItem(item) {
    let list = this.state.list;

    list = list.filter(check => check.id !== item.id);

    this.setState({ list });
  }

  clearAll() {
    let list = this.state.list;

    if (list.length <= 0) {
      console.log("cleared empty list");
    } else {
      Alert.alert(
        "Please confirm.",
        "Are you sure you want to clear all tasks?",
        [
          {
            text: "Not Yet",
            onPress: () => console.log("Not Yet Pressed"),
            style: "cancel"
          },
          { text: "Clear All", onPress: () => this.setState({ list: [] }) }
        ],
        { cancelable: true }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <Header
          title="My Tew-Dew List"
          clearAll={() => this.clearAll()}
          list={this.state.list}
        />
        <Input
          textChange={input => this.setState({ input })}
          addNew={() => this.addNew()}
          input={this.state.input}
        />
        <FlatList
          data={this.state.list}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Cards
                Cards={item}
                toggleStatus={() => this.toggleStatus(item)}
                removeItem={() => this.removeItem(item)}
              />
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusbar: {
    height: 44,
    backgroundColor: "#323232"
  }
});
