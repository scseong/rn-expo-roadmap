import { useEffect, useState } from "react";

import { fetchPhoneDetail } from "./api";
import type { PhoneDetail } from "./data";

export function usePhoneDetail(key: string) {
  const [detail, setDetail] = useState<PhoneDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchPhoneDetail(key)
      .then((data) => {
        if (cancelled) return;
        setDetail(data);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "휴대폰 상세 정보를 불러오지 못했어요."
        );
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return { detail, loading, error };
}
