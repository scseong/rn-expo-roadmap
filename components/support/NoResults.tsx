import { StyleSheet, Text } from "react-native";

import { FONT } from "@/constants/Fonts";

export function NoResults({ message }: { message: string }) {
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#9694A0",
    fontSize: 14,
    fontFamily: FONT,
    lineHeight: 24,
  },
});
