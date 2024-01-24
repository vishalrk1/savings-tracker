import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home/Home';
import HistoryScreen from './History/History';
import ProfileScreen from './Profile/Profile';
import MyTabBar from '../components/BottomTabBar/BottomTabBar';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './Loading/Loading';
import SignInScreen from './Authentication/SignIn';
import {useTheme} from 'react-native-paper';
import GoalScreen from './Goal/GoalScreen';
import AddGoalScreen from './FormScreen/AddGoalScreen';
import AddTransactionScreen from './FormScreen/AddTransactionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};

export const StackNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={LoadingScreen} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          headerTitle: 'Sign In',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="GoalScreen"
        component={GoalScreen}
        options={({navigation, route}) => ({
          title: route.params.goalName,
          headerShown: true,
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        })}
      />
      <Stack.Screen
        name="AddGoalScreen"
        component={AddGoalScreen}
        options={{
          headerShown: true,
          title: 'Add Goal',
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="AddTransactionScreen"
        component={AddTransactionScreen}
        options={{
          headerShown: true,
          title: 'Save Money',
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};
