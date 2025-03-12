import { View, Text } from "react-native";

function Section() {
  return (
    <View
      style={{
        margin: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Header
      </Text>
      <View
        style={{
          marginTop: 5,
          height: 100,
          backgroundColor: "#ffffff",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "#736f6f",
            }}
          >
            Tên Sự Kiện
          </Text>
          <Text>Bắn Pháo Hoa</Text>
        </View>
      </View>
    </View>
  );
}

export default Section;
