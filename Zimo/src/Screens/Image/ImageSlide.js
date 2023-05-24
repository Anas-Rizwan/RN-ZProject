import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ImageData from './ImageData'
import ImageItem from './ImageItem'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import styles from './style'


const { height, width } = Dimensions.get('window');
const ImageSlide = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" style={{ marginLeft: moderateScale(25), }} />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" />
                <Image source={require('../../Assets/bag.png')} style={{ marginRight: moderateScale(25), }} />
            </View>
            <View>
                <Text style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: scale(18),
                    marginTop: moderateVerticalScale(9),
                    marginBottom: moderateVerticalScale(24),
                    marginLeft: moderateScale(25),
                    color: '#BE9F56',
                }}>JUST FOR ME</Text>
            </View>
            <Image source={require('../../Assets/img_right.png')} style={styles.bg_img_right} />
            <Text style={styles.bg_text}>MEMBERSHIP</Text>
            <Image source={require('../../Assets/img_left.png')} style={styles.bg_img_left} />


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
            <ScrollView>
                {
                    ImageData.map((val, i) => {
                        console.log(currentIndex);
                        return (
                            <>
                                <View key={i}  style={{
                                    marginVertical: 20,
                                }}>
                                    <View >
                                        <FlatList

                                            data={val.newData}
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
            </ScrollView>

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

