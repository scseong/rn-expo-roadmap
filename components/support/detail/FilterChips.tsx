import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";

export type FilterKey = "vat" | "term" | "move" | "gongsi";

const CHIPS: { key: FilterKey; label: string }[] = [
  { key: "vat", label: "VAT 포함" },
  { key: "term", label: "24개월 기준" },
  { key: "move", label: "통신사이동" },
  { key: "gongsi", label: "공시지원금 기준" },
];

export function FilterChips({
  value,
  onToggle,
}: {
  value: Record<FilterKey, boolean>;
  onToggle: (key: FilterKey) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrap}
      contentContainerStyle={styles.row}
    >
      {CHIPS.map((chip) => {
        const active = value[chip.key];
        return (
          <Pressable
            key={chip.key}
            onPress={() => onToggle(chip.key)}
            style={[
              styles.chip,
              {
                borderColor: active ? "#5B2FE0" : "#E5E4EA",
                backgroundColor: active ? "#F1ECFB" : "#fff",
              },
            ]}
          >
            <Text style={[styles.label, { color: active ? "#5B2FE0" : "#9694A0" }]}>
              {chip.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    padding: 12,
  },
  row: {
    gap: 8,
  },
  chip: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.4,
  },
  label: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
});
