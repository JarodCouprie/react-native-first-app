import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({color, focused}) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        title: 'Explore',
                        tabBarIcon: ({color, focused}) => (
                            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="about"
                    options={{
                        title: 'About',
                        tabBarIcon: ({color, focused}) => (
                            <TabBarIcon name={focused ? 'at' : 'at-outline'} color={color}/>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: 'Recherche',
                        tabBarIcon: ({color, focused}) => (
                            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color}/>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="(product)"
                    options={{
                        title: 'Produits',
                        tabBarIcon: ({color, focused}) => (
                            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color}/>
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaProvider>
    );
}
