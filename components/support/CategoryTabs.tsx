import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";
import type { Category } from "./data";

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "galaxy", label: "갤럭시" },
  { key: "iphone", label: "아이폰" },
];

export function CategoryTabs({
  value,
  onChange,
}: {
  value: Category;
  onChange: (category: Category) => void;
}) {
  return (
    <View style={styles.wrap}>
      {TABS.map((tab) => {
        const active = value === tab.key;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
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
    backgroundColor: "#F5F4F9",
    borderRadius: 14,
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 18,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 11,
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: "#EEEAFC",
  },
  label: {
    fontSize: 14.5,
    fontFamily: FONT_BOLD,
    color: "#5C5A66",
  },
  labelActive: {
    color: "#5B2FE0",
  },
});
