import {  View } from 'react-native'
import React from 'react'
import ImageData from './ImageData';
import styles from './style';

const Pagination = ({ item, currentIndex }) => {
    return (
        <View
            style={styles.pagination_view}>
            {ImageData?.map((_, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            width: 35,
                            height: 2,
                            borderRadius: currentIndex == index ? 5 : 4,
                            backgroundColor: currentIndex == index ? '#BE9F56' : 'gray',
                            marginLeft: 5,
                        }}></View>
                );
            })}
        </View>
    )
}

export default Pagination