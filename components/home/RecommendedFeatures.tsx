import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { Chevron, CompareFeatureIcon, LocationFeatureIcon, PriceFeatureIcon } from "./icons";

type LinkHref = React.ComponentProps<typeof Link>["href"];

type Feature = {
  key: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  showChevron: boolean;
  href?: LinkHref;
};

const FEATURES: Feature[] = [
  {
    key: "store-finder",
    title: "전국성지찾기",
    desc: "우리 동네 성지\n최저가 매장 찾기",
    icon: <LocationFeatureIcon />,
    showChevron: false,
    href: "/store",
  },
  {
    key: "compare",
    title: "알뜰폰 비교",
    desc: "알뜰폰 요금제\n한눈에 비교",
    icon: <CompareFeatureIcon />,
    showChevron: true,
  },
  {
    key: "price",
    title: "내폰 시세",
    desc: "내 폰의 현재\n시세 확인",
    icon: <PriceFeatureIcon />,
    showChevron: true,
  },
];

export function RecommendedFeatures() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>추천 기능</Text>
        <View style={styles.moreLink}>
          <Text style={styles.moreLinkText}>더보기</Text>
          <Chevron color="#8D8C99" size={14} />
        </View>
      </View>
      <View style={styles.row}>
        {FEATURES.map((feature) => {
          const body = (
            <View style={styles.card}>
              <View style={styles.icon}>{feature.icon}</View>
              <View>
                <Text style={styles.title}>{feature.title}</Text>
                <Text style={styles.desc}>{feature.desc}</Text>
              </View>
              {feature.showChevron && (
                <View style={styles.chevron}>
                  <Chevron color="#C7C5D1" size={11} />
                </View>
              )}
            </View>
          );
          return feature.href ? (
            <Link key={feature.key} href={feature.href} asChild>
              <Pressable style={styles.flex1}>{body}</Pressable>
            </Link>
          ) : (
            <Pressable key={feature.key} style={styles.flex1}>
              {body}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 26,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  moreLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  moreLinkText: {
    fontSize: 12.5,
    fontFamily: FONT,
    color: "#8D8C99",
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  card: {
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EEEDF3",
    borderRadius: 16,
    padding: 10,
    paddingVertical: 12,
  },
  icon: {
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  desc: {
    fontSize: 9,
    color: "#8D8C99",
    fontFamily: FONT,
    lineHeight: 13,
    marginTop: 3,
  },
  chevron: {
    position: "absolute",
    top: 14,
    right: 10,
  },
});
