import {Stack} from 'expo-router';
import React from 'react';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="index"
            />
            <Stack.Screen
                name="onboard_addChildScreen"
            />
            <Stack.Screen
                name="onboard_introSlider"
            />
            <Stack.Screen
                name="onboard_questions"
            />
            <Stack.Screen
                name="SignIn"
            />
        </Stack>
    );
}