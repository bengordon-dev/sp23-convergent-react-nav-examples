import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animal from "./Animal";
import Platypus from "./Platypus";

const Stack = createNativeStackNavigator();

export default function Mammals(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Vote for your favorite mammal</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Dog")}
      >
        <Text style={styles.buttonText}>Dog</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Cat")}
      >
        <Text style={styles.buttonText}>Cat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Platypus")}
      >
        <Text style={styles.buttonText}>Platypus</Text>
      </TouchableOpacity>
    </View>
  );
}

export function MammalNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Mammals}
        options={{
          headerTitle: "Mammals",
        }}
      />
      <Stack.Screen
        name="Dog"
        children={() => (
          <Animal
            image={require("../../assets/dog.jpeg")}
            votes={props.dogVote}
            setVotes={props.setDogVote}
          />
        )}
      />
      <Stack.Screen
        name="Cat"
        children={() => (
          <Animal
            image={require("../../assets/cat.jpeg")}
            votes={props.catVote}
            setVotes={props.setCatVote}
          />
        )}
      />
      <Stack.Screen
        name="Platypus"
        children={() => (
          <Platypus
            image={require("../../assets/platypus.jpeg")}
            votes={props.catVote}
            setVotes={props.setCatVote}
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
