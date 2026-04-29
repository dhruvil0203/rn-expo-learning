import React from 'react';
import { Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: '#1a1a2e',
            width: 280,
          },
          drawerActiveTintColor: 'orange',
          drawerInactiveTintColor: '#ccc',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerLeft: () => (
            <Pressable onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
              <Ionicons name="menu" size={28} color="white" />
            </Pressable>
          ),
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="user/[user]"
          options={{
            drawerLabel: 'User Profiles',
            title: 'User Profiles',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="products/[products]"
          options={{
            drawerLabel: 'Products',
            title: 'Products',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cube" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="docs/[...slug]"
          options={{
            drawerLabel: 'Documentation',
            title: 'Documentation',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
