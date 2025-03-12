import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Header({ title, isIcon }) {
  return (
    <View
      style={{
        paddingTop: 30,
        height: 10,
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Pressable>
          {isIcon && <AntDesign name="left" size={24} color="black" />}
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          paddingRight: 5,
        }}
      >
        <Pressable>
          <AntDesign name="bars" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
