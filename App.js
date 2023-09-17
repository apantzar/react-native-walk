import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false)

  function startAddGoalHandler(){
    setModalVisibility(true)
  }
  function endAddGoalHandler(){
    setModalVisibility(false)
  }
  //adding to existing array values
  function addGoalHandler(enteredText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("delete", id);
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter(goal=> goal.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" color="grey" onPress={startAddGoalHandler}/>
      <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} delete={deleteGoalHandler} id={itemData.item.id}/>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
