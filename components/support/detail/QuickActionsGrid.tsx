import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT } from "@/constants/Fonts";

const ACTIONS: {
  key: string;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}[] = [
  { key: "load", label: "불러오기", icon: "download-outline" },
  { key: "save", label: "저장", icon: "save-outline" },
  { key: "installment", label: "할부/위약금\n조회", icon: "receipt-outline" },
  { key: "estimate", label: "공시/선택\n예상납입금", icon: "calculator-outline" },
  { key: "consult", label: "빠른 상담", icon: "chatbubble-ellipses-outline" },
  { key: "share", label: "공유", icon: "share-social-outline" },
];

export function QuickActionsGrid() {
  return (
    <View style={styles.grid}>
      {ACTIONS.map((action) => (
        <Pressable key={action.key} style={styles.item}>
          <Ionicons name={action.icon} size={19} color="#26232E" />
          <Text style={styles.label}>{action.label}</Text>
        </Pressable>
      ))}
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
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  item: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 9.5,
    fontFamily: FONT,
    color: "#5C5A66",
    textAlign: "center",
    lineHeight: 12,
  },
});
