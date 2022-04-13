import react from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet } from "react-native-web";

const Task = (props) => {
  return (
    <View style={styles.todo}>
      <View style={styles.todoLeft}>
        <View style={styles.square}></View>
        <Text style={styles.todoText}>{props.todo}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo:{
    backgroundColor: "#fff",
    padding:10,
    marginBottom:20,
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  todoLeft: {
    borderRadius: 6,
    alignItems: "center",
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width:15,
    height: 15,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  todoText: {
    fontSize: 15,
    maxWidth: 200,
  },
  circular: {
    width:12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius:5
  },
});

export default Task;
