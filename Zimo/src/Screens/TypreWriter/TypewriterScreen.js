//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TypeWriter from "@sucho/react-native-typewriter"
import { scale } from 'react-native-size-matters';
// create a component
const TypeWriterScreen = () => {
    return (
        <View style={styles.container}>
            <TypeWriter
                textArray={['COMING SOON']}
                loop
                speed={100}
                delay={500}
                textStyle={styles.typeWriterText}
                cursorStyle={styles.typeWriterCursorText}
            />
        </View>
    );
};


const WHITE = '#ffffff'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    typeWriterText: {
        color: WHITE,
        fontSize: scale(24),
    },
    typeWriterCursorText: {
        color: WHITE,
        fontSize: scale(24),
      },
});

//make this component available to the app
export default TypeWriterScreen;
