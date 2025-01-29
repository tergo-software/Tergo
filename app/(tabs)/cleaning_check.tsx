import { Text, View, StyleSheet } from "react-native";

export default function Cleaning_Check() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This page is where we will put cleaning check functionality
      </Text>
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
});
