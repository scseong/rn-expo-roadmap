import { StyleSheet, Text, TextInput, View } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";

export function MemoBox({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>MEMO</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="메모를 입력해주세요."
        placeholderTextColor="#ACAAB5"
        multiline
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 14,
  },
  label: {
    fontSize: 11.5,
    fontFamily: FONT_BOLD,
    color: "#5C5A66",
    marginBottom: 8,
  },
  input: {
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#EEEDF3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 12.5,
    color: "#17151D",
    textAlignVertical: "top",
  },
});
