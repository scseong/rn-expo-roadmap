import type { CarrierKey, Phone, PhoneDetail } from "./data";
import phonesMock from "./mock/phones.json";
import phoneDetailsMock from "./mock/phoneDetails.json";

const MOCK_DELAY_MS = 400;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

function isPhone(value: unknown): value is Phone {
  if (!value || typeof value !== "object") return false;
  const phone = value as Record<string, unknown>;
  return (
    typeof phone.key === "string" &&
    typeof phone.name === "string" &&
    typeof phone.category === "string" &&
    typeof phone.price === "number" &&
    Array.isArray(phone.gradient) &&
    phone.gradient.length === 3
  );
}

function fetchPhonesMock(): Promise<Phone[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(phonesMock) || !phonesMock.every(isPhone)) {
        reject(new Error("휴대폰 목록 응답 형식이 올바르지 않아요."));
        return;
      }
      resolve(phonesMock);
    }, MOCK_DELAY_MS);
  });
}

async function fetchPhonesRemote(): Promise<Phone[]> {
  const res = await fetch(`${API_URL}/phones`);
  if (!res.ok) {
    throw new Error(`휴대폰 목록을 불러오지 못했어요. (HTTP ${res.status})`);
  }

  const data: unknown = await res.json();
  if (!Array.isArray(data) || !data.every(isPhone)) {
    throw new Error("휴대폰 목록 응답 형식이 올바르지 않아요.");
  }

  return data;
}

// EXPO_PUBLIC_API_URL이 설정되면 실제 API를, 없으면(현재) mock 데이터를 사용한다.
export function fetchPhones(): Promise<Phone[]> {
  return API_URL ? fetchPhonesRemote() : fetchPhonesMock();
}

const CARRIER_KEYS: CarrierKey[] = ["all", "skt", "kt", "lgu", "mvno"];

function isCarrierSummary(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const summary = value as Record<string, unknown>;
  return (
    typeof summary.totalSubsidy === "number" &&
    typeof summary.monthlyFee === "number" &&
    typeof summary.monthlyPay === "number" &&
    typeof summary.monthlyInstallment === "number"
  );
}

function isPhoneDetail(value: unknown): value is PhoneDetail {
  if (!value || typeof value !== "object") return false;
  const detail = value as Record<string, unknown>;
  if (!detail.specs || typeof detail.specs !== "object") return false;
  if (!detail.carriers || typeof detail.carriers !== "object") return false;
  const carriers = detail.carriers as Record<string, unknown>;
  return CARRIER_KEYS.every((key) => isCarrierSummary(carriers[key]));
}

function fetchPhoneDetailMock(key: string): Promise<PhoneDetail> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detail = (phoneDetailsMock as Record<string, unknown>)[key];
      if (!isPhoneDetail(detail)) {
        reject(new Error("휴대폰 상세 정보를 찾을 수 없어요."));
        return;
      }
      resolve(detail);
    }, MOCK_DELAY_MS);
  });
}

async function fetchPhoneDetailRemote(key: string): Promise<PhoneDetail> {
  const res = await fetch(`${API_URL}/phones/${key}`);
  if (!res.ok) {
    throw new Error(`휴대폰 상세 정보를 불러오지 못했어요. (HTTP ${res.status})`);
  }

  const data: unknown = await res.json();
  if (!isPhoneDetail(data)) {
    throw new Error("휴대폰 상세 정보 응답 형식이 올바르지 않아요.");
  }

  return data;
}

export function fetchPhoneDetail(key: string): Promise<PhoneDetail> {
  return API_URL ? fetchPhoneDetailRemote(key) : fetchPhoneDetailMock(key);
}
