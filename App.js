import React from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import Header from './components/Header';
import Error from './components/Error';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  state = {
      input: '',
      list: [
        { id: 0, title: "start a to-do list", status: false },
        { id: 2, title: "appointment", status: false }
      ]
  }

addNew () {
let list = this.state.list;


list.unshift({
  id: list.length +1,
  title: this.state.input,
  done: false,
})

this.setState({
  list: list,
  input: "",
});

}


  render() {
    const statusbar = (Platform.OS == 'android') ? <View style={styles.statusbar}></View> : <View></View>

    return (
      <View style={styles.container}>
        {statusbar}
        <Header title='My To Do List'/>
        <Input 
          textChange={input => this.setState({ input })} 
          addNew={() => this.addNew()}
        />
        <FlatList 
          data={this.state.list}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({item,index}) => {
            return (
              <TodoItem TodoItem={item} />
            )
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusbar: {
    height: 24,
  },
  
});