import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BudgetList from './screens/BudgetList';
import BudgetEntry from './screens/BudgetEntry';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BudgetEntry"
          component={BudgetEntry}
          options={{
            title: 'Budget Entry',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 23,
            },
            headerShown: true,
            headerStyle: {
              height: 65,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen name="BudgetList" component={BudgetList} 
        options={{
          title: 'Budget List',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 23,
          },
          headerShown: true,
          headerStyle: {
            height: 65,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
