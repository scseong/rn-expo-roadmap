import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Pressable, StyleSheet } from "react-native";

export function QuickConsultFab({ onPress }: { onPress?: () => void }) {
  return (
    <Pressable style={styles.fab} onPress={onPress} hitSlop={8}>
      <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#5B2FE0",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
});
