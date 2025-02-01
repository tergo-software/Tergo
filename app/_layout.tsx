import { Platform } from "react-native";
import { Link, Slot, Tabs, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Navbar from "../components/NavBar";

export default function Layout() {
  if (Platform.OS === "web") {
    // Use a basic custom layout on web.
    return (
      <div style={{ flex: 1 }}>
        <Navbar />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
          <Stack.Screen name="crm" options={{ title: "CRM" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </div>
    );
  }
  // Use a native bottom tabs layout on native platforms.
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="apartments"
        options={{
          title: "Apartment",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen name="crm" options={{ href: null }} />
      <Tabs.Screen name="+not-found" options={{ href: null }} />
      <Tabs.Screen name="about" options={{ href: null }} />
      <Tabs.Screen name="inspection" options={{ href: null }} />
    </Tabs>
  );
}
