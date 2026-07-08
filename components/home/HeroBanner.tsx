import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { Chevron } from "./icons";

export function HeroBanner() {
  return (
    <LinearGradient
      colors={["#F8F6FE", "#EFE8FC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.hero}
    >
      <View style={styles.heroText}>
        <Text style={styles.heroTitle}>내 휴대폰 지원금,</Text>
        <Text style={[styles.heroTitle, { color: "#5B2FE0" }]}>
          지금 바로 확인하세요
        </Text>
        <Text style={styles.heroSubtitle}>
          숨은 지원금까지 한 번에 비교하고{"\n"}가장 유리한 조건으로
          안내드려요.
        </Text>
        <View style={styles.heroButtons}>
          <Link href="/support" asChild>
            <Pressable style={styles.heroPrimaryButton}>
              <Text style={styles.heroPrimaryButtonText}>지원금 계산하기</Text>
              <Chevron color="#fff" size={14} />
            </Pressable>
          </Link>
          <Pressable style={styles.heroSecondaryButton}>
            <Text style={styles.heroSecondaryButtonText}>인터넷 결합 보기</Text>
            <Chevron color="#5B2FE0" size={14} />
          </Pressable>
        </View>
      </View>

      <View style={styles.heroIllustration} pointerEvents="none">
        <View style={[styles.sparkle, { top: 2, left: 6 }]} />
        <View
          style={[styles.sparkle, { top: 34, left: 118, width: 6, height: 6 }]}
        />
        <View
          style={[
            styles.sparkle,
            { top: 56, left: 2, width: 5, height: 5, opacity: 0.85 },
          ]}
        />

        <View
          style={[styles.coin, { left: 0, bottom: 12, backgroundColor: "#E8AE38" }]}
        />
        <View
          style={[styles.coin, { left: 0, bottom: 20, backgroundColor: "#F5C451" }]}
        />
        <View
          style={[
            styles.coin,
            { left: 3, bottom: 28, width: 54, height: 24, backgroundColor: "#E8AE38" },
          ]}
        />
        <View
          style={[
            styles.coin,
            { left: 3, bottom: 36, width: 54, height: 24, backgroundColor: "#FFD873" },
          ]}
        />
        <View style={styles.coinSlot} />

        <View style={styles.tv}>
          <View style={styles.tvStand} />
          <View style={styles.tvBase} />
        </View>
        <View style={styles.tvAntenna} />

        <View style={styles.phoneMock}>
          <View style={styles.phoneScreen} />
          <View style={styles.phoneNotch} />
          <View style={styles.phoneWonBadge}>
            <Text style={styles.phoneWonText}>₩</Text>
          </View>
          <Text style={styles.phoneLabel}>지원금</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hero: {
    margin: 16,
    marginTop: 12,
    padding: 20,
    paddingTop: 24,
    borderRadius: 22,
    overflow: "hidden",
    minHeight: 216,
  },
  heroText: {
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    lineHeight: 30,
  },
  heroSubtitle: {
    marginTop: 10,
    fontSize: 13,
    fontFamily: FONT,
    color: "#726F7C",
    lineHeight: 20,
  },
  heroButtons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
  },
  heroPrimaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#5B2FE0",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  heroPrimaryButtonText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
  heroSecondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1.4,
    borderColor: "#C9B8F7",
  },
  heroSecondaryButtonText: {
    color: "#5B2FE0",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
  heroIllustration: {
    position: "absolute",
    top: 14,
    right: -8,
    width: 142,
    height: 192,
  },
  sparkle: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#DCCEF8",
    transform: [{ rotate: "45deg" }],
    borderRadius: 2,
  },
  coin: {
    position: "absolute",
    width: 58,
    height: 26,
    borderRadius: 13,
  },
  coinSlot: {
    position: "absolute",
    left: 17,
    bottom: 58,
    width: 15,
    height: 19,
    backgroundColor: "#8659F2",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    transform: [{ rotate: "45deg" }],
  },
  tv: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 58,
    height: 50,
    borderRadius: 9,
    backgroundColor: "#9D7CEA",
    overflow: "hidden",
  },
  tvStand: {
    position: "absolute",
    left: 24,
    top: 0,
    width: 9,
    height: 50,
    backgroundColor: "#D2BEF7",
  },
  tvBase: {
    position: "absolute",
    left: 0,
    top: 13,
    width: 58,
    height: 9,
    backgroundColor: "#D2BEF7",
  },
  tvAntenna: {
    position: "absolute",
    right: 20,
    bottom: 48,
    width: 18,
    height: 10,
    backgroundColor: "#D2BEF7",
    borderRadius: 5,
  },
  phoneMock: {
    position: "absolute",
    left: 18,
    top: 0,
    width: 98,
    height: 182,
    borderRadius: 24,
    backgroundColor: "#7B4FEA",
  },
  phoneScreen: {
    position: "absolute",
    top: 7,
    left: 7,
    right: 7,
    bottom: 7,
    borderRadius: 18,
    backgroundColor: "#fff",
  },
  phoneNotch: {
    position: "absolute",
    top: 11,
    left: "50%",
    marginLeft: -13,
    width: 26,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#7B4FEA",
  },
  phoneWonBadge: {
    position: "absolute",
    top: 54,
    left: "50%",
    marginLeft: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7B4FEA",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneWonText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: FONT_BOLD,
  },
  phoneLabel: {
    position: "absolute",
    top: 112,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#5B2FE0",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
});
