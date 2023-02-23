import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animal from "./Animal";

export default function Birds() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Vote for your favorite bird</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Duck</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Parrot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Goose</Text>
      </TouchableOpacity>
    </View>
  );
}
/*
Pages we want to be able to navigate to:
  Duck: ../../assets/duck.jpeg
  Parrot: ../../assets/parrot.jpeg
  Goose: ../../assets/goose.jpeg
*/
export function BirdNavigator(props) {
  return <Birds />;
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
