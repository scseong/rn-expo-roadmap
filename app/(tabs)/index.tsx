import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, {
  Circle,
  Ellipse,
  Line,
  Path,
  Rect,
  Text as SvgText,
} from "react-native-svg";

function Chevron({ color, size = 14 }: { color: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 6L15 12L9 18"
        stroke={color}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function PhoneCardIcon() {
  return (
    <Svg width={18} height={27} viewBox="0 0 34 52" fill="none">
      <Rect
        x={2}
        y={2}
        width={30}
        height={48}
        rx={8}
        fill="#fff"
        stroke="#5B2FE0"
        strokeWidth={2.4}
      />
      <Rect x={12} y={6} width={10} height={2} rx={1} fill="#5B2FE0" />
    </Svg>
  );
}

function InternetTvIcon() {
  return (
    <Svg width={26} height={22} viewBox="0 0 40 34" fill="none">
      <Line
        x1={12}
        y1={10}
        x2={9}
        y2={2}
        stroke="#26232E"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Line
        x1={24}
        y1={10}
        x2={27}
        y2={2}
        stroke="#26232E"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect x={4} y={10} width={32} height={16} rx={4} fill="#26232E" />
      <Circle cx={12} cy={18} r={1.6} fill="#4CD4A0" />
      <Circle cx={18} cy={18} r={1.6} fill="#6B6878" />
      <Circle cx={24} cy={18} r={1.6} fill="#6B6878" />
    </Svg>
  );
}

function WaterPurifierIcon() {
  return (
    <Svg width={22} height={24} viewBox="0 0 40 42" fill="none">
      <Rect
        x={4}
        y={2}
        width={22}
        height={30}
        rx={6}
        fill="#fff"
        stroke="#B9CBF8"
        strokeWidth={1.6}
      />
      <Rect x={9} y={9} width={12} height={7} rx={2} fill="#EAF0FE" />
      <Path
        d="M8 24H16"
        stroke="#8FAAF6"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect x={25} y={21} width={6} height={5} rx={1} fill="#4C6FE0" />
      <Path d="M22 29L34 29L32 39L24 39Z" fill="#DCE8FF" />
      <Path
        d="M27 31V37"
        stroke="#4C6FE0"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function LocationFeatureIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C12 22 19 15.5 19 10A7 7 0 1 0 5 10C5 15.5 12 22 12 22Z"
        fill="#7B4FEA"
      />
      <Circle cx={12} cy={10} r={2.6} fill="#fff" />
    </Svg>
  );
}

function CompareFeatureIcon() {
  return (
    <Svg width={16} height={25} viewBox="0 0 20 30" fill="none">
      <Rect
        x={1}
        y={1}
        width={18}
        height={28}
        rx={4}
        stroke="#26232E"
        strokeWidth={1.6}
      />
      <Path
        d="M4 19L8 14L11 16L16 10"
        stroke="#7B4FEA"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

function PriceFeatureIcon() {
  return (
    <Svg width={26} height={22} viewBox="0 0 26 22" fill="none">
      <Rect x={0} y={14} width={4} height={8} rx={1} fill="#C9B8F7" />
      <Rect x={7} y={9} width={4} height={13} rx={1} fill="#A98CF2" />
      <Rect x={14} y={4} width={4} height={18} rx={1} fill="#7B4FEA" />
      <Path
        d="M2 12L11 5L15 8L22 1"
        stroke="#5B2FE0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M17 1H22V6"
        stroke="#5B2FE0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

function TradePhoneOutlineIcon({
  width,
  height,
  stroke,
}: {
  width: number;
  height: number;
  stroke: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 46 76" fill="none">
      <Rect
        x={3}
        y={3}
        width={40}
        height={64}
        rx={10}
        fill="#fff"
        stroke={stroke}
        strokeWidth={2.2}
      />
      <Circle cx={23} cy={58} r={3} stroke={stroke} strokeWidth={1.6} />
      <Rect x={13} y={10} width={20} height={2} rx={1} fill={stroke} />
    </Svg>
  );
}

function CartIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 8H18L17 21H7L6 8Z"
        fill="#DCE8FF"
        stroke="#4C6FE0"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <Path d="M9 8V6A3 3 0 0 1 15 6V8" stroke="#4C6FE0" strokeWidth={1.4} />
    </Svg>
  );
}

function StoreIcon() {
  return (
    <Svg width={26} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 9L5 4H19L20 9"
        stroke="#7B4FEA"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <Path
        d="M4 9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 10.1 12.9 11 14 11C15.1 11 16 10.1 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9"
        stroke="#7B4FEA"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <Path d="M5 11V20H19V11" stroke="#7B4FEA" strokeWidth={1.6} />
      <Path d="M10 20V15H14V20" stroke="#7B4FEA" strokeWidth={1.6} />
    </Svg>
  );
}

function CoinsBadgeIcon() {
  return (
    <Svg width={26} height={20} viewBox="0 0 26 20" fill="none">
      <Ellipse cx={8} cy={14} rx={8} ry={5} fill="#F5C451" />
      <Ellipse cx={8} cy={11} rx={8} ry={5} fill="#FFD873" />
      <Ellipse cx={17} cy={9} rx={7} ry={4.5} fill="#F5C451" />
      <Ellipse cx={17} cy={6} rx={7} ry={4.5} fill="#FFD873" />
      <Circle cx={17} cy={6} r={5} fill="#5B2FE0" />
      <SvgText
        x={17}
        y={9}
        textAnchor="middle"
        fontSize={7}
        fontWeight="800"
        fill="#fff"
      >
        P
      </SvgText>
    </Svg>
  );
}

function ShieldIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3L19 6V11C19 15.5 16 19 12 21C8 19 5 15.5 5 11V6L12 3Z"
        stroke="#8D8C99"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <Path
        d="M9 12L11 14L15 9.5"
        stroke="#8D8C99"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect
        x={5}
        y={10}
        width={14}
        height={10}
        rx={2.5}
        stroke="#8D8C99"
        strokeWidth={1.6}
      />
      <Path d="M8 10V7A4 4 0 0 1 16 7V10" stroke="#8D8C99" strokeWidth={1.6} />
    </Svg>
  );
}

function HeadsetIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 13V12A8 8 0 0 1 20 12V13"
        stroke="#8D8C99"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <Rect
        x={3}
        y={13}
        width={4}
        height={6}
        rx={1.5}
        stroke="#8D8C99"
        strokeWidth={1.6}
      />
      <Rect
        x={17}
        y={13}
        width={4}
        height={6}
        rx={1.5}
        stroke="#8D8C99"
        strokeWidth={1.6}
      />
      <Path
        d="M19 19V20A3 3 0 0 1 16 23H14"
        stroke="#8D8C99"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const SUBSIDY_CARDS = [
  {
    key: "phone",
    bg: "#F1ECFB",
    accent: "#5B2FE0",
    title: "휴대폰 지원금\n계산",
    amount: "50",
    desc: "통신사·요금제 별\n최대 지원금 확인",
    icon: <PhoneCardIcon />,
    href: "/support" as const,
  },
  {
    key: "internet",
    bg: "#FCEDF1",
    accent: "#F5316B",
    title: "인터넷·TV 결합\n지원금",
    amount: "48",
    desc: "인터넷과 TV 결합 시\n받을 수 있는 혜택",
    icon: <InternetTvIcon />,
  },
  {
    key: "water",
    bg: "#EAF0FC",
    accent: "#2451F2",
    title: "정수기 렌탈\n지원금",
    amount: "30",
    desc: "정수기 렌탈 시\n받을 수 있는 혜택",
    icon: <WaterPurifierIcon />,
  },
];

const FEATURES = [
  {
    key: "store-finder",
    title: "전국성지찾기",
    desc: "우리 동네 성지\n최저가 매장 찾기",
    icon: <LocationFeatureIcon />,
    showChevron: false,
    href: "/store" as const,
  },
  {
    key: "compare",
    title: "알뜰폰 비교",
    desc: "알뜰폰 요금제\n한눈에 비교",
    icon: <CompareFeatureIcon />,
    showChevron: true,
  },
  {
    key: "price",
    title: "내폰 시세",
    desc: "내 폰의 현재\n시세 확인",
    icon: <PriceFeatureIcon />,
    showChevron: true,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <LinearGradient
        colors={["#F8F6FE", "#EFE8FC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>내 휴대폰 지원금,</Text>
          <Text style={[styles.heroTitle, { color: "#5B2FE0" }]}>
            지금 바로 확인하세요
          </Text>
          <Text style={styles.heroSubtitle}>
            숨은 지원금까지 한 번에 비교하고{"\n"}가장 유리한 조건으로
            안내드려요.
          </Text>
          <View style={styles.heroButtons}>
            <Link href="/support" asChild>
              <Pressable style={styles.heroPrimaryButton}>
                <Text style={styles.heroPrimaryButtonText}>
                  지원금 계산하기
                </Text>
                <Chevron color="#fff" size={14} />
              </Pressable>
            </Link>
            <Pressable style={styles.heroSecondaryButton}>
              <Text style={styles.heroSecondaryButtonText}>
                인터넷 결합 보기
              </Text>
              <Chevron color="#5B2FE0" size={14} />
            </Pressable>
          </View>
        </View>

        <View style={styles.heroIllustration} pointerEvents="none">
          <View style={[styles.sparkle, { top: 2, left: 6 }]} />
          <View
            style={[
              styles.sparkle,
              { top: 34, left: 118, width: 6, height: 6 },
            ]}
          />
          <View
            style={[
              styles.sparkle,
              { top: 56, left: 2, width: 5, height: 5, opacity: 0.85 },
            ]}
          />

          <View
            style={[
              styles.coin,
              { left: 0, bottom: 12, backgroundColor: "#E8AE38" },
            ]}
          />
          <View
            style={[
              styles.coin,
              { left: 0, bottom: 20, backgroundColor: "#F5C451" },
            ]}
          />
          <View
            style={[
              styles.coin,
              {
                left: 3,
                bottom: 28,
                width: 54,
                height: 24,
                backgroundColor: "#E8AE38",
              },
            ]}
          />
          <View
            style={[
              styles.coin,
              {
                left: 3,
                bottom: 36,
                width: 54,
                height: 24,
                backgroundColor: "#FFD873",
              },
            ]}
          />
          <View style={styles.coinSlot} />

          <View style={styles.tv}>
            <View style={styles.tvStand} />
            <View style={styles.tvBase} />
          </View>
          <View style={styles.tvAntenna} />

          <View style={styles.phoneMock}>
            <View style={styles.phoneScreen} />
            <View style={styles.phoneNotch} />
            <View style={styles.phoneWonBadge}>
              <Text style={styles.phoneWonText}>₩</Text>
            </View>
            <Text style={styles.phoneLabel}>지원금</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Subsidy cards */}
      <View style={styles.subsidyRow}>
        {SUBSIDY_CARDS.map((card) => {
          const body = (
            <View style={[styles.subsidyCard, { backgroundColor: card.bg }]}>
              <Text style={styles.subsidyCardTitle}>{card.title}</Text>
              <View style={styles.subsidyCardIcon}>{card.icon}</View>
              <View style={styles.amountRow}>
                <Text style={[styles.maxLabel, { color: card.accent }]}>
                  최대
                </Text>
                <Text style={[styles.amountText, { color: card.accent }]}>
                  {card.amount}
                </Text>
                <Text style={[styles.amountUnit, { color: card.accent }]}>
                  만원
                </Text>
              </View>
              <Text style={styles.subsidyCardDesc}>{card.desc}</Text>
              <View style={styles.subsidyCardFooter}>
                <View style={styles.circleButton}>
                  <Chevron color={card.accent} size={14} />
                </View>
              </View>
            </View>
          );
          return card.href ? (
            <Link key={card.key} href={card.href} asChild>
              <Pressable style={styles.flex1}>{body}</Pressable>
            </Link>
          ) : (
            <Pressable key={card.key} style={styles.flex1}>
              {body}
            </Pressable>
          );
        })}
      </View>

      {/* Recommended features */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>추천 기능</Text>
          <View style={styles.moreLink}>
            <Text style={styles.moreLinkText}>더보기</Text>
            <Chevron color="#8D8C99" size={14} />
          </View>
        </View>
        <View style={styles.featuresRow}>
          {FEATURES.map((feature) => {
            const body = (
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>{feature.icon}</View>
                <View>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDesc}>{feature.desc}</Text>
                </View>
                {feature.showChevron && (
                  <View style={styles.featureChevron}>
                    <Chevron color="#C7C5D1" size={11} />
                  </View>
                )}
              </View>
            );
            return feature.href ? (
              <Link key={feature.key} href={feature.href} asChild>
                <Pressable style={styles.flex1}>{body}</Pressable>
              </Link>
            ) : (
              <Pressable key={feature.key} style={styles.flex1}>
                {body}
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Used phone trade */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>중고폰 거래</Text>
        <View style={styles.tradeRow}>
          <Pressable style={[styles.tradeCard, { backgroundColor: "#E9F6EE" }]}>
            <Text style={[styles.tradeTitle, { color: "#17803D" }]}>
              중고폰 판매
            </Text>
            <Text style={styles.tradeDesc}>
              간편하게 견적받고{"\n"}안전하게 판매하세요
            </Text>
            <View style={styles.tradeIllustration}>
              <TradePhoneOutlineIcon width={52} height={86} stroke="#26232E" />
              <View style={styles.tradeWonBadge}>
                <Text style={styles.phoneWonText}>₩</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.tradeCard, { backgroundColor: "#EAF0FC" }]}>
            <Text style={[styles.tradeTitle, { color: "#2A4BC7" }]}>
              중고폰 구매
            </Text>
            <Text style={styles.tradeDesc}>
              검증된 제품을{"\n"}합리적인 가격에 구매
            </Text>
            <View style={styles.tradeIllustration}>
              <TradePhoneOutlineIcon width={40} height={66} stroke="#7B93E8" />
              <View style={styles.cartIconWrap}>
                <CartIcon />
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Quick links bar */}
      <View style={styles.linksBarWrap}>
        <View style={styles.linksBar}>
          <Pressable style={styles.linkItem}>
            <StoreIcon />
            <View style={styles.flex1}>
              <Text style={styles.linkTitle}>창업 문의</Text>
              <Text style={styles.linkDesc}>대리점·판매점 창업 안내</Text>
            </View>
            <Chevron color="#C7C5D1" size={13} />
          </Pressable>
          <View style={styles.linksDivider} />
          <Pressable style={styles.linkItem}>
            <CoinsBadgeIcon />
            <View style={styles.flex1}>
              <Text style={styles.linkTitle}>지원금 적립</Text>
              <Text style={styles.linkDesc}>적립하고 현금처럼 사용</Text>
            </View>
            <Chevron color="#C7C5D1" size={13} />
          </Pressable>
        </View>

        {/* <Pressable style={styles.talkButton}>
          <Text style={styles.talkButtonText}>TALK</Text>
        </Pressable> */}
      </View>

      {/* Trust row */}
      <View style={styles.trustRow}>
        <View style={styles.trustItem}>
          <ShieldIcon />
          <Text style={styles.trustText}>안전한 거래</Text>
        </View>
        <View style={styles.trustDivider} />
        <View style={styles.trustItem}>
          <LockIcon />
          <Text style={styles.trustText}>개인정보 보호</Text>
        </View>
        <View style={styles.trustDivider} />
        <View style={styles.trustItem}>
          <HeadsetIcon />
          <Text style={styles.trustText}>전문 상담 지원</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const FONT = "Pretendard";
const FONT_BOLD = "Pretendard-Bold";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 24,
  },
  flex1: {
    flex: 1,
  },

  // Hero
  hero: {
    margin: 16,
    marginTop: 12,
    padding: 20,
    paddingTop: 24,
    borderRadius: 22,
    overflow: "hidden",
    minHeight: 216,
  },
  heroText: {
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    lineHeight: 30,
  },
  heroSubtitle: {
    marginTop: 10,
    fontSize: 13,
    fontFamily: FONT,
    color: "#726F7C",
    lineHeight: 20,
  },
  heroButtons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
  },
  heroPrimaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#5B2FE0",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  heroPrimaryButtonText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
  heroSecondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1.4,
    borderColor: "#C9B8F7",
  },
  heroSecondaryButtonText: {
    color: "#5B2FE0",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },
  heroIllustration: {
    position: "absolute",
    top: 14,
    right: -8,
    width: 142,
    height: 192,
  },
  sparkle: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#DCCEF8",
    transform: [{ rotate: "45deg" }],
    borderRadius: 2,
  },
  coin: {
    position: "absolute",
    width: 58,
    height: 26,
    borderRadius: 13,
  },
  coinSlot: {
    position: "absolute",
    left: 17,
    bottom: 58,
    width: 15,
    height: 19,
    backgroundColor: "#8659F2",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    transform: [{ rotate: "45deg" }],
  },
  tv: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 58,
    height: 50,
    borderRadius: 9,
    backgroundColor: "#9D7CEA",
    overflow: "hidden",
  },
  tvStand: {
    position: "absolute",
    left: 24,
    top: 0,
    width: 9,
    height: 50,
    backgroundColor: "#D2BEF7",
  },
  tvBase: {
    position: "absolute",
    left: 0,
    top: 13,
    width: 58,
    height: 9,
    backgroundColor: "#D2BEF7",
  },
  tvAntenna: {
    position: "absolute",
    right: 20,
    bottom: 48,
    width: 18,
    height: 10,
    backgroundColor: "#D2BEF7",
    borderRadius: 5,
  },
  phoneMock: {
    position: "absolute",
    left: 18,
    top: 0,
    width: 98,
    height: 182,
    borderRadius: 24,
    backgroundColor: "#7B4FEA",
  },
  phoneScreen: {
    position: "absolute",
    top: 7,
    left: 7,
    right: 7,
    bottom: 7,
    borderRadius: 18,
    backgroundColor: "#fff",
  },
  phoneNotch: {
    position: "absolute",
    top: 11,
    left: "50%",
    marginLeft: -13,
    width: 26,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#7B4FEA",
  },
  phoneWonBadge: {
    position: "absolute",
    top: 54,
    left: "50%",
    marginLeft: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7B4FEA",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneWonText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: FONT_BOLD,
  },
  phoneLabel: {
    position: "absolute",
    top: 112,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#5B2FE0",
    fontSize: 13,
    fontFamily: FONT_BOLD,
  },

  // Subsidy cards
  subsidyRow: {
    flexDirection: "row",
    gap: 9,
    marginHorizontal: 16,
    marginBottom: 26,
  },
  subsidyCard: {
    borderRadius: 18,
    padding: 12,
    minHeight: 196,
  },
  subsidyCardTitle: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    lineHeight: 15,
    paddingRight: 16,
  },
  subsidyCardIcon: {
    position: "absolute",
    top: 14,
    right: 8,
  },
  maxLabel: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    marginRight: 2,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 12,
  },
  amountText: {
    fontSize: 28,
    fontFamily: FONT_BOLD,
  },
  amountUnit: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  subsidyCardDesc: {
    fontSize: 10.5,
    color: "#726F7C",
    fontFamily: FONT,
    lineHeight: 15,
    marginTop: 10,
  },
  subsidyCardFooter: {
    marginTop: "auto",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#5B2FE0",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  // Section shared
  section: {
    marginHorizontal: 16,
    marginBottom: 26,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONT_BOLD,
    color: "#17151D",
    marginBottom: 14,
  },
  moreLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  moreLinkText: {
    fontSize: 12.5,
    fontFamily: FONT,
    color: "#8D8C99",
  },

  // Recommended features
  featuresRow: {
    flexDirection: "row",
    gap: 8,
  },
  featureCard: {
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EEEDF3",
    borderRadius: 16,
    padding: 10,
    paddingVertical: 12,
  },
  featureIcon: {
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 11,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  featureDesc: {
    fontSize: 9,
    color: "#8D8C99",
    fontFamily: FONT,
    lineHeight: 13,
    marginTop: 3,
  },
  featureChevron: {
    position: "absolute",
    top: 14,
    right: 10,
  },

  // Used phone trade
  tradeRow: {
    flexDirection: "row",
    gap: 10,
  },
  tradeCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 150,
    overflow: "hidden",
  },
  tradeTitle: {
    fontSize: 14.5,
    fontFamily: FONT_BOLD,
  },
  tradeDesc: {
    fontSize: 11,
    color: "#5B5A63",
    fontFamily: FONT,
    lineHeight: 18,
    marginTop: 8,
    maxWidth: 140,
  },
  tradeIllustration: {
    position: "absolute",
    right: 10,
    bottom: 6,
    width: 78,
    height: 86,
    alignItems: "flex-end",
  },
  tradeWonBadge: {
    position: "absolute",
    right: 0,
    bottom: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#22B573",
    borderWidth: 2.5,
    borderColor: "#E9F6EE",
    alignItems: "center",
    justifyContent: "center",
  },
  cartIconWrap: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  // Quick links bar
  linksBarWrap: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  linksBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EFEEF3",
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  linkItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },
  linkTitle: {
    fontSize: 12.5,
    fontFamily: FONT_BOLD,
    color: "#17151D",
  },
  linkDesc: {
    fontSize: 10,
    color: "#8D8C99",
    fontFamily: FONT,
    marginTop: 3,
  },
  linksDivider: {
    width: 1,
    backgroundColor: "#EFEEF3",
  },
  talkButton: {
    position: "absolute",
    right: -8,
    top: "50%",
    marginTop: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFDD00",
    borderWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  talkButtonText: {
    fontSize: 10.5,
    fontFamily: FONT_BOLD,
    color: "#171717",
  },

  // Trust row
  trustRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#F1F0F4",
  },
  trustItem: {
    alignItems: "center",
    gap: 5,
  },
  trustText: {
    fontSize: 10,
    color: "#8D8C99",
    fontFamily: FONT,
  },
  trustDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E4EA",
  },
});
