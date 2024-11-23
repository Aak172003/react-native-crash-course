import { View, StyleSheet, TouchableOpacity, Image, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';

import homeIcon from '../images/home.png';
import heartIcon from '../images/heart.png';
import notificationIcon from '../images/notification.png';
import searchIcon from '../images/search.png';
import userIcon from '../images/user.png';
import Home from './tabs/Home';
import Search from './tabs/Search';
import WishList from './tabs/WishList';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState();
    const [isKeyBoardVisible, setIsKeyBoardVisible] = useState(false)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyBoardVisible(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyBoardVisible(false)
        })
    })

    return (
        <View style={styles.container}>
            {
                selectedTab == 0 ? (<Home />) :
                    selectedTab == 1 ? (<Search />) :
                        selectedTab == 2 ? (<WishList />) :
                            selectedTab == 3 ? (<Notification />) :
                                selectedTab == 4 ? (<User />) : null
            }
            {/* Bottom Navigation */}
            {!isKeyBoardVisible && (
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.bottomTab} onPress={() => setSelectedTab(0)}>
                        <Image source={homeIcon} style={styles.bottomTabIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab} onPress={() => setSelectedTab(1)}>
                        <Image source={searchIcon} style={styles.bottomTabIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab} onPress={() => setSelectedTab(2)}>
                        <Image source={heartIcon} style={styles.bottomTabIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab} onPress={() => setSelectedTab(3)}>
                        <Image source={notificationIcon} style={styles.bottomTabIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab} onPress={() => setSelectedTab(4)}>
                        <Image source={userIcon} style={styles.bottomTabIcon} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    bottomTab: {
        width: "20%",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabIcon: {
        width: 24,
        height: 24,
    },
});
