import {useSafeAreaInsets} from "react-native-safe-area-context";
import {FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import Card from "@/components/Card";
import {Link} from "expo-router";
import {Product} from "@/app/(tabs)/(product)/Product";

export default function TabProducts() {

    const insets = useSafeAreaInsets();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products").then(res => res.json()).then(res => setProducts(res.products))
    }, []);

    return <View style={{
        marginBottom: insets.bottom,
        marginTop: insets.top,
        marginLeft: insets.left,
        marginRight: insets.right,
        padding: 12,
    }}>
        <FlatList data={products}
                  horizontal={true}
                  keyExtractor={(item) => String(item.id)} style={{padding: 12}}
                  renderItem={({item}) =>
                      <Link href={`/${item.id}`} style={{margin: 8}}>
                          <Card key={item.id} title={item.title} imageUri={item.thumbnail} price={item.price}/>
                      </Link>
                  }
        />
    </View>
}