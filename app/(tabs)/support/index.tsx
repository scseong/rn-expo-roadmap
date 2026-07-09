import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

import { CategoryTabs } from "@/components/support/CategoryTabs";
import { NoResults } from "@/components/support/NoResults";
import { PhoneCard } from "@/components/support/PhoneCard";
import { SearchBar } from "@/components/support/SearchBar";
import { SortTabs } from "@/components/support/SortTabs";
import { usePhones } from "@/components/support/usePhones";
import { type Category, type SortKey } from "@/components/support/data";

export default function SupportListScreen() {
  const { phones: allPhones, loading, error } = usePhones();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [sort, setSort] = useState<SortKey>("lowest");

  const phones = useMemo(() => {
    const filtered = allPhones.filter((phone) => {
      const matchesCategory = category === "all" || phone.category === category;
      const matchesSearch = phone.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
    const sorted = [...filtered].sort((a, b) => a.price - b.price);
    return sort === "newest" ? sorted.reverse() : sorted;
  }, [allPhones, category, search, sort]);

  const noGalaxyResults = category === "iphone";

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <SearchBar value={search} onChangeText={setSearch} />
      <CategoryTabs value={category} onChange={setCategory} />
      <SortTabs value={sort} onChange={setSort} />

      <View style={styles.list}>
        {loading ? (
          <ActivityIndicator style={styles.loading} color="#5B2FE0" />
        ) : error ? (
          <NoResults message={error} />
        ) : noGalaxyResults ? (
          <NoResults message={"아이폰 기종은 아직 준비 중이에요.\n곧 만나보실 수 있어요."} />
        ) : phones.length === 0 ? (
          <NoResults message={"검색 결과가 없어요."} />
        ) : (
          phones.map((phone) => <PhoneCard key={phone.key} phone={phone} />)
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    gap: 14,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  loading: {
    paddingVertical: 60,
  },
});
