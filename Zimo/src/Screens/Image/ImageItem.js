import {  Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import Pagination from './Pagination';
import styles from './style';


const ImageItem = ({ item, currentIndex }) => {

    return (
        <View style={styles.renderView}>
            <View style={styles.bgImgView}>

                <ImageBackground source={item.bgimg} style={styles.bgImg} >
                    <View >
                        <View style={styles.TopTimerView}>
                            <Image source={item.time} />
                        </View>
                        <View style={styles.iconView}>
                            <Image source={item.forwardicon} style={{ tintColor: 'white', marginHorizontal: 10, }} />
                            <Image source={item.favicon} style={{ tintColor: '#B00000', }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>

                        <View style={styles.bottomview}>
                            <View style={styles.progressview}>
                                <Image source={item.progress} />
                            </View>

                            <View>
                                <View style={styles.pricebox}>
                                    <Text style={{ color: 'white' }}>{item.price}</Text>
                                    <Image source={item.logo} />
                                </View>
                                <Pagination item={item} currentIndex={currentIndex} />
                            </View>

                        </View>
                        <View style={styles.bottom_text_view}>
                            <Text style={styles.bottomtext}>SHELTON STREET</Text>
                            <Text style={styles.bottomtext}>COVENT GARDEN</Text>
                            <Text style={styles.bottomtext}>LONDON</Text>
                            <Text style={styles.bottomtext}>WC2H</Text>
                            <Text style={styles.bottomtext}>UNITED KINGDOM</Text>
                        </View>
                        <View style={{ alignSelf: 'flex-end', }}>
                            <Text style={styles.bottom_end_text}>#ZM7861234567</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.bottom_btn_view}>
                <View style={styles.btn_view}>
                    <Text style={styles.btn_text}>£25.00 GBP</Text>
                    <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', }}>
                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageItem

