import React, { useState } from "react";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { FontAwesomeFreeRegular } from "@react-native-vector-icons/fontawesome-free-regular";
import { Link, Tabs } from "expo-router";
import { Image, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { FONT, FONT_BOLD } from "@/constants/Fonts";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { NotificationsModal } from "@/components/NotificationsModal";
import { BackButton } from "@/components/BackButton";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

function TabBarIcon(props: {
  name: IconName;
  color: string;
  focused: boolean;
}) {
  const { name, focused, ...rest } = props;
  return (
    <Ionicons
      name={focused ? name : (`${name}-outline` as IconName)}
      size={24}
      {...rest}
    />
  );
}

const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: "index", title: "홈", icon: "home" },
  { name: "support", title: "지원금", icon: "cash" },
  { name: "store", title: "성지찾기", icon: "location" },
  { name: "benefits", title: "혜택", icon: "gift" },
  { name: "profile", title: "내정보", icon: "person-circle" },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarLabelPosition: "below-icon",
          tabBarStyle: { height: 56 },
          tabBarIconStyle: { marginBottom: 2 },
          tabBarLabelStyle: { fontSize: 10, fontFamily: FONT },
          headerTitleStyle: { fontFamily: FONT_BOLD },
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
          headerRight: () => (
            <Pressable
              onPress={() => setNotificationsVisible(true)}
              hitSlop={12}
              style={{ padding: 8, marginRight: 7 }}
            >
              {({ pressed }) => (
                <FontAwesomeFreeRegular
                  name="bell"
                  size={20}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      >
        {TABS.map(({ name, title, icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title,
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={icon} color={color} focused={focused} />
              ),
              ...(name === "index"
                ? {
                    headerTitle: () => (
                      <Link href="/" asChild>
                        <Pressable>
                          <Image
                            source={require("@/assets/images/logo.png")}
                            style={{ width: 43, height: 28 }}
                            resizeMode="contain"
                          />
                        </Pressable>
                      </Link>
                    ),
                  }
                : {
                    headerLeft: () => <BackButton />,
                  }),
            }}
          />
        ))}
      </Tabs>
      <NotificationsModal
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </>
  );
}
