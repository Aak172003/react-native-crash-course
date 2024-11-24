import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import backButton from '../images/arrow.png';
import cartIcon from '../images/cartIcon.png';
import wishListIcon from '../images/heart.png';
import redIcon from '../images/red-icon.png'
import Header from '../common/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToWishList, removeItemFromWishList } from '../redux/slices/WishlistSlice';
import Toast from 'react-native-toast-message';
import { addItemToCart } from '../redux/slices/CartSlice';
import { ScrollView } from 'react-native';

const ProductDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { data } = route.params;

  const wishListItems = useSelector(state => state.wishlist.data);

  const cartItems = useSelector(state => state.cart.data)
  const [isLike, setIsLike] = useState(false)
  const [inCart, setIncart] = useState(false)

  useEffect(() => {
    if (wishListItems.some(item => item.id === data.id)) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }

    if (cartItems.some(item => item.id === data.id)) {
      setIncart(true)
    }
    else {
      setIncart(false)
    }
  }, [wishListItems, cartItems])

  return (
    <View style={styles.container}>
      <Header
        leftIcon={backButton}
        rightIcon={cartIcon}
        title={"Product Detail"}
        onClickLeftIcon={() => navigation.goBack()}
        isCountShow={true}
      />
      <ScrollView>
        <Image
          source={{ uri: data.image }}
          style={styles.bannerImage}
        />
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.description}>{data?.description}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.price, { color: "#000" }]}>{"Price: "}</Text>
          <Text style={styles.price}>{"$" + data?.price}</Text>
        </View>

        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => {
            const isItemInWishlist = wishListItems.some(item => item.id === data.id);

            if (isItemInWishlist) {
              const itemIndex = wishListItems.findIndex(item => item.id === data.id);
              dispatch(removeItemFromWishList(itemIndex));
              Toast.show({
                type: 'success',
                text1: '👋 Removed from Wishlist',
              });
            } else {
              dispatch(addItemToWishList(data));
              Toast.show({
                type: 'success',
                text1: '👋 Added to Wishlist',
              });
            }
          }}
        >
          {/* initial me white then red  */}
          <Image source={isLike ? redIcon : wishListIcon} style={styles.icon} />
        </TouchableOpacity>

        {!inCart && <CustomButton
          bg={'#000'}
          title={'Add To Cart'}
          color={"#fff"}
          onClick={() => {
            dispatch(addItemToCart(data));
          }}
        />}
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bannerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'center'
  },
  title: {
    fontSize: 22,
    color: "#000",
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  price: {
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    marginRight: -20
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  icon: {
    width: 30,
    height: 30,
    padding: 2
  }
});
