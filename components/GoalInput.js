import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#f2f2f7',
    marginBottom:'50%',
    backgroundColor: '#f2f2f7'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    padding: 8,
  },
  buttonConatiner: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 150,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});
