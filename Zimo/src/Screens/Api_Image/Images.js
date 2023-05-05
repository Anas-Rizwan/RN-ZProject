//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FetchImageList } from '../../redux/slice/imageslice';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// create a component
const Images = () => {
    const state = useSelector((state) => state.image)
    const data = state.item?.data.listing

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            let res = dispatch(FetchImageList())
        } catch (error) {
            console.log('Error', error);
        }
    }, [])

    const renderitem = ({ item, index }) => {
        // console.log(item.details.images);
        return (

            <View key={index} style={styles.card_view}>
                <View style={styles.text_view}>
                    <Text style={{ color: 'white', fontSize: scale(15), }}>{item.details.id}</Text>
                </View>
                <View>
                    <Image source={{ uri: item?.details.images }} style={styles.image} />
                </View>
            </View>


        )
    }
    return (

        // <ScrollView >

        <View style={styles.container}>
            {
                state.isLoading ?
                    <ActivityIndicator size={'large'} style={{flex: 1, alignItems: 'center',}} />
                    :
                    <FlatList
                        data={data}
                        renderItem={renderitem}
                        showsVerticalScrollIndicator={false}
                    />
            }
        </View>
        //  </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    card_view: {
        // backgroundColor: 'red',
        marginVertical: moderateVerticalScale(30),
    },
    text_view: {
        backgroundColor: 'gray',
        padding: moderateVerticalScale(15),
        alignItems: 'center',
        marginBottom: moderateVerticalScale(5),
        borderTopRightRadius: moderateVerticalScale(325 / 10),
        borderTopLeftRadius: moderateVerticalScale(325 / 10),
    },
    image: {
        width: moderateScale(255),
        height: moderateVerticalScale(150),
        borderBottomRightRadius: moderateVerticalScale(325 / 10),
        borderBottomLeftRadius: moderateVerticalScale(325 / 10),
    },
});

//make this component available to the app
export default Images;
