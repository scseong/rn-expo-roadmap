import { StyleSheet, Text, View } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";
import { formatPrice, formatSigned } from "@/components/support/data";

export function SummaryTotals({
  totalSubsidy,
  monthlyFee,
  monthlyPay,
}: {
  totalSubsidy: number;
  monthlyFee: number;
  monthlyPay: number;
}) {
  return (
    <View style={styles.grid}>
      <View style={[styles.cell, styles.borderRight]}>
        <Text style={styles.label}>총 지원금</Text>
        <Text style={[styles.value, { color: "#F5316B" }]}>
          {formatSigned(totalSubsidy)}
        </Text>
      </View>
      <View style={[styles.cell, styles.borderRight]}>
        <Text style={styles.label}>월 통신료</Text>
        <Text style={[styles.value, { color: "#17151D" }]}>
          {formatPrice(monthlyFee)}원
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.label}>월 납부금액</Text>
        <Text style={[styles.valueLarge, { color: "#5B2FE0" }]}>
          {formatPrice(monthlyPay)}원
        </Text>
        <Text style={styles.vat}>(VAT 포함)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    paddingVertical: 18,
  },
  cell: {
    flex: 1,
    alignItems: "center",
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#F0EFF4",
  },
  label: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
    color: "#5C5A66",
  },
  value: {
    fontSize: 17,
    fontFamily: FONT_BOLD,
    marginTop: 8,
  },
  valueLarge: {
    fontSize: 18,
    fontFamily: FONT_BOLD,
    marginTop: 8,
  },
  vat: {
    fontSize: 9.5,
    color: "#9694A0",
    marginTop: 2,
  },
});
