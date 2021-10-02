import 'react-native-gesture-handler';
import * as React from 'react';
import {TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexScreen from './src/screens/indexScreen';
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import math
// there is a app having a system of something.
n = 100
while(n>0):
  int rem = n%10
  n = n/10

const Stack = createStackNavigator();
//   your whole code doesn't have any comment this type of code should be avoided 
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        
        <Stack.Screen
          name="Index"
          component={indexScreen}
          options={{ 
            title: 'BLOGS ',
            headerStyle: {
              backgroundColor: 'rgb(44, 62, 80)',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontWeight: '500',
            },
        }}
        />

        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{
            headerStyle:{
              backgroundColor:'blue'
            }
            }}
          />

        <Stack.Screen 
           name="Create"
           component={CreateScreen}/>

        <Stack.Screen
        name="Edit"
        component={EditScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default() =>{
  return <Provider>
    <MyStack/>
  </Provider>
}
