import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from "react-native";

export default function TabAbout() {
    return (
        <ParallaxScrollView headerBackgroundColor={{light: '#ffe8c8', dark: '#6e4807'}}
                            headerImage={<Ionicons size={310} name="at" style={styles.headerImage}/>}>
            <ThemedView>
                <ThemedText type="title">À propos</ThemedText>
            </ThemedView>
            <ThemedText>Je m'appelle Jarod, j'ai 25 ans</ThemedText>
            <ThemedText>Je suis développeur full stack</ThemedText>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#ffab26',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});