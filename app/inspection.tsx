import React from "react"
import { Button, Text, YStack, Stack } from "tamagui"
import { NavigationContainer } from "@react-navigation/native"
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

type RootStackParamList = {
  Home: undefined;
  Apartments: undefined;
  Inspection: undefined;
};

export default function Inspection() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="$6" fontWeight="bold">Inspection Page</Text>
      </Stack>
    </TamaguiProvider>

  )
}
