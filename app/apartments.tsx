import React from "react";
import { ScrollView } from "react-native";
import { Stack, Text, XStack } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Link } from "expo-router";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

type RootStackParamList = {
  Home: undefined;
  Apartments: undefined;
  Inspection: undefined;
};

const apartments = [
  { id: 1, name: "Apartment A", status: "Completed" },
  { id: 2, name: "Apartment B", status: "Completed" },
  { id: 3, name: "Apartment C", status: "Completed" },
  { id: 4, name: "Apartment D", status: "Pending" },
  { id: 5, name: "Apartment E", status: "Pending" },
];

export default function Apartments() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack flex={1} backgroundColor="$background" padding="$4">
        <ScrollView>
          {apartments.map((apt, index) => (
            <XStack
              key={apt.id}
              padding="$4"
              backgroundColor={index % 2 === 0 ? "#F0F0F0" : "#FFFFFF"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="$6" fontWeight="bold">{apt.name}</Text>
              <Link href={"/inspection"}>
                {apt.status}
              </Link>
            </XStack>
          ))}
        </ScrollView>
      </Stack>
    </TamaguiProvider>
  );
}

