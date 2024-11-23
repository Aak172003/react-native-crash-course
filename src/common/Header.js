import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const { height, width } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon, isCountShow }) => {

    const cartItem = useSelector(state => state.cart)
    const navigation = useNavigation()


    console.log("this is cartItem -------------- cartItem --------------------------- ", cartItem)
    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={() => {
                onClickLeftIcon()
            }}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            {!isCountShow && <View></View>}
            {isCountShow && (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Cart')
                }}>
                    <Image source={rightIcon} style={[styles.icon, { width: 40, height: 40 }]} />
                    <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "#fff", position: 'absolute', right: 0, top: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#000" }}>
                            {cartItem.data.length}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 60,
        backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        color: '#fff',
        fontSize: 20
    }
})