import React from "react";
import { Button, Text, YStack } from "tamagui";
import config from "../tamagui.config";

export default function Index() {
  return (
      <YStack>
        <Text>Welcome to Tamagui WEB! How are you?</Text>
        <Button onPress={() => console.log("Button pressed")}>Click Me</Button>
      </YStack>
  );
}
