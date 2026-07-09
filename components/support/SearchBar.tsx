import { Ionicons } from "@react-native-vector-icons/ionicons";
import { StyleSheet, TextInput, View } from "react-native";

export function SearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.wrap}>
      <Ionicons name="search-outline" size={18} color="#ACAAB5" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="기종명 검색"
        placeholderTextColor="#ACAAB5"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F5F4F9",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 48,
    marginHorizontal: 16,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#17151D",
  },
});
