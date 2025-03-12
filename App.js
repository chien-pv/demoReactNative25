import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Header } from "./components/header";
import Section from "./components/section";

export default function App() {
  return (
    <View
      style={{
        paddingTop: 30,
        backgroundColor: "#c7cbc5",
        flex: 1,
      }}
    >
      <Section
        style={{
          flex: 1,
        }}
      />
      <Section
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}
