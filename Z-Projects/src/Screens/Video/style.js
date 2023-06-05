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
        height: moderateVerticalScale(50),
        width: moderateScale(50),
    },
    head_arrow_potrait: {
        height: moderateVerticalScale(15),
        width: moderateScale(20),
        marginTop: moderateVerticalScale(57),
        marginRight: moderateScale(20),
    },
    head_rightIcon_potrait: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(55),
    },
    head_logo_landscape: {
        marginTop: moderateVerticalScale(8),
        height: moderateVerticalScale(50),
        width: moderateScale(50),
    },
    head_arrow_landscape: {
        height: moderateVerticalScale(15),
        width: moderateScale(20),
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
        bottom: moderateVerticalScale(90),
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
        textTransform: 'uppercase'
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

    // Player Control Styles

    Control_wrapper: {
        position: 'absolute',
        bottom: moderateVerticalScale(5),
    },
    touchable: {
        padding: 5,
    },
    touchableDisabled: {
        opacity: 0.3,
    },

    // Progress Bar Styles
    // Progress_wrapper_potrait: {
    //     width: "90%",
    //     position: 'absolute',
    //     bottom: moderateVerticalScale(250),
    //     left: moderateScale(40),
    // },
    Progress_wrapper: {
        width: "90%",
        position: 'absolute',
        bottom: moderateVerticalScale(5),
        left: moderateScale(40),
    },
    timeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    timeLeft: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        paddingLeft: 10,
    },
    timeRight: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'right',
        paddingRight: 10,
    },
});
