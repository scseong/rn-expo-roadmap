import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import type { PhoneSpecs } from "@/components/support/data";

type SpecRow = {
  key: keyof PhoneSpecs;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

const TOP_ROWS: SpecRow[] = [
  { key: "manufacturer", label: "제조사", icon: "cube-outline" },
  { key: "modelName", label: "모델명", icon: "document-text-outline" },
  { key: "releaseDate", label: "출시일", icon: "calendar-outline" },
  { key: "cpu", label: "CPU", icon: "hardware-chip-outline" },
  { key: "ram", label: "RAM", icon: "grid-outline" },
  { key: "internalStorage", label: "내장메모리", icon: "phone-portrait-outline" },
];

const BOTTOM_ROWS: SpecRow[] = [
  { key: "externalStorage", label: "외장메모리", icon: "card-outline" },
  { key: "battery", label: "배터리", icon: "battery-half-outline" },
  { key: "weight", label: "무게", icon: "scale-outline" },
  { key: "displaySize", label: "디스플레이", icon: "tv-outline" },
  { key: "screen", label: "화면", icon: "resize-outline" },
  { key: "camera", label: "카메라", icon: "camera-outline" },
  { key: "etc", label: "기타", icon: "ellipse-outline" },
];

function SpecList({ rows, specs }: { rows: SpecRow[]; specs: PhoneSpecs }) {
  return (
    <View style={styles.specGrid}>
      <View style={styles.specLabels}>
        {rows.map((row) => (
          <View key={row.key} style={styles.specLabelRow}>
            <Ionicons name={row.icon} size={13} color="#9694A0" />
            <Text style={styles.specLabelText}>{row.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.specValues}>
        {rows.map((row) => (
          <Text key={row.key} style={styles.specValueText} numberOfLines={1}>
            {specs[row.key]}
          </Text>
        ))}
      </View>
    </View>
  );
}

export function ProductSpecCard({
  name,
  specs,
}: {
  name: string;
  specs: PhoneSpecs;
}) {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.imageColumn}>
          <LinearGradient
            colors={["#DCE8FA", "#C9B8F7", "#B9C9F5", "#8FA6E8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 1 }}
            style={styles.phone}
          >
            <View style={styles.camera} />
          </LinearGradient>
          <View style={styles.dots}>
            {[0, 1, 2, 3].map((i) => (
              <Pressable key={i} onPress={() => setActiveDot(i)} hitSlop={6}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: activeDot === i ? "#5B2FE0" : "#E5E4EA" },
                  ]}
                />
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.flex1}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>New</Text>
            </View>
          </View>
          <SpecList rows={TOP_ROWS} specs={specs} />
        </View>
      </View>

      <View style={styles.bottomSpecs}>
        <SpecList rows={BOTTOM_ROWS} specs={specs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    minWidth: 0,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    padding: 18,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
    gap: 16,
  },
  imageColumn: {
    flexShrink: 0,
  },
  phone: {
    width: 104,
    height: 150,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#18171C",
    overflow: "hidden",
  },
  camera: {
    position: "absolute",
    top: 9,
    left: "50%",
    marginLeft: -3.5,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "rgba(0,0,0,0.16)",
  },
  dots: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 16.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  newBadge: {
    borderWidth: 1.3,
    borderColor: "#5B2FE0",
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 7,
  },
  newBadgeText: {
    fontSize: 10.5,
    fontFamily: FONT_BOLD,
    color: "#5B2FE0",
  },
  specGrid: {
    flexDirection: "row",
    marginTop: 14,
    gap: 10,
  },
  specLabels: {
    flex: 1,
    gap: 9,
  },
  specValues: {
    flex: 1,
    gap: 9,
    alignItems: "flex-end",
  },
  specLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: 15,
  },
  specLabelText: {
    fontSize: 10.5,
    fontFamily: FONT,
    color: "#9694A0",
  },
  specValueText: {
    fontSize: 11.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    height: 15,
  },
  bottomSpecs: {
    marginTop: 14,
    paddingTop: 14,
    paddingLeft: 120,
    borderTopWidth: 1,
    borderTopColor: "#F3F2F7",
  },
});
