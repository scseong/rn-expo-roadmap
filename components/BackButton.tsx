import { Ionicons } from "@react-native-vector-icons/ionicons";
import { usePathname, useRouter } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

// "/support/detail" -> "/support", "/support" -> "/"
function getParentPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  return "/" + segments.slice(0, -1).join("/");
}

export function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={() => router.push(getParentPath(pathname) as never)}
      hitSlop={12}
      style={{ padding: 8, marginLeft: 7 }}
    >
      {({ pressed }) => (
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
          style={{ opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  );
}
