//import liraries
import React, { useEffect, } from 'react';
import { View, Text, ActivityIndicator, FlatList, Animated, Dimensions, SafeAreaView, StatusBar, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMovieList } from '../../redux/slice/movieslice';
import { FetchImageList } from '../../redux/slice/imageslice';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './styles';
import { moderateScale } from 'react-native-size-matters';


const Card = () => {
    const state = useSelector((state) => state.image)
    const dispatch = useDispatch();
    const data = state.item?.data
    // console.log('state', data);

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

    useEffect(() => {
        try {
            let res = dispatch(FetchImageList())
        } catch (error) {
            console.log('Error', error);
        }
    }, [])

    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    const ratio = 228 / 362;
    const { width } = Dimensions.get("window");
    const WIDTH = width * 0.8;
    const HEIGHT = WIDTH * ratio;

    const MARGIN = 16;
    const CARD_HEIGHT = HEIGHT + MARGIN * 2;
    const { height: wHeight } = Dimensions.get("window");
    const height = wHeight - 64;


    // Flatlist render Item return
    const renderItem = ({ item, index }) => {
        // console.log('item', item);
        const position = Animated.subtract(index * CARD_HEIGHT, y);
        const isDisappearing = -CARD_HEIGHT;
        const isTop = 0;
        const isBottom = height - CARD_HEIGHT;
        const isAppearing = height;

        const translateY = Animated.add(
            Animated.add(
                y,
                y.interpolate({
                    inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                    outputRange: [0, -index * CARD_HEIGHT],
                    extrapolateRight: "clamp",
                })
            ),
            position.interpolate({
                inputRange: [isBottom, isAppearing],
                outputRange: [0, -CARD_HEIGHT / 4],
                extrapolate: "clamp",
            })
        );
        const scale = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
            extrapolate: "clamp",
        });
        const opacity = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
        });


        return (
            <Animated.View key={item.id} style={[styles.card_view, {
                width: WIDTH,
                height: HEIGHT,
            }, { opacity, transform: [{ translateY }, { scale }] }]}>

                <View style={styles.text_view}>
                    <Text style={{ color: 'white', fontSize: moderateScale(15), }}>{item?.id}</Text>
                </View>
                <View>
                    <Image source={{ uri: item?.download_url }} style={styles.image} />
                </View>

                {/* <Text style={styles.card_text}>Title: {item.title}</Text>
                <Text style={styles.card_text}>Release Year: {item.releaseYear}</Text> */}
            </Animated.View>
        )
    }

    // Main Component return
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <SafeAreaView>

                {state.isLoading ?
                    <ActivityIndicator size="large" color="#fff" /> :
                    <View style={{ marginVertical: moderateVerticalScale(20), }}>
                        <AnimatedFlatList
                            scrollEventThrottle={16}
                            bounces={false}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            {...{ onScroll }}
                        />
                    </View>
                }
            </SafeAreaView>
        </View>
    );
};
export default Card;
