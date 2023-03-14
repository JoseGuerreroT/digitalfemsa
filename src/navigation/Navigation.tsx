import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PointsScreen from '../screens/PointsScreen';
import TransactionDetailScreen from '../screens/TransactionDetailsScreen';
import TransactionDetailHeader from '../screens/TransactionDetailsScreen/TransactionDetailsHeader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
  );
}

export default App;
