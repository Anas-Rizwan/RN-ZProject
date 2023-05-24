import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import Pagination from './Pagination';
import styles from './style';
import Timer from './Timer';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';


const ImageItem = ({ item, currentIndex, key }) => {

    return (
        <View key={item.id} style={styles.renderView}>
            <View style={styles.bgImgView}>

                <ImageBackground source={item.bgimg} style={styles.bgImg} >
                    <View >
                        <View style={styles.TopTimerView}>
                            <Timer />
                        </View>
                        <View style={styles.iconView}>
                            <Image source={item.forwardicon} style={{ tintColor: 'white', }} />
                            <Image source={item.favicon} style={{ tintColor: '#B00000', marginHorizontal: moderateScale(21), }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>

                        <View style={styles.bottomview}>
                            <View style={styles.progressview}>
                                <Image source={item.progress} style={{
                                    width: moderateScale(33),
                                    height: moderateVerticalScale(33),
                                }} />
                            </View>

                            <View>
                                <View style={styles.pricebox}>
                                    <Text style={{ color: 'white' }}>{item.price}</Text>
                                    <Image source={item.logo} style={{
                                    width: moderateScale(56),
                                    height: moderateVerticalScale(20),
                                }} />
                                </View>
                                <Pagination item={item} currentIndex={currentIndex} />
                            </View>

                        </View>
                        {/* <View style={{marginLeft: 30,marginRight: 30, backgroundColor: 'red',width: '50%',}}> */}

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
                        {/* </View> */}
                    </View>
                </ImageBackground>
            </View>


        </View>
    )
}

export default ImageItem

