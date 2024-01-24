import Svg, {Path} from 'react-native-svg';

export const UpDownArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-up-down">
      <Path d="m21 16-4 4-4-4" />
      <Path d="M17 20V4" />
      <Path d="m3 8 4-4 4 4" />
      <Path d="M7 4v16" />
    </Svg>
  );
};
