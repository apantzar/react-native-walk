import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalTextc}>{props.text}</Text>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: "#5e0acc",
        padding: 8,
        color: "white",
    },
    goalTextc:{
        color:'white'
    }
});
