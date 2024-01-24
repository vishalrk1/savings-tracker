import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator, {StackNavigator} from './src/screens/Navigators';
import {PaperProvider} from 'react-native-paper';

import 'react-native-url-polyfill/auto';
import {UserContextProvider} from './src/provider/userProvider';

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <PaperProvider>
          <StackNavigator />
        </PaperProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
