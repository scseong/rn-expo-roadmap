import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";
import type { SortKey } from "./data";

const TABS: { key: SortKey; label: string }[] = [
  { key: "lowest", label: "최저가순" },
  { key: "newest", label: "최신기종" },
];

export function SortTabs({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (sort: SortKey) => void;
}) {
  return (
    <View style={styles.wrap}>
      {TABS.map((tab) => {
        const active = value === tab.key;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.pill, { borderColor: active ? "#5B2FE0" : "#E5E4EA" }]}
          >
            <Text style={[styles.label, { color: active ? "#5B2FE0" : "#9694A0" }]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1.4,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
});
