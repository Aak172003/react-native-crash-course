import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import backButton from '../images/arrow.png';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';

const Signup = () => {

    const navigation = useNavigation();

    return (


        <View style={styles.container}>

            <Header
                leftIcon={backButton}
                title={'Signup Form'}
                onClickLeftIcon={() => navigation.goBack()}
                isCountShow={false}
            />
            <Text style={styles.title}>Create New Account</Text>

            <TextInput placeholder='Enter Name ' style={styles.input} />
            <TextInput placeholder='Enter Email ' style={styles.input} />
            <TextInput placeholder='Enter Mobile ' style={styles.input} />
            <TextInput placeholder='Enter Password ' style={styles.input} />
            <TextInput placeholder='Enter Confirm Password ' style={styles.input} />


            <CustomButton bg={"#000"} title={'Sign Up'} color={'#fff'} onClick={() => {

            }} />

            <Text style={styles.loginText} onPress={() => {
                navigation.navigate('Login')
            }}>Login</Text>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#000",
        fontSize: 30,
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 50,
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingLeft: 20,
        alignSelf: 'center',
        marginTop: 10
    },
    loginText: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 18,
        textDecorationLine: 'underline'
    }
})