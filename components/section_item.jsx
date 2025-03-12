import { View, Text } from "react-native";

function SectionItem({ title, value }) {
  return (
    <View
      style={{
        paddingBottom: 7,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          color: "#736f6f",
        }}
      >
        {title}
      </Text>
      <Text>{value}</Text>
    </View>
  );
}

export default SectionItem;
