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
        position: 'relative',
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
    bottom_view_landscape: {
        flexDirection: 'column',
        bottom: moderateVerticalScale(70),
    },
    bottom_view_potrait: {
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'center',
        bottom: moderateVerticalScale(160),
    },
    bottom_text_view:{
        flexDirection: 'row',
        alignSelf: 'center',
    },
    bottomtext: {
        color: 'white',
        fontSize: scale(7.5),
        marginHorizontal: moderateScale(5),
    },
    bottom_price_text: {
        color: 'white',
        fontSize: scale(9.5),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(8),
    },
    bottom_end_text_potrait: {
        color: 'white',
        fontSize: scale(7),
        alignSelf: 'flex-end',
        marginTop: moderateVerticalScale(-7),
    },
    bottom_end_text_landscape: {
        color: 'white',
        fontSize: scale(7),
        alignSelf: 'flex-end',
        marginTop: moderateVerticalScale(-7),
        marginRight: moderateScale(28),
    },
});
