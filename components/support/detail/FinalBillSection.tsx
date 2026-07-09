import { StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { formatPrice } from "@/components/support/data";
import { MemoBox } from "./MemoBox";

export function FinalBillSection({
  monthlyPay,
  memo,
  onMemoChange,
}: {
  monthlyPay: number;
  memo: string;
  onMemoChange: (text: string) => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>D</Text>
        </View>
        <Text style={styles.title}>최종 청구금액</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.blueLabel}>당일 예상금액</Text>
        <Text style={styles.amountWrap}>
          <Text style={styles.amount}>{formatPrice(monthlyPay)}원</Text>{" "}
          <Text style={styles.amountNote}>[VAT 포함]</Text>
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.blueLabel}>지속청구금액</Text>
        <Text style={styles.desc}>데이터·무제한 / 통화·무제한 / 문자·기본제공</Text>
      </View>

      <MemoBox value={memo} onChangeText={onMemoChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    padding: 18,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#5B2FE0",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  title: {
    fontSize: 15.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 12,
  },
  blueLabel: {
    fontSize: 12.5,
    fontFamily: FONT_BOLD,
    color: "#4C6FE0",
  },
  amountWrap: {
    textAlign: "right",
  },
  amount: {
    fontSize: 16,
    fontFamily: FONT_BOLD,
    color: "#4C6FE0",
  },
  amountNote: {
    fontSize: 10.5,
    fontFamily: FONT,
    color: "#9694A0",
  },
  desc: {
    fontSize: 11.5,
    fontFamily: FONT,
    color: "#17151D",
    textAlign: "right",
    flexShrink: 1,
  },
});
