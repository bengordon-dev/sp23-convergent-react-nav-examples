import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Animal({ image, votes, setVotes }) {
  const handleVote = (increment) => {
    setVotes(votes + increment);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.voteText}>Votes: {votes}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleVote(1)} style={styles.button}>
          <Text style={styles.buttonText}>Upvote</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleVote(-1)} style={styles.button}>
          <Text style={styles.buttonText}>Downvote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "50%",
    width: "80%",
    aspectRatio: 1,
  },
  voteText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
