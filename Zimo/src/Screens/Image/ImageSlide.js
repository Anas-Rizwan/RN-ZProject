import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImageData from './ImageData'
import ImageItem from './ImageItem'
import styles from './style'


const { height, width } = Dimensions.get('window');
const ImageSlide = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={ImageData}
                    renderItem={({ item }) => <ImageItem item={item} currentIndex={currentIndex} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                />
            </View>
            <TouchableOpacity activeOpacity={.85}>
            <View style={styles.bottom_btn_view}>
                <View style={styles.btn_view}>
                    <Text style={styles.btn_text}>£25.00 GBP</Text>
                    <Text style={styles.btn_text}>BUY ENTRY NOW</Text>
                </View>
                    <Text style={styles.btn_end_text}>#ZM7861234567</Text>
                
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default ImageSlide

