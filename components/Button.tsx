import {Alert, DimensionValue, Pressable, StyleSheet, Text} from "react-native";
import {useColorScheme} from "@/hooks/useColorScheme";
import {Colors, primary} from "@/constants/Colors";

type ButtonProps = {
    title: string,
    width?: DimensionValue,
    press: () => void
}

export default function Button({title, width = "100%", press}: ButtonProps) {

    const colorScheme = useColorScheme();

    return <Pressable style={{...styles.button, width, backgroundColor: primary}}
                      onPress={press}>
        <Text>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})