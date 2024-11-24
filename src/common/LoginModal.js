import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import closeIcon from '../images/close.png'

const LoginModal = ({ modalVisible, onClickLogin, onClickSingnUp, onClose }) => {
    return (
        <Modal visible={modalVisible} transparent >

            <View style={styles.modalView}>
                <View style={styles.mainView}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        onClickLogin()
                    }}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { marginBottom: 20 }]} onPress={() => {
                        onClickSingnUp()
                    }}>
                        <Text style={styles.btnText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {
                        onClose()
                    }}>
                        <Image source={closeIcon} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default LoginModal


const styles = StyleSheet.create({
    modalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: "center"
    },
    mainView: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: "80%",
        height: 60,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: "600",
        color: "white"
    },
    icon: {
        height: 24,
        width: 24
    },
    clearBtn: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})