import { StyleSheet, Dimensions, } from 'react-native';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';



const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor: 'black',

    },
    head_container_potrait: {
        flex: moderateScale(0.1),
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: scale(1),
    },
    head_container_landscape: {
        flex: moderateScale(0.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: scale(1),
    },
    
    head_logo_potrait: {
        marginTop: moderateVerticalScale(40),
    },
    head_arrow_potrait: {
        marginTop: moderateVerticalScale(42),
        marginRight: moderateScale(25),
    },
    head_rightIcon_potrait: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(40),
        // marginRight: moderateScale(30),
    },
    head_logo_landscape: {
        marginTop: moderateVerticalScale(22),
    },
    head_arrow_landscape: {
        marginTop: moderateVerticalScale(23),
        marginLeft: moderateScale(40),
    },
    head_rightIcon_landscape: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(20),
        marginRight: moderateScale(40),
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
        width: '100%',
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'center',
        bottom: moderateVerticalScale(160),
    },
    bottom_text_view: {
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
        marginRight: moderateScale(25),
    },
    bottom_end_text_landscape: {
        color: 'white',
        fontSize: scale(7),
        alignSelf: 'flex-end',
        marginTop: moderateVerticalScale(-7),
        marginRight: moderateScale(30),
    },
});
