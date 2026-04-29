import { Stack } from 'expo-router';
import React from 'react';

export default function RootGroupLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
