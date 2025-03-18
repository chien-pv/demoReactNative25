import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";
import { useState, useEffect, useRef, useCallback } from "react";

import EventContext from "./components/context";

import { Header } from "./components/header";
import Section from "./components/section";
import image from "./assets/icon.png";
import Demo from "./components/demo";
export default function App() {
  const inputRef = useRef(null);
  let [count, setCount] = useState(0);

  // let [text, setText] = useState("");

  function handleCount() {
    console.log(inputRef.current.value);
    setCount((state) => state + 1);
  }

  const handelChange = useCallback(() => {}, []);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  console.log("APP");
  const event = {
    titleBtn: "Chi tiết",
    title: "Tết Dương Lịch",
    nameEvent: "Bắn Pháo Hoa",
    date: "22/2/2025",
    local: "Đà Nẵng",
  };
  return (
    <EventContext.Provider value={event}>
      <View>
        <Section
          style={{
            flex: 1,
          }}
        />
      </View>
    </EventContext.Provider>
  );
}
