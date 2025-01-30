import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the test mobile about page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
