import {View, Text, TouchableOpacity} from 'react-native';
import { useTheme } from 'react-native-paper';

const MyTabBar = ({state, descriptors, navigation}) => {
  const theme = useTheme()
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 70,
              backgroundColor: theme.colors.primary,
              width: '100%',
            }}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  color: isFocused ? 'white' : '#222',
                  fontWeight: isFocused ? 'bold' : 'normal',
                  fontSize: 18,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default MyTabBar;
