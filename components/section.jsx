import { View, Text, Button, Alert, Image } from "react-native";
import SectionItem from "./section_item";
import { memo, useContext } from "react";
import EventContext from "./context";

const Section = memo(function Section({
  titleBtn,
  vImage,
  title,
  nameEvent,
  date,
  local,
}) {
  console.log("Section");
  const value = useContext(EventContext);
  console.log(value);
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
          <SectionItem title="Tên Sự Kiện" value={value.nameEvent} />
          <SectionItem title="Ngày diễn ra" value={value.date} />
          <SectionItem title="Địa điểm" />
        </View>
      </View>
    </View>
  );
});

export default Section;
