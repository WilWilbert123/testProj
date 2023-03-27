import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const SignUpScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        name="firstName"
      />
      <TextInput
        style={styles.input}
        placeholder="Middle Name"
        name="midleName"
      />
      <TextInput style={styles.input} placeholder="Last Name" name="lastName" />
      <TextInput style={styles.input} placeholder="Birthday" name="birthday" />
      <TextInput style={styles.input} placeholder="Age" name="age" />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        name="phoneNumber"
      />
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => console.log("Cancel pressed")} />
        <Button title="Next" onPress={() => console.log("Next pressed")} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});
