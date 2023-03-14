import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PointsScreen from '../screens/PointsScreen';
import TransactionDetailScreen from '../screens/TransactionDetailsScreen';
import TransactionDetailHeader from '../screens/TransactionDetailsScreen/TransactionDetailsHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {},
          }}>
          <Stack.Screen
            name="TransactionsDetailScreen"
            component={TransactionDetailScreen}
            options={{
              header: () => <TransactionDetailHeader />,
            }}
          />
          {/* <Stack.Screen
          options={{
            header: () => null,
          }}
          name="PointsScreen"
          component={PointsScreen}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
