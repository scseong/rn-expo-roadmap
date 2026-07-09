export type Category = "all" | "galaxy" | "iphone";
export type SortKey = "lowest" | "newest";
export type Storage = "256G" | "512G" | "1TB";

export type Phone = {
  key: string;
  name: string;
  category: Exclude<Category, "all">;
  price: number;
  gradient: [string, string, string];
  dotOpacity: number;
};

export const STORAGE_OPTIONS: Storage[] = ["256G", "512G", "1TB"];

export const CARRIERS = [
  { key: "skt", name: "SKT", badgeColor: "#F03D5A" },
  { key: "kt", name: "KT", badgeColor: "#E4181E" },
  { key: "lgu", name: "LG U+", badgeColor: "#E6197A" },
] as const;

export type CarrierKey = "all" | "skt" | "kt" | "lgu" | "mvno";

export const DETAIL_CARRIERS: { key: CarrierKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "skt", label: "SK Telecom" },
  { key: "kt", label: "KT olleh" },
  { key: "lgu", label: "LG U+" },
  { key: "mvno", label: "알뜰폰" },
];

export type PhoneSpecs = {
  manufacturer: string;
  modelName: string;
  releaseDate: string;
  cpu: string;
  ram: string;
  internalStorage: string;
  externalStorage: string;
  battery: string;
  weight: string;
  displaySize: string;
  screen: string;
  camera: string;
  etc: string;
};

export type CarrierSummary = {
  totalSubsidy: number;
  monthlyFee: number;
  monthlyPay: number;
  monthlyInstallment: number;
};

export type PhoneDetail = {
  specs: PhoneSpecs;
  carriers: Record<CarrierKey, CarrierSummary>;
};

export function formatPrice(price: number) {
  return price.toLocaleString("ko-KR");
}

export function formatSigned(price: number) {
  const sign = price > 0 ? "+" : price < 0 ? "-" : "";
  return `${sign}${Math.abs(price).toLocaleString("ko-KR")}원`;
}
