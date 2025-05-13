import React, {useEffect, useState} from 'react';
import {debug, isStorageExists, setStorage} from "@/helpers/helper";
import SignIn from "@/app/(auth)/SignIn";
import IntroSlider from './onboard_introSlider';
import {ActivityIndicator} from "react-native";
import {PRIMARY_COLOR} from "@/assets/constants";
import {useAuthStore} from "@/stores/useAuthStore";
import HomeScreen from "@/app/(tabs)";
import {useNavigation} from '@react-navigation/native';

const AuthIndex: React.FC = () => {
    const [onboarding, setOnboarding] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const authStore = useAuthStore((state) => state.isLoggedIn);
    const navigation = useNavigation();

    useEffect(() => {
        isStorageExists("is_onboarding_completed").then(isOnBoarded => {
            if (isOnBoarded === null) {
                setStorage("is_onboarding_completed", "1").then(() => {
                    setOnboarding(false);
                    setIsLoading(false);
                })
            } else {
                setOnboarding(true);
                setIsLoading(false);
            }
        });
    }, []);


    return (
        <>
            {isLoading ? (
                <ActivityIndicator size="large" color={PRIMARY_COLOR}/>
            ) : onboarding ? (
                <SignIn/>
            ) : (
                <IntroSlider/>
            )}
        </>
    );
};

export default AuthIndex;