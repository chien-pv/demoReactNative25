import { View, Text, Button, Alert, Image } from "react-native";
import SectionItem from "./section_item";

function Section({ titleBtn, vImage, title, nameEvent, date, local }) {
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
        {title}
      </Text>
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#ffffff",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <SectionItem title="Tên Sự Kiện" value={nameEvent} />
          <SectionItem title="Ngày diễn ra" value={date} />
          <SectionItem title="Địa điểm" value={local} />

          {titleBtn && (
            <Button
              title="Chi tiết"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          )}

          {vImage && (
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={vImage}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export default Section;
