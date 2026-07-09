import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

export function PhoneIllustration({
  gradient,
  dotOpacity,
}: {
  gradient: [string, string, string];
  dotOpacity: number;
}) {
  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 1 }}
      style={styles.phone}
    >
      <View style={[styles.camera, { backgroundColor: `rgba(0,0,0,${dotOpacity})` }]} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  phone: {
    width: 96,
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
  },
});
