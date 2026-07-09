import Svg, {
  Circle,
  Ellipse,
  Line,
  Path,
  Rect,
  Text as SvgText,
} from "react-native-svg";

export { Chevron } from "@/components/icons/Chevron";

export function PhoneCardIcon() {
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

export function InternetTvIcon() {
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

export function WaterPurifierIcon() {
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
      <Path d="M8 24H16" stroke="#8FAAF6" strokeWidth={2} strokeLinecap="round" />
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

export function LocationFeatureIcon() {
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

export function CompareFeatureIcon() {
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

export function PriceFeatureIcon() {
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

export function TradePhoneOutlineIcon({
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

export function CartIcon() {
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

export function StoreIcon() {
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

export function CoinsBadgeIcon() {
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

export function ShieldIcon() {
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

export function LockIcon() {
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

export function HeadsetIcon() {
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
