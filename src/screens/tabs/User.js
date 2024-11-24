import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../common/Header'
import backButton from '../../images/arrow.png';
import userIcon from '../../images/user.png';

import cartIcon from '../../images/cartIcon.png';
import { useNavigation } from '@react-navigation/native';

const User = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header
                leftIcon={backButton}
                rightIcon={cartIcon}
                title={"User"}
                onClickLeftIcon={() => navigation.goBack()}
                isCountShow={true}
            />


            <Image source={userIcon} style={styles.user} />

            <Text style={styles.name}>Gaurav</Text>
            <Text style={styles.name}>gaurav@gmail.com</Text>

            <TouchableOpacity style={[styles.tab, { marginTop: 40 }]}>
                <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, { marginTop: 10 }]}>
                <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, { marginTop: 10 }]}>
                <Text style={styles.text}>Addresses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, { marginTop: 10 }]}>
                <Text style={styles.text}>Payment Methods</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tab, { marginTop: 10 }]}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    user: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50
    },
    name: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600',
        color: "#000"
    },
    tab: {
        width: "90%",
        height: 50,
        borderBottomWidth: 0.3,
        alignSelf: 'center',
        borderBottomColor: "#AOAOAO",
        paddingLeft: 20,
        justifyContent: "center"
    },
    text: {
        color: "#000"
    }
})
