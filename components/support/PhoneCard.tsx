import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Rect } from "react-native-svg";

import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { Chevron } from "@/components/icons/Chevron";
import { CARRIERS, STORAGE_OPTIONS, formatPrice, type Phone, type Storage } from "./data";
import { PhoneIllustration } from "./PhoneIllustration";

function SimCardIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect x={6} y={2} width={12} height={20} rx={3} stroke="#9694A0" strokeWidth={1.8} />
    </Svg>
  );
}

export function PhoneCard({ phone }: { phone: Phone }) {
  const [storage, setStorage] = useState<Storage>("256G");
  const priceLabel = formatPrice(phone.price);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <PhoneIllustration gradient={phone.gradient} dotOpacity={phone.dotOpacity} />
        <View style={styles.flex1}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>
              {phone.name}
            </Text>
            <View style={styles.lowestBadge}>
              <Text style={styles.lowestBadgeText}>최저가</Text>
            </View>
          </View>
          <View style={styles.chipsRow}>
            {STORAGE_OPTIONS.map((option) => {
              const active = storage === option;
              return (
                <Pressable
                  key={option}
                  onPress={() => setStorage(option)}
                  style={[
                    styles.chip,
                    {
                      borderColor: active ? "#5B2FE0" : "#E5E4EA",
                      backgroundColor: active ? "#F1ECFB" : "#fff",
                    },
                  ]}
                >
                  <Text
                    style={[styles.chipText, { color: active ? "#5B2FE0" : "#9694A0" }]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{priceLabel}</Text>
            <Text style={styles.priceUnit}>원</Text>
          </View>
        </View>
        <View style={styles.headerChevron}>
          <Chevron color="#ACAAB5" size={16} />
        </View>
      </View>

      <View style={styles.carrierGrid}>
        <View style={styles.carrierRow}>
          {CARRIERS.slice(0, 2).map((carrier, index) => (
            <View
              key={carrier.key}
              style={[
                styles.carrierCell,
                index === 0 && styles.carrierCellBorderRight,
                styles.carrierCellBorderBottom,
              ]}
            >
              <View style={styles.carrierInfo}>
                <View style={[styles.carrierBadge, { backgroundColor: carrier.badgeColor }]}>
                  <Text style={styles.carrierBadgeText}>{carrier.name[0]}</Text>
                </View>
                <Text style={styles.carrierName}>{carrier.name}</Text>
              </View>
              <View style={styles.carrierPriceWrap}>
                <Text style={styles.carrierPrice}>{priceLabel}원</Text>
                <Text style={styles.carrierPriceLabel}>최대 지원금</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.carrierRow}>
          <View style={[styles.carrierCell, styles.carrierCellBorderRight]}>
            <View style={styles.carrierInfo}>
              <View style={[styles.carrierBadge, { backgroundColor: CARRIERS[2].badgeColor }]}>
                <Text style={styles.carrierBadgeText}>U</Text>
              </View>
              <Text style={styles.carrierName}>{CARRIERS[2].name}</Text>
            </View>
            <View style={styles.carrierPriceWrap}>
              <Text style={styles.carrierPrice}>{priceLabel}원</Text>
              <Text style={styles.carrierPriceLabel}>최대 지원금</Text>
            </View>
          </View>
          <View style={styles.carrierCell}>
            <View style={styles.carrierInfo}>
              <SimCardIcon />
              <Text style={styles.carrierName}>알뜰폰</Text>
            </View>
            <Text style={styles.mvnoText}>요금제에 따라{"\n"}상이</Text>
          </View>
        </View>
      </View>

      <Link href={{ pathname: "/support/[key]", params: { key: phone.key } }} asChild>
        <Pressable style={styles.viewPriceButton}>
          <Text style={styles.viewPriceButtonText}>가격 보기</Text>
          <View style={styles.viewPriceChevron}>
            <Chevron color="#5B2FE0" size={16} />
          </View>
        </Pressable>
      </Link>
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    padding: 18,
    shadowColor: "rgba(20,10,50,1)",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    gap: 14,
    paddingRight: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    fontSize: 19,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    flexShrink: 1,
  },
  lowestBadge: {
    backgroundColor: "#5B2FE0",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  lowestBadgeText: {
    color: "#fff",
    fontSize: 10.5,
    fontFamily: FONT_BOLD,
  },
  chipsRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 12,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 13,
    borderRadius: 20,
    borderWidth: 1.4,
  },
  chipText: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  price: {
    fontSize: 22,
    fontFamily: FONT_BOLD,
    color: "#5B2FE0",
  },
  priceUnit: {
    fontSize: 14,
    fontFamily: FONT_BOLD,
    color: "#5B2FE0",
  },
  headerChevron: {
    position: "absolute",
    right: 0,
    top: "50%",
    marginTop: -8,
  },
  carrierGrid: {
    borderWidth: 1,
    borderColor: "#EFEEF3",
    borderRadius: 14,
    marginTop: 16,
    overflow: "hidden",
  },
  carrierRow: {
    flexDirection: "row",
  },
  carrierCell: {
    flex: 1,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  carrierCellBorderRight: {
    borderRightWidth: 1,
    borderRightColor: "#EFEEF3",
  },
  carrierCellBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#EFEEF3",
  },
  carrierInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    flexShrink: 1,
  },
  carrierBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  carrierBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: FONT_BOLD,
  },
  carrierName: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  carrierPriceWrap: {
    alignItems: "flex-end",
  },
  carrierPrice: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  carrierPriceLabel: {
    fontSize: 9.5,
    fontFamily: FONT,
    color: "#9694A0",
    marginTop: 2,
  },
  mvnoText: {
    fontSize: 9.5,
    fontFamily: FONT,
    color: "#9694A0",
    lineHeight: 13,
    textAlign: "right",
  },
  viewPriceButton: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1.4,
    borderColor: "#5B2FE0",
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  viewPriceButtonText: {
    color: "#5B2FE0",
    fontSize: 14,
    fontFamily: FONT_BOLD,
  },
  viewPriceChevron: {
    position: "absolute",
    right: 16,
  },
});
