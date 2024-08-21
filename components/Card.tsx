import {Image, StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useColorScheme} from "@/hooks/useColorScheme";

export type DataProps = {
    imageUri?: string,
    title?: string,
    price?: number,
}

export default function Card({imageUri, title, price}: DataProps) {
    const theme = useColorScheme();
    return <View style={{...styles.card, backgroundColor: theme === "light" ? "#d9d9d9" : "#383838"}}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <Image style={{width: "100%", height: 200}} source={{
            uri: imageUri,
        }}/>
        <ThemedText type="default">{price} €</ThemedText>
    </View>
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 300,
        padding: 24,
        borderRadius: 10,
    }
});