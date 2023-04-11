import { StyleSheet, Dimensions, } from 'react-native';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';



const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor: 'black',

    },
    head_container: {
        flex: moderateScale(0.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: scale(1),
    },
    head_logo: {
        width: moderateScale(150),
        height: moderateVerticalScale(40),
    },
    head_rightIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateVerticalScale(23),
    },
    videocontainer: {
        flexDirection: 'column',
    },
    video: {
        height: "100%",
        width: "100%",
    },
    fullscreenVideo: {
        height: height,
        width: width,
        backgroundColor: 'black',
    },
    controlOverlay: {
        position: 'absolute',
        top: "47%",
        bottom: moderateVerticalScale(0),
        left: "88%",
        right: moderateScale(0),
    },
});
