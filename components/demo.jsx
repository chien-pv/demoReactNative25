import { View, Text } from "react-native";
import { memo } from "react";

const Demo = memo(function Demo() {
  console.log("demo");
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
});
export default Demo;
