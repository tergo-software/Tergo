import { Stack } from "expo-router";
import Navbar from "./components/NavBar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="crm" options={{ title: "CRM" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
