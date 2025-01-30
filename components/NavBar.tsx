import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Navbar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#333",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Tergo</Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Link href="/" asChild>
          <Pressable>
            <Text style={{ color: "white" }}>Home</Text>
          </Pressable>
        </Link>
        <Link href="../about" asChild>
          <Pressable>
            <Text style={{ color: "white" }}>About</Text>
          </Pressable>
        </Link>
        <Link href="../crm" asChild>
          <Pressable>
            <Text style={{ color: "white" }}>CRM</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
