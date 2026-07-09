import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

import { NoResults } from "@/components/support/NoResults";
import { usePhoneDetail } from "@/components/support/usePhoneDetail";
import type { CarrierKey } from "@/components/support/data";
import { CarrierTabs } from "@/components/support/detail/CarrierTabs";
import { ProductSpecCard } from "@/components/support/detail/ProductSpecCard";
import { QuickActionsGrid } from "@/components/support/detail/QuickActionsGrid";
import { SummaryTotals } from "@/components/support/detail/SummaryTotals";
import { SummaryMonthly } from "@/components/support/detail/SummaryMonthly";
import { FilterChips, type FilterKey } from "@/components/support/detail/FilterChips";
import {
  BreakdownSection,
  type BreakdownRow,
} from "@/components/support/detail/BreakdownSection";
import { FinalBillSection } from "@/components/support/detail/FinalBillSection";
import { QuickConsultFab } from "@/components/support/detail/QuickConsultFab";

const PURCHASE_ROWS: BreakdownRow[] = [
  {
    left: { label: "지원 방식①", value: "공시지원금 24개월", highlight: true },
    right: { label: "출고가", value: "1,155,000원" },
  },
  {
    left: { label: "공시지원", value: "-500,000원" },
    right: { label: "가입형태②", value: "통신사이동", highlight: true },
  },
  {
    left: { label: "공시추가지원", value: "0원" },
    right: { label: "전환지원", value: "-500,000원" },
  },
  {
    left: { label: "중고폰 할인", value: "-250,000원" },
    right: { label: "카드자동이체", value: "-168,000원" },
  },
  {
    left: { label: "할부③", value: "할부 24개월", highlight: true },
    right: { label: "할부원금", value: "-263,000원" },
  },
  {
    left: { label: "할부수수료", value: "-15,517원", note: "[원리금균등 연 5.9%]" },
    right: { label: "할부원금 + 할부수수료", value: "-278,517원" },
  },
];

const FEE_ROWS: BreakdownRow[] = [
  {
    left: { label: "요금제④", value: "109,000원/프리미엄", highlight: true },
    right: { label: "기본료", value: "109,000원" },
  },
  {
    left: { label: "선택약정", value: "미적용" },
    right: { label: "부가항목", value: "0원" },
  },
  {
    left: { label: "복지할인", value: "미적용" },
    right: { label: "기타 할인", value: "0원" },
  },
];

const MY_SUBSIDY_ROWS: BreakdownRow[] = [
  {
    left: { label: "공시지원금", value: "-500,000원" },
    right: { label: "중고폰할인", value: "-250,000원" },
  },
  {
    left: { label: "전환지원금", value: "-500,000원" },
    right: { label: "카드자동이체", value: "-168,000원" },
  },
];

export default function PhoneDetailScreen() {
  const { key } = useLocalSearchParams<{ key: string }>();
  const { detail, loading, error } = usePhoneDetail(key ?? "");

  const [carrier, setCarrier] = useState<CarrierKey>("all");
  const [filters, setFilters] = useState<Record<FilterKey, boolean>>({
    vat: true,
    term: true,
    move: true,
    gongsi: true,
  });
  const [memo, setMemo] = useState("");

  const toggleFilter = (filterKey: FilterKey) => {
    setFilters((prev) => ({ ...prev, [filterKey]: !prev[filterKey] }));
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color="#5B2FE0" />
      </View>
    );
  }

  if (error || !detail) {
    return (
      <View style={styles.centered}>
        <NoResults message={error ?? "휴대폰 정보를 찾을 수 없어요."} />
      </View>
    );
  }

  const summary = detail.carriers[carrier];

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex1}>
        <CarrierTabs value={carrier} onChange={setCarrier} />

        <View style={styles.content}>
          <ProductSpecCard name={detail.specs.modelName} specs={detail.specs} />

          <QuickActionsGrid />

          <SummaryTotals
            totalSubsidy={summary.totalSubsidy}
            monthlyFee={summary.monthlyFee}
            monthlyPay={summary.monthlyPay}
          />

          <View style={styles.card}>
            <SummaryMonthly
              monthlyInstallment={summary.monthlyInstallment}
              monthlyFee={summary.monthlyFee}
              monthlyPay={summary.monthlyPay}
            />
          </View>

          <FilterChips value={filters} onToggle={toggleFilter} />

          <BreakdownSection
            badgeLetter="A"
            badgeColor="#5B2FE0"
            titleColor="#17151D"
            title="단말 구매내역"
            rows={PURCHASE_ROWS}
            total={{
              label: "월 할부원금 + 월 수수료",
              value: "-10,959원 + -647원",
              valueColor: "#17151D",
            }}
          />

          <BreakdownSection
            badgeLetter="B"
            badgeColor="#5B2FE0"
            titleColor="#17151D"
            title="요금내역"
            rows={FEE_ROWS}
          />

          <BreakdownSection
            badgeLetter="C"
            badgeColor="#F5316B"
            titleColor="#F5316B"
            title="내가 받을 수 있는 지원금"
            rows={MY_SUBSIDY_ROWS}
            total={{
              label: "총 합",
              value: `${summary.totalSubsidy.toLocaleString("ko-KR")}원`,
              valueColor: "#F5316B",
            }}
          />

          <FinalBillSection
            monthlyPay={summary.monthlyPay}
            memo={memo}
            onMemoChange={setMemo}
          />
        </View>
      </ScrollView>

      <QuickConsultFab />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F2F8",
  },
  flex1: {
    flex: 1,
  },
  content: {
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EFF4",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
