import { Ionicons } from "@react-native-vector-icons/ionicons";
import { StyleSheet, Text, View } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";
import { formatPrice, formatSigned } from "@/components/support/data";

export function SummaryMonthly({
  monthlyInstallment,
  monthlyFee,
  monthlyPay,
  compact,
}: {
  monthlyInstallment: number;
  monthlyFee: number;
  monthlyPay: number;
  compact?: boolean;
}) {
  return (
    <View style={styles.grid}>
      <View style={[styles.cell, styles.borderRight]}>
        <View style={styles.labelRow}>
          <Ionicons name="apps-outline" size={13} color="#5B2FE0" />
          <Text style={styles.label}>매월 할부금</Text>
        </View>
        <Text style={[styles.value, compact && styles.valueCompact]}>
          {formatSigned(monthlyInstallment)}
        </Text>
      </View>
      <View style={[styles.cell, styles.borderRight]}>
        <View style={styles.labelRow}>
          <Ionicons name="stats-chart-outline" size={13} color="#5B2FE0" />
          <Text style={styles.label}>매월 통신료</Text>
        </View>
        <Text style={[styles.value, compact && styles.valueCompact]}>
          {formatPrice(monthlyFee)}원
        </Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.labelRow}>
          <Ionicons name="reader-outline" size={13} color="#5B2FE0" />
          <Text style={styles.label}>월 납부금액</Text>
        </View>
        <Text
          style={[
            styles.value,
            compact && styles.valueCompact,
            { color: "#5B2FE0" },
          ]}
        >
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
  },
  cell: {
    flex: 1,
    alignItems: "center",
    gap: 6,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#F0EFF4",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    color: "#5C5A66",
  },
  value: {
    fontSize: 13,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  valueCompact: {
    fontSize: 13,
  },
  vat: {
    fontSize: 9,
    color: "#9694A0",
  },
});
