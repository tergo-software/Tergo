import React, { useState } from "react";
import { Button, Text, YStack, Stack } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Link } from "expo-router";
import { Linking, Pressable } from 'react-native';
import Apartments from "./apartments";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

export default function Index() {
  const navigation = useNavigation();

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center" padding="$4">
        <YStack space="$4" alignItems="center">
          <Text fontSize="$6" fontWeight="bold" color="$color">
            Welcome to Tergo!
          </Text>
          <Link href={"/apartments"} style={{ marginHorizontal: 'auto'}} asChild>
            <Pressable>
              <Text>Go to apartments</Text>
            </Pressable>
          </Link>
        </YStack>
      </Stack>
    </TamaguiProvider>
  );
}