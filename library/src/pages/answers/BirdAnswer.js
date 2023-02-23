import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animal from "./Animal";
const Stack = createNativeStackNavigator();

export default function Birds({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Vote for your favorite bird</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Duck")}
      >
        <Text style={styles.buttonText}>Duck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Parrot")}
      >
        <Text style={styles.buttonText}>Parrot</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Goose")}
      >
        <Text style={styles.buttonText}>Goose</Text>
      </TouchableOpacity>
    </View>
  );
}

export function BirdNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Birds}
        options={{ headerTitle: "Birds" }}
      />
      <Stack.Screen
        name="Duck"
        children={() => (
          <Animal
            image={require("../../assets/duck.jpeg")}
            votes={props.duckVote}
            setVotes={props.setDuckVote}
          />
        )}
      />
      <Stack.Screen
        name="Parrot"
        children={() => (
          <Animal
            image={require("../../assets/parrot.jpeg")}
            votes={props.parrotVote}
            setVotes={props.setParrotVote}
          />
        )}
      />
      <Stack.Screen
        name="Goose"
        children={() => (
          <Animal
            image={require("../../assets/goose.jpeg")}
            votes={props.gooseVote}
            setVotes={props.setGooseVote}
          />
        )}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db",
    width: "60%",
    height: "10%",
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  pageText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
