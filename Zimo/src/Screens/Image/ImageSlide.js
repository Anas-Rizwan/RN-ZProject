import { Dimensions, FlatList, StyleSheet,  View } from 'react-native'
import React, { useState } from 'react'
import ImageData from './ImageData'
import ImageItem from './ImageItem'


const { height, width } = Dimensions.get('window');
const ImageSlide = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View style={styles.container}>
            
            <FlatList
                data={ImageData}
                renderItem={({item})=> <ImageItem item={item} currentIndex={currentIndex} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                  }}
            />
        </View>
    )
}

export default ImageSlide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})