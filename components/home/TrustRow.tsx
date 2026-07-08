import { StyleSheet, Text, View } from "react-native";

import { FONT } from "@/constants/Fonts";
import { HeadsetIcon, LockIcon, ShieldIcon } from "./icons";

export function TrustRow() {
  return (
    <View style={styles.row}>
      <View style={styles.item}>
        <ShieldIcon />
        <Text style={styles.text}>안전한 거래</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <LockIcon />
        <Text style={styles.text}>개인정보 보호</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <HeadsetIcon />
        <Text style={styles.text}>전문 상담 지원</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#F1F0F4",
  },
  item: {
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: 10,
    color: "#8D8C99",
    fontFamily: FONT,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E4EA",
  },
});
