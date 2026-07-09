import { StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";

export type BreakdownField = { label: string; value: string; note?: string; highlight?: boolean };
export type BreakdownRow = { left: BreakdownField; right: BreakdownField };

export function BreakdownSection({
  badgeLetter,
  badgeColor,
  titleColor,
  title,
  rows,
  total,
}: {
  badgeLetter: string;
  badgeColor: string;
  titleColor: string;
  title: string;
  rows: BreakdownRow[];
  total?: { label: string; value: string; valueColor: string };
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{badgeLetter}</Text>
        </View>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      </View>

      <View style={styles.grid}>
        {rows.map((row, i) => (
          <View key={i} style={styles.gridRow}>
            <View style={styles.pair}>
              <Text
                style={[styles.fieldLabel, row.left.highlight && styles.highlight]}
                numberOfLines={1}
              >
                {row.left.label}
              </Text>
              <View style={styles.fieldValueWrap}>
                <Text style={styles.fieldValue} numberOfLines={1}>
                  {row.left.value}
                </Text>
                {row.left.note && (
                  <Text style={styles.fieldNote} numberOfLines={1}>
                    {row.left.note}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.pair}>
              <Text
                style={[styles.fieldLabel, row.right.highlight && styles.highlight]}
                numberOfLines={1}
              >
                {row.right.label}
              </Text>
              <View style={styles.fieldValueWrap}>
                <Text style={styles.fieldValue} numberOfLines={1}>
                  {row.right.value}
                </Text>
                {row.right.note && (
                  <Text style={styles.fieldNote} numberOfLines={1}>
                    {row.right.note}
                  </Text>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {total && (
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{total.label}</Text>
          <Text style={[styles.totalValue, { color: total.valueColor }]}>
            {total.value}
          </Text>
        </View>
      )}
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
  },
  grid: {
    marginTop: 14,
    gap: 11,
  },
  gridRow: {
    flexDirection: "row",
    gap: 10,
  },
  pair: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  fieldLabel: {
    fontSize: 12,
    fontFamily: FONT,
    color: "#17151D",
  },
  highlight: {
    fontFamily: FONT_BOLD,
    color: "#F5316B",
  },
  fieldValueWrap: {
    alignItems: "flex-end",
  },
  fieldValue: {
    fontSize: 12,
    fontFamily: FONT,
    color: "#17151D",
  },
  fieldNote: {
    fontSize: 9,
    fontFamily: FONT,
    color: "#5B2FE0",
    marginTop: 2,
  },
  totalRow: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F3F2F7",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  totalLabel: {
    fontSize: 12.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  totalValue: {
    fontSize: 15,
    fontFamily: FONT_BOLD,
  },
});
