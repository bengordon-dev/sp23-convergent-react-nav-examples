import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Lincoln(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={require("../assets/lincoln.jpg")}
      />
      <TouchableOpacity onPress={props.next} style={[styles.button, {backgroundColor: "red"}]}>
        <Text style={{color: "white"}}>Next President</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.goHome} style={[styles.button, {backgroundColor: "#4477ee"}]}>
        <Text style={{color: "white"}}>Go Home</Text>
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
    padding: 8,
    borderRadius: 40,
    marginTop: 15,

  }
});
