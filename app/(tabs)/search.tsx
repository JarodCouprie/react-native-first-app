import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from "react-native";

export default function TabSearch() {
    return (
        <ParallaxScrollView headerBackgroundColor={{light: '#dfffd9', dark: '#0e3601'}}
                            headerImage={<Ionicons size={310} name="search" style={styles.headerImage}/>}>
            <ThemedView>
                <ThemedText type="title">Recherche</ThemedText>
            </ThemedView>

            <ThemedText>Il n'y a rien pour le moment</ThemedText>



        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#4fb712',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});