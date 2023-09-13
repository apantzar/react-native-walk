import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //adding to existing array values
  function addGoalHandler(enteredText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <ScrollView>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goals) => (
          <View key={goals} style={styles.goalItem}>
            <Text style={{color:'white'}}>{goals}</Text>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },

  goalItem: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});
