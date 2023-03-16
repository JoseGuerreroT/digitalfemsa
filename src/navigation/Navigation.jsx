import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {pointsRoutes} from '../domains/Points/routes/routes';

const Stack = createNativeStackNavigator();
const allRoutes = {...pointsRoutes};
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {},
          }}>
          {Object.keys(allRoutes).map(routeKey => {
            return (
              <Stack.Screen
                key={routeKey}
                options={allRoutes[routeKey].options}
                name={allRoutes[routeKey].name}
                component={allRoutes[routeKey].component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
