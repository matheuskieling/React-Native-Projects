import {Image, Modal, StyleSheet, Text, TextInput, View} from "react-native";
import StyleButton from "./StyleButton";
import { useState } from "react";

export default function GoalInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    setIsVisible(false);
    onSubmit(input.trim());
    setInput("");
  };

  const handleCancel = () => {
    setIsVisible(false);
    setInput("");
  };

  return (
    <>
      <View style={{ height: 50 }}>
        <StyleButton
          title="Add new goal"
          backgroundColor={"green"}
          color={"white"}
          onPress={() => setIsVisible(true)}
        />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <View style={{justifyContent: "center", flex: 1}}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
          <View style={{padding: 20, alignItems: "center", justifyContent: "center", }}>
            <Text>Add your new Goal</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={{height: 50}}>
              <TextInput
                style={styles.textInput}
                placeholder="Your Goal"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={handleSubmit}
              />
            </View>
            <View style={styles.actionsContainer}>
              <View style={{flex: 2}}>
                <StyleButton
                  title="Add Goal"
                  backgroundColor={"green"}
                  color={"white"}
                  onPress={handleSubmit}
                />
              </View>
              <View style={{flex: 1}}>
                <StyleButton
                  title="Cancel"
                  backgroundColor={"#ccc"}
                  color={"black"}
                  onPress={handleCancel}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  inputContainer: {
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
});
