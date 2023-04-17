//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Video from 'react-native-video'
import Orientation from 'react-native-orientation-locker';
import styles from './style';



const VideoContent = () => {

    const [show, setshow] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);
    const [loading, setloading] = useState(true);

    const videoRef = React.createRef();
    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);
        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);

    }, [])

    const handleOrientation = orientation => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            setFullscreen(true);
            StatusBar.setHidden(true);
        } else {
            setFullscreen(false);
            StatusBar.setHidden(false);
        }
    };
    const handleclick = () => {
        setshow(!show)
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            {
                show ?
                    <View style={fullscreen ? styles.head_container_landscape : styles.head_container_potrait}>

                        <Image style={fullscreen ? styles.head_arrow_landscape : styles.head_arrow_potrait} source={require('../../Assets/arrow.png')} tintColor="white" />
                        <Image source={require('../../Assets/logo_zimo.png')} style={fullscreen ? styles.head_logo_landscape : styles.head_logo_potrait} />
                        <View style={fullscreen ? styles.head_rightIcon_landscape : styles.head_rightIcon_potrait} >
                            <Image style={{ marginRight: moderateScale(17), }} source={require('../../Assets/forward.png')} tintColor="white" />
                            <Image source={require('../../Assets/favorite.png')} tintColor="red" />

                        </View>
                    </View>
                    :
                    ""
            }



            {
                loading ?
                    <ActivityIndicator size="large" color="#fff" style={{ flex: 1, justifyContent: 'center', }} />
                    :
                    <View style={styles.videocontainer}>

                        <TouchableHighlight activeOpacity={1} onPress={handleclick}>

                            <Video
                                ref={videoRef}
                                source={require('../../Assets/Video.mp4')}
                                resizeMode='contain'
                                controls={true}
                                style={fullscreen ? styles.fullscreenVideo : styles.video}
                            />

                        </TouchableHighlight>
                    </View>
            }
            {
                show ?

                    <View style={fullscreen ? styles.bottom_view_landscape : styles.bottom_view_potrait}>

                        <View style={styles.bottom_text_view}>
                            <Text style={styles.bottomtext}>SHELTON STREET</Text>
                            <Text style={styles.bottomtext}>COVENT GARDEN</Text>
                            <Text style={styles.bottomtext}>LONDON</Text>
                            <Text style={styles.bottomtext}>WC2H</Text>
                            <Text style={styles.bottomtext}>UNITED KINGDOM</Text>
                        </View>

                        <View>
                            <Text style={styles.bottom_price_text}>£5,000,000 GBP</Text>
                            <Text style={fullscreen ? styles.bottom_end_text_landscape : styles.bottom_end_text_potrait}>#ZM7861234567</Text>
                        </View>

                    </View>
                    :
                    ""
            }

        </View>
    );
};

export default VideoContent;
