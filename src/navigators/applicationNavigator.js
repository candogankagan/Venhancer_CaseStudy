import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import ComicDetailScreen from '../screens/ComicDetailScreen';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    <Stack.Screen name="ComicDetail" component={ComicDetailScreen} />
  </Stack.Navigator>
);

export default ApplicationNavigator;
