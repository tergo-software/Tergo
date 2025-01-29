import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Double_Nested() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is to go home</Text>
      <Link href="/" style={styles.button}>
        Go to home
      </Link>
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
