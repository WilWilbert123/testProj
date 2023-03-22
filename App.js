import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SignUpScreen from "./src/SignUpScreen/SignUpScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createMaterialTopTabNavigator();

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!email || !password);
  }, [email, password]);

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <Icon
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color="gray"
          onPress={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: 10, top: 38 }}
        />
        <Text>{}</Text>
        <Text>
          ---------------------------------or-----------------------------------
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.socialButtonContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="facebook" size={20} color="white" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton1}>
              <MaterialCommunityIcons name="google" size={20} color="white" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton2}>
              <MaterialCommunityIcons name="apple" size={20} color="white" />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            buttonDisabled
              ? styles.disabledButton
              : { backgroundColor: "green" },
          ]}
          onPress={handleLogin}
          disabled={buttonDisabled}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { marginTop: 40 },
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Sign Up" component={SignUpScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    backgroundColor: "gray",
    paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialButtonContainer: {
    flexDirection: "row",
  },
  socialButton: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  socialButton1: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  socialButton2: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  socialButtonText: {
    color: "white",
    fontSize: 14,
  },
  disabledButton: {
    Backgroundcolor: "gray",
  },
});

export default App;
