import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { Chevron, PhoneCardIcon, InternetTvIcon, WaterPurifierIcon } from "./icons";

type LinkHref = React.ComponentProps<typeof Link>["href"];

type SubsidyCard = {
  key: string;
  bg: string;
  accent: string;
  title: string;
  amount: string;
  desc: string;
  icon: React.ReactNode;
  href?: LinkHref;
};

const SUBSIDY_CARDS: SubsidyCard[] = [
  {
    key: "phone",
    bg: "#F1ECFB",
    accent: "#5B2FE0",
    title: "휴대폰 지원금\n계산",
    amount: "50",
    desc: "통신사·요금제 별\n최대 지원금 확인",
    icon: <PhoneCardIcon />,
    href: "/support",
  },
  {
    key: "internet",
    bg: "#FCEDF1",
    accent: "#F5316B",
    title: "인터넷·TV 결합\n지원금",
    amount: "48",
    desc: "인터넷과 TV 결합 시\n받을 수 있는 혜택",
    icon: <InternetTvIcon />,
  },
  {
    key: "water",
    bg: "#EAF0FC",
    accent: "#2451F2",
    title: "정수기 렌탈\n지원금",
    amount: "30",
    desc: "정수기 렌탈 시\n받을 수 있는 혜택",
    icon: <WaterPurifierIcon />,
  },
];

export function SubsidyCards() {
  return (
    <View style={styles.row}>
      {SUBSIDY_CARDS.map((card) => {
        const body = (
          <View style={[styles.card, { backgroundColor: card.bg }]}>
            <Text style={styles.title}>{card.title}</Text>
            <View style={styles.icon}>{card.icon}</View>
            <View style={styles.amountRow}>
              <Text style={[styles.maxLabel, { color: card.accent }]}>최대</Text>
              <Text style={[styles.amountText, { color: card.accent }]}>
                {card.amount}
              </Text>
              <Text style={[styles.amountUnit, { color: card.accent }]}>만원</Text>
            </View>
            <Text style={styles.desc}>{card.desc}</Text>
            <View style={styles.footer}>
              <View style={styles.circleButton}>
                <Chevron color={card.accent} size={14} />
              </View>
            </View>
          </View>
        );
        return card.href ? (
          <Link key={card.key} href={card.href} asChild>
            <Pressable style={styles.flex1}>{body}</Pressable>
          </Link>
        ) : (
          <Pressable key={card.key} style={styles.flex1}>
            {body}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 9,
    marginHorizontal: 16,
    marginBottom: 26,
  },
  card: {
    borderRadius: 18,
    padding: 12,
    minHeight: 196,
  },
  title: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    lineHeight: 15,
    paddingRight: 16,
  },
  icon: {
    position: "absolute",
    top: 14,
    right: 8,
  },
  maxLabel: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    marginRight: 2,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 12,
  },
  amountText: {
    fontSize: 28,
    fontFamily: FONT_BOLD,
  },
  amountUnit: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  desc: {
    fontSize: 10.5,
    color: "#726F7C",
    fontFamily: FONT,
    lineHeight: 15,
    marginTop: 10,
  },
  footer: {
    marginTop: "auto",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#5B2FE0",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
