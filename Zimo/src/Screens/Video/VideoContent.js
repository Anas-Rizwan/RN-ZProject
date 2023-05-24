//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text, TouchableHighlight, ActivityIndicator, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Video from 'react-native-video'
import Orientation from 'react-native-orientation-locker';
import styles from './style';
import ProgressBar from './ProgressBar';
import PlayerControls from './PlayerControls';
import axios from 'axios'
import NetInfo from "@react-native-community/netinfo";

const VideoContent = () => {

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [play, setPlay] = useState(true);
    const [show, setshow] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);
    const [loading, setloading] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const videoRef = React.createRef();
    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);
        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

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
        console.log(show);
        setshow(!show)
        // setTimeout(() => setshow(false), 5000);
    }

    const handlePlayPause = () => {
        if (play) {
            setPlay(false);
            setTimeout(() => setshow(false), 5000);
            return;
        }
        // setTimeout(() => setshow(false), 5000);
        setPlay(true);
    };

    const handlePlay = () => {
        console.log("on play ");
        setTimeout(() => setshow(false), 5000);
        setPlay(true);
    };

    const onLoad = data => {
        setloading(false);
        setDuration(data.duration);
        setCurrentTime(data.currentTime);
        setVideoLoaded(true);
        setDuration(data.duration);
        setCurrentTime(data.currentTime);
    };

    const onProgress = data => {
        setCurrentTime(data.currentTime);
    };

    const onSeek = data => {
        videoRef.current.seek(data.seekTime);
        setCurrentTime(data.seekTime);
    };

    const onEnd = () => {
        setPlay(false);
        videoRef.current.seek(0);
    };

    const onError = () => {
        setHasError(true);
        setIsConnected(false);
    };
    

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



            {(
                loading && !videoLoaded &&
                <ActivityIndicator size="large" color="#fff" style={{ justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: '50%', }} />
            )}
           
            {!isConnected && !loading && (
                <ActivityIndicator size="large" color="#fff" style={{ justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: '50%', zIndex: 1, }} />
            )}

            {hasError && !loading && (
                <ActivityIndicator size="large" color="#fff" style={{ justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: '50%',zIndex: 1, }} />
            )}

            <TouchableHighlight activeOpacity={1} onPress={handleclick}>
                <View style={styles.videocontainer}>

                        <Video
                            ref={videoRef}
                            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
                            resizeMode='contain'
                            style={fullscreen ? styles.fullscreenVideo : styles.video}
                            onLoad={onLoad}
                            onProgress={onProgress}
                            onEnd={onEnd}
                            paused={!play || !isConnected}
                            onError={onError}

                        />
                
                 
                    {show && (
                        <View style={styles.controlOverlay}>


                            <PlayerControls
                                onPlay={handlePlay}
                                onPause={handlePlayPause}
                                playing={play}
                                fullscreen={fullscreen}
                            />

                            <ProgressBar
                                currentTime={currentTime}
                                duration={duration > 0 ? duration : 0}
                                onSlideStart={handlePlayPause}
                                onSlideComplete={handlePlayPause}
                                onSlideCapture={onSeek}
                                fullscreen={fullscreen}
                            />
                        </View>
                    )}
                </View>
            </TouchableHighlight>
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
