import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../common/Header'
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');

const WishList = () => {
    const navigation = useNavigation()
    const Items = useSelector(state => state.wishlist)
    const [wishListItem, setWishListItem] = useState([]);

    // RealTime Update 
    useEffect(() => {
        setWishListItem(Items.data)
    }, [Items])

    return (
        <View style={styles.container}>
            <Header title={'WishList Item'} />
            {wishListItem.length > 0 ? (
                <FlatList
                    data={wishListItem}
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
                                <Text style={styles.price}>{"$" + item.price}</Text>
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
    )
}

export default WishList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataText: {
        fontSize: 18,
        color: 'gray',
    },

})