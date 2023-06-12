import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ textTransform: 'capitalize' }}>
              Home
            </Text>
          ),
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              Home
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Tabs.Screen
        name='table'
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-calculator" size={size} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ textTransform: 'capitalize' }}>
              Table
            </Text>
          ),
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              Table
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Tabs.Screen
        name='higher-number'
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="number" size={size} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ textTransform: 'capitalize' }}>
              Higher number
            </Text>
          ),
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              Higher number
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  );
};