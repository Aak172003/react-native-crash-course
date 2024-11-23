import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Dimensions
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import searchIcon from '../../images/search.png';
import closeIcon from '../../images/close.png'

const { height, width } = Dimensions.get('window');

const Search = () => {
    const navigation = useNavigation()
    const products = useSelector(state => state?.product?.data || []);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const filterData = (text) => {
        setSearchText(text);
        if (text === '') {
            setFilteredData([]);
        } else {
            const newData = products.filter(item =>
                item.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
        }
    };

    return (
        <View style={styles.container}>
            <Header title="Search Items" />

            <View style={styles.searchView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={searchIcon} style={styles.icon} />
                    <TextInput
                        value={searchText}
                        onChangeText={filterData}
                        placeholder="Search Items here..."
                        style={styles.input}
                    />
                </View>
                {searchText !== '' && (
                    <TouchableOpacity
                        style={[styles.icon, { justifyContent: 'center', alignItems: 'center' }]}
                        onPress={() => {
                            setSearchText('');
                            setFilteredData([]);
                        }}
                    >
                        <Image source={closeIcon} style={[styles.icon, { width: 16 }]} />
                    </TouchableOpacity>
                )}
            </View>

            {filteredData.length > 0 ? (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
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
                                    {item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}
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
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchView: {
        width: '90%',
        height: 50,
        borderRadius: 20,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    icon: {
        width: 26,
        height: 26,
        resizeMode: 'center',
    },
    input: {
        width: '80%',
        marginLeft: 20,
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

});