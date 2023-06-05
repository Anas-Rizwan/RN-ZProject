import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CountDown from 'react-native-countdown-component';
import styles from './style';


const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;
// const width = Dimensions.get('window').width
const Timer = () => {
    return (
        <View style={styles.countdown_view}>
            <CountDown
                until={6825600}
                // style={}
                digitStyle={styles.digitStyle}
                digitTxtStyle={styles.digitTxtStyle}
                timeLabelStyle={styles.timeLabelStyle}

                // size={40}
            />
        </View>
    )
}

export default Timer

