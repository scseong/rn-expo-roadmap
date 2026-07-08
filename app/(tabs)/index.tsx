import { ScrollView, StyleSheet } from "react-native";
import { HeroBanner } from "@/components/home/HeroBanner";
import { RecommendedFeatures } from "@/components/home/RecommendedFeatures";
import { QuickLinksBar } from "@/components/home/QuickLinksBar";
import { SubsidyCards } from "@/components/home/SubsidyCards";
import { TrustRow } from "@/components/home/TrustRow";
import { UsedPhoneTrade } from "@/components/home/UsedPhoneTrade";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <HeroBanner />
      <SubsidyCards />
      <RecommendedFeatures />
      <UsedPhoneTrade />
      <QuickLinksBar />
      <TrustRow />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 24,
  },
});
