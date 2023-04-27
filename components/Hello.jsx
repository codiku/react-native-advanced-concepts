import { Text, TouchableOpacity } from "react-native";
import { memo } from "react";

export const Hello = memo(({ onPress }) => {
  console.log("Render <Hello/>");
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Hello :)</Text>
    </TouchableOpacity>
  );
});
