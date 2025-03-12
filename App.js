import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Header } from "./components/header";
import Section from "./components/section";
import image from "./assets/icon.png";

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
        titleBtn="Chi tiết"
        title="Tết Dương Lịch"
        nameEvent="Bắn Pháo Hoa"
        date="22/2/2025"
        local="Đà Nẵng"
      />
      <Section
        style={{
          flex: 1,
        }}
        vImage={image}
        title="Chung kết SeaGame"
        nameEvent="Việt Nam & Thái Lan"
        date="30/6/2025"
        local="Sân Vận Động Mỹ Đình"
      />
    </View>
  );
}
