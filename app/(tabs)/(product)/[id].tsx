import {ActivityIndicator, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {Product} from "@/app/(tabs)/(product)/Product";
import Card from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";

export default function Details() {
    const {id} = useLocalSearchParams();

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(res => setProduct(res))
    }, []);

    if (product == null) {
        return <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            padding: 24
        }}>
            <ThemedText type="default">Chargement du produit</ThemedText>
            <ActivityIndicator size="large"/>
        </View>
    } else {
        return <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 24,
                gap: 8
            }}>
            <Card imageUri={product?.thumbnail} title={product?.title} price={product?.price}></Card>
            <Button title="Acheter" width={200}
                    press={() => console.log(`Achat du produit ${product?.price} €`)}></Button>
        </View>
    }
}