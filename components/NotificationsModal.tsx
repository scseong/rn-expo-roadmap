import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FONT, FONT_BOLD } from "@/constants/Fonts";

const SCREEN_HEIGHT = Dimensions.get("window").height;

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
};

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "지원금 계산 결과가 도착했어요",
    description: "휴대폰 지원금 최대 50만원까지 확인 가능해요.",
    time: "방금 전",
    unread: true,
  },
  {
    id: "2",
    title: "우리 동네 성지에 특가 이벤트",
    description: "성지찾기에서 최저가 매장을 확인해보세요.",
    time: "1시간 전",
    unread: true,
  },
  {
    id: "3",
    title: "적립하신 지원금이 곧 만료돼요",
    description: "지원금 적립 내역을 확인하고 사용해보세요.",
    time: "어제",
    unread: false,
  },
];

export function NotificationsModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      translateY.setValue(SCREEN_HEIGHT);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, translateY]);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: SCREEN_HEIGHT,
      duration: 200,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <Pressable style={styles.backdrop} onPress={handleClose} />
      <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
        <View style={styles.handle} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>알림</Text>
          <Pressable onPress={handleClose} hitSlop={8}>
            <Ionicons name="close" size={22} color="#8D8C99" />
          </Pressable>
        </View>
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {NOTIFICATIONS.map((item) => (
            <View key={item.id} style={styles.item}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: item.unread ? "#5B2FE0" : "#E5E4EA" },
                ]}
              />
              <View style={styles.flex1}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDesc}>{item.description}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(23, 21, 29, 0.4)",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: "75%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
  },
  handle: {
    alignSelf: "center",
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E4EA",
    marginBottom: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  list: {
    marginTop: 4,
  },
  item: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F0F4",
  },
  flex1: {
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  itemTitle: {
    fontSize: 13.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  itemDesc: {
    fontSize: 12,
    fontFamily: FONT,
    color: "#726F7C",
    marginTop: 3,
    lineHeight: 17,
  },
  itemTime: {
    fontSize: 10.5,
    fontFamily: FONT,
    color: "#B3B2BB",
    marginTop: 6,
  },
});
