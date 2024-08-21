import {Stack} from 'expo-router';
import React from "react";

export default function ProductLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#16b364',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="index" options={{
                title: 'Produits',
            }}
            />
            <Stack.Screen
                name="[id]" options={{
                title: 'Produits',
                // headerShown: false,
            }}
            />
        </Stack>
    );
}