import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import cartIcon from '../images/cartIcon.png';
import backButton from '../images/arrow.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../redux/slices/CartSlice';

const { height, width } = Dimensions.get('window');

const Cart = () => {
    const navigation = useNavigation();
    const cartItem = useSelector(state => state.cart);

    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartData(cartItem.data);
    }, [cartItem]);

    return (
        <View style={styles.container}>
            <Header
                leftIcon={backButton}
                rightIcon={cartIcon}
                title={"Cart Item"}
                isCountShow={false}
                onClickLeftIcon={() => {
                    navigation.goBack();
                }}
            />
            {cartData.length > 0 ? (
                <FlatList
                    data={cartData}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.productItem}
                            onPress={() => navigation.navigate('ProductDetail', { data: item })}
                        >
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View>
                                <Text style={styles.name}>
                                    {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                                </Text>
                                <Text style={styles.description}>
                                    {item.description.length > 30
                                        ? item.description.substring(0, 30) + '...'
                                        : item.description}
                                </Text>

                                <View style={styles.qtyView}>
                                    <Text style={styles.price}>{"$" + item.price}</Text>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => {
                                            if (item.qty > 1) {
                                                dispatch(reduceItemFromCart(item));
                                            } else {
                                                dispatch(removeItemFromCart(index));
                                            }
                                        }}
                                    >
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{ fontSize: 18, marginLeft: 10 }}>{item.qty}</Text>

                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={() => {
                                            dispatch(addItemToCart(item));
                                        }}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>No Data To Show</Text>
                </View>
            )}
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the container takes full screen height
        backgroundColor: '#fff',
    },
    productItem: {
        width: width,
        height: 100,
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    description: {
        marginLeft: 10,
        color: 'gray',
    },
    price: {
        color: 'green',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    noDataContainer: {
        flex: 1, // Ensures the view takes full height
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
    },
    noDataText: {
        fontSize: 18,
        color: 'gray',
    },
    qtyView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    btn: {
        padding: 5,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        marginLeft: 10,
    },
});
