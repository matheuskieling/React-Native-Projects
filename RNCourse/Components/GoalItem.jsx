import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, onPress }) {
  return (
    <View style={styles.goalsListItem}>
      <Pressable
        android_ripple={{color: "#ccc"}}
        onPress={() => onPress(item.index)}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalsListItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsListItem: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#aaa",
    marginBottom: 5,
    boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
  },
  goalsListItemText: {
    padding: 10,
  },
});
