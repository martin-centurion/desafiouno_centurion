import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Pressable
} from "react-native";
import React, { useState } from "react";
import TaskList from "../components/TaskList";
import TopBar from "../components/TopBar";
import ModalTask from "../components/ModalTask";

const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList)
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({})

  const onAddTask = () => {
      setList([
          ...list,
          {
              id: list.length + 1,
              task: input,
              completed: false
          }
      ])
  }

  const onPressTask = (task) => {
      console.log(task)
      setTaskActive(task)
      setModalVisible(!modalVisible)
  }

  return (
      <View style={styles.container}>
          <TopBar
                input={input}
                onAddTask={onAddTask}
                setInput={setInput}          
            />
            <TaskList
                list={list}
                onPressTask={onPressTask}
            />

            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
            />
      </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
});