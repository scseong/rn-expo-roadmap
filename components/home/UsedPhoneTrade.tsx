import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { CartIcon, TradePhoneOutlineIcon } from "./icons";

export function UsedPhoneTrade() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>중고폰 거래</Text>
      <View style={styles.row}>
        <Pressable style={[styles.card, { backgroundColor: "#E9F6EE" }]}>
          <Text style={[styles.title, { color: "#17803D" }]}>중고폰 판매</Text>
          <Text style={styles.desc}>
            간편하게 견적받고{"\n"}안전하게 판매하세요
          </Text>
          <View style={styles.illustration}>
            <TradePhoneOutlineIcon width={52} height={86} stroke="#26232E" />
            <View style={styles.wonBadge}>
              <Text style={styles.wonText}>₩</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.card, { backgroundColor: "#EAF0FC" }]}>
          <Text style={[styles.title, { color: "#2A4BC7" }]}>중고폰 구매</Text>
          <Text style={styles.desc}>
            검증된 제품을{"\n"}합리적인 가격에 구매
          </Text>
          <View style={styles.illustration}>
            <TradePhoneOutlineIcon width={40} height={66} stroke="#7B93E8" />
            <View style={styles.cartIconWrap}>
              <CartIcon />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginBottom: 26,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 150,
    overflow: "hidden",
  },
  title: {
    fontSize: 14.5,
    fontFamily: FONT_BOLD,
  },
  desc: {
    fontSize: 11,
    color: "#5B5A63",
    fontFamily: FONT,
    lineHeight: 18,
    marginTop: 8,
    maxWidth: 140,
  },
  illustration: {
    position: "absolute",
    right: 10,
    bottom: 6,
    width: 78,
    height: 86,
    alignItems: "flex-end",
  },
  wonBadge: {
    position: "absolute",
    right: 0,
    bottom: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#22B573",
    borderWidth: 2.5,
    borderColor: "#E9F6EE",
    alignItems: "center",
    justifyContent: "center",
  },
  wonText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: FONT_BOLD,
  },
  cartIconWrap: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
