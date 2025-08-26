import {FlatList, Modal, StyleSheet, Text, View} from "react-native";
import GoalInput from "../Components/GoalInput";
import GoalItem from "../Components/GoalItem";
import useGoals from "../Hooks/useGoals";
import StyleButton from "../Components/StyleButton";
import {useState} from "react";

export default function Goal() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    goals,
    handleAddGoal,
    handleRemoveGoal
  } = useGoals();

  return (
    <View style={styles.appContainer}>
      <View
        style={styles.goalsContainer}
      >
        <Text style={{marginBottom: 10, fontSize: 16}}>
          Your Goals:
        </Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const item = {text: itemData.item, index: itemData.index }
            return <GoalItem item={item} onPress={handleRemoveGoal} />
          }}
          keyExtractor={(key, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <GoalInput onSubmit={handleAddGoal} />
    </View>
  )

}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
