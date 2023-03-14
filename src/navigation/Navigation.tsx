import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PointsScreen from '../screens/PointsScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PointsScreen" component={PointsScreen} />
        <Stack.Screen
          name="TransactionsDetailScreen"
          component={TransactionDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
