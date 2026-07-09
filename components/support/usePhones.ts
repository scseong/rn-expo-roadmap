import { useEffect, useState } from "react";

import { fetchPhones } from "./api";
import type { Phone } from "./data";

export function usePhones() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchPhones()
      .then((data) => {
        if (cancelled) return;
        setPhones(data);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "휴대폰 목록을 불러오지 못했어요."
        );
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { phones, loading, error };
}
