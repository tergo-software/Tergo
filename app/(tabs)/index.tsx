import React from 'react';
import { Button, Text, YStack, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <YStack>
        <Text>Welcome to Tamagui! How are you?</Text>
        <Button onPress={() => console.log('Button pressed')}>Click Me</Button>
      </YStack>
    </TamaguiProvider>
  );
}