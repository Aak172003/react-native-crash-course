import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header'
import backButton from '../images/arrow.png';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';

const Signup = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const addUser = () => {
        console.log("User Registered Successfully")
    }

    return (
        <View style={styles.container}>

            <Header
                leftIcon={backButton}
                title={'Signup Form'}
                onClickLeftIcon={() => navigation.goBack()}
                isCountShow={false}
            />
            <Text style={styles.title}>Create New Account</Text>

            <TextInput
                placeholder='Enter Name'
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder='Enter Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder='Enter Mobile'
                style={styles.input}
                value={mobileNo}
                onChangeText={(text) => setMobileNo(text)}
            />
            <TextInput
                placeholder='Enter Password'
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                placeholder='Enter Confirm Password'
                style={styles.input}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <CustomButton bg={"#000"} title={'Sign Up'} color={'#fff'} onClick={() => {
                addUser()
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