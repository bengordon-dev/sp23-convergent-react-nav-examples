import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>President Viewer</Text>

      <TouchableOpacity onPress={() => props.setPage("washington")} style={[styles.button, {backgroundColor: "green"}]}>
        <Text style={styles.buttonText}>Washington</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.setPage("lincoln")} style={[styles.button, {backgroundColor: "#4477ee"}]}>
        <Text style={styles.buttonText}>Lincoln</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.setPage("biden")} style={[styles.button, {backgroundColor: "red"}]}>
        <Text style={styles.buttonText}>Biden</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    height: 300,
    width: 300,
  },
  button: {
    padding: 12,
    borderRadius: 50,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
  }
});
