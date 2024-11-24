import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import menuIcon from '../../images/menu.png';
import cartIcon from '../../images/cartIcon.png';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/slices/ProductSlice';

const { height, width } = Dimensions.get('window')

const Home = () => {

    const navigation = useNavigation()
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                json.map((item) => {
                    item.qty = 1
                })
                setProducts(productsWithQty);
                dispatch(addProducts(productsWithQty));
            });
    };

    return (
        <View style={styles.container} >
            <Header leftIcon={menuIcon} rightIcon={cartIcon} title={"Grocery App"} onClickLeftIcon={() => {
                navigation.openDrawer()
            }} isCountShow={true} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={() => {
                            navigation.navigate('ProductDetail', { data: item })
                        }} >
                            <Image
                                source={{ uri: item.image }}
                                style={styles.itemImage}
                            />
                            <View>
                                <Text style={styles.name}>
                                    {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                                </Text>
                                <Text style={styles.description}>
                                    {item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}
                                </Text>
                                <Text style={styles.price}>
                                    {"$" + item.price}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productItem: {
        width: width,
        height: 100,
        marginTop: 10,
        backgroundColor: "#fff",
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemImage: {
        width: 100,
        height: 100
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 20
    },
    description: {
        marginLeft: 20
    },
    price: {
        color: 'green',
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    }
})