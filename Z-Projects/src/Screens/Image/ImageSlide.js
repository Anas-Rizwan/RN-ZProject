import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ImageData from './ImageData'
import ImageItem from './ImageItem'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './style'
import Orientation from 'react-native-orientation-locker';


const { height, width } = Dimensions.get('window');
const ImageSlide = () => {
    useEffect(() => {
        Orientation.lockToPortrait(); // Locks the orientation to portrait when the component is mounted

        return () => {
            Orientation.unlockAllOrientations(); // Unlocks all orientations when the component is unmounted
        };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleScroll = (event) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / width);
        setCurrentIndex(index);
    };
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" style={{ height: moderateVerticalScale(15), width: moderateScale(20), marginLeft: moderateScale(25), }} />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" style={{ height: moderateVerticalScale(50), width: moderateScale(50), }} />
                <Image source={require('../../Assets/bag.png')} style={{ height: moderateVerticalScale(19), width: moderateScale(16), marginRight: moderateScale(25), }} />
            </View>
            <View>
                <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: scale(18),
                    marginTop: moderateVerticalScale(9),
                    marginBottom: moderateVerticalScale(24),
                    marginLeft: moderateScale(25),
                    color: '#BE9F56',
                }}>JUST FOR YOU</Text>
            </View>
            {/* <Image source={require('../../Assets/img_right.png')} style={styles.bg_img_right} />
            <Text style={styles.bg_text}>MEMBERSHIP</Text>
            <Image source={require('../../Assets/img_left.png')} style={styles.bg_img_left} /> */}

            <View >
                <FlatList
                    data={ImageData}
                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={handleScroll}
                    windowSize={2} // Adjust the windowSize as needed

                />
            </View>
            <TouchableOpacity activeOpacity={.85} onPress={() => alert(`You have Selected Number ${currentIndex + 1} House`)}>
                <View style={styles.bottom_btn_view}>
                    <View style={styles.btn_view}>
                        <Text style={styles.btn_text}>$25.00 </Text>
                        <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                    </View>
                    <Text style={styles.btn_end_text}>#AB789456321</Text>

                </View>
            </TouchableOpacity>
            {/* <FlatList
                data={ImageData}
                renderItem={({ item, index }) => {
                    console.log('currentIndex', currentIndex);
                    return (
                        <>
                            <View >
                                <FlatList

                                    data={item.newData}
                                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled
                                    onScroll={e => {
                                        const x = e.nativeEvent.contentOffset.x;
                                        console.log((x / width).toFixed(0));
                                        setCurrentIndex((x / width).toFixed(0));
                                    }}
                                />
                            </View>
                            <TouchableOpacity activeOpacity={.85} onPress={() => alert(index)}>
                                <View style={styles.bottom_btn_view}>
                                    <View style={styles.btn_view}>
                                        <Text style={styles.btn_text}>£25.00 GBP</Text>
                                        <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                    </View>
                                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                </View>
                            </TouchableOpacity>

                        </>
                    )
                }}
            /> */}
            {/* <ScrollView>
                {
                    ImageData.map((val, i) => {
                        console.log(currentIndex);
                        return (
                            <>
                                <View key={i} style={{
                                    marginVertical: 20,
                                }}>
                                    <View >
                                        <FlatList

                                            data={val.newData}
                                            renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            pagingEnabled
                                            onScroll={handleScroll}
                                            windowSize={2} // Adjust the windowSize as needed

                                        />
                                    </View>
                                    <TouchableOpacity activeOpacity={.85} onPress={() => alert(i)}>
                                        <View style={styles.bottom_btn_view}>
                                            <View style={styles.btn_view}>
                                                <Text style={styles.btn_text}>£25.00 GBP</Text>
                                                <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                                            </View>
                                            <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    })
                }
            </ScrollView> */}
            {/* <View  style={{
                    marginTop: moderateVerticalScale(37),
                    // marginBottom: moderateVerticalScale(54),
                    // marginLeft: moderateScale(25),
                    // color:'#BE9F56',
                }}>
                <FlatList
                    data={ImageData}
                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        console.log((x / width).toFixed(0));
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                />
            </View> */}
            {/* <TouchableOpacity activeOpacity={.85}>
                <View style={styles.bottom_btn_view}>
                    <View style={styles.btn_view}>
                        <Text style={styles.btn_text}>£25.00 GBP</Text>
                        <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                    </View>
                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>

                </View>
            </TouchableOpacity> */}
            <View style={styles.line}></View>
        </View >
    )
}

export default ImageSlide

