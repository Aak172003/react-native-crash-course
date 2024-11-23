import { View } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import cartIcon from '../images/cartIcon.png';
import backButton from '../images/arrow.png';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {

    const navigation = useNavigation()
    return (
        <View>
            <Header leftIcon={backButton} rightIcon={cartIcon} title={"Cart Item"} isCountShow={false} onClickLeftIcon={() => {
                navigation.goBack()
            }} />
        </View>
    )
}

export default Cart