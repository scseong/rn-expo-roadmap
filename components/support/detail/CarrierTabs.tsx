import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { FONT_BOLD } from "@/constants/Fonts";
import { DETAIL_CARRIERS, type CarrierKey } from "@/components/support/data";

export function CarrierTabs({
  value,
  onChange,
}: {
  value: CarrierKey;
  onChange: (carrier: CarrierKey) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      style={styles.wrap}
    >
      {DETAIL_CARRIERS.map((carrier) => {
        const active = value === carrier.key;
        return (
          <Pressable
            key={carrier.key}
            onPress={() => onChange(carrier.key)}
            style={[
              styles.pill,
              {
                backgroundColor: active ? "#5B2FE0" : "#fff",
                borderColor: active ? "#5B2FE0" : "#E5E4EA",
              },
            ]}
          >
            <Text style={[styles.label, { color: active ? "#fff" : "#5C5A66" }]}>
              {carrier.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 12,
  },
  row: {
    gap: 8,
    paddingHorizontal: 16,
  },
  pill: {
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 22,
    borderWidth: 1.4,
  },
  label: {
    fontSize: 13.5,
    fontFamily: FONT_BOLD,
  },
});
