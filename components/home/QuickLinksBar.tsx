import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { Chevron, CoinsBadgeIcon, StoreIcon } from "./icons";

export function QuickLinksBar() {
  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        <Pressable style={styles.item}>
          <StoreIcon />
          <View style={styles.flex1}>
            <Text style={styles.title}>창업 문의</Text>
            <Text style={styles.desc}>대리점·판매점 창업 안내</Text>
          </View>
          <Chevron color="#C7C5D1" size={13} />
        </Pressable>
        <View style={styles.divider} />
        <Pressable style={styles.item}>
          <CoinsBadgeIcon />
          <View style={styles.flex1}>
            <Text style={styles.title}>지원금 적립</Text>
            <Text style={styles.desc}>적립하고 현금처럼 사용</Text>
          </View>
          <Chevron color="#C7C5D1" size={13} />
        </Pressable>
      </View>

      {/* <Pressable style={styles.talkButton}>
        <Text style={styles.talkButtonText}>TALK</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrap: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EFEEF3",
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },
  title: {
    fontSize: 12.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  desc: {
    fontSize: 10,
    color: "#8D8C99",
    fontFamily: FONT,
    marginTop: 3,
  },
  divider: {
    width: 1,
    backgroundColor: "#EFEEF3",
  },
  talkButton: {
    position: "absolute",
    right: -8,
    top: "50%",
    marginTop: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFDD00",
    borderWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  talkButtonText: {
    fontSize: 10.5,
    fontFamily: FONT_BOLD,
    color: "#171717",
  },
});
