import { Dimensions, StyleSheet, } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    // ****************** ImageItem style ***************************
    

    bgImgView: {
        alignItems: 'center',
        width,
        alignSelf: 'center',
    },

    bgImg: {
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20),
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: moderateScale(340),
        height: moderateVerticalScale(450),
    },
    

    iconView: {
        marginTop: moderateVerticalScale(20),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    bottomview: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    progressview:{
        marginRight: moderateScale(60),
    },
    pricebox: {
        marginTop: moderateVerticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottom_text_view: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(7),
    },
    bottomtext: {
        marginHorizontal: moderateScale(4),
        color: 'white',
        fontSize: scale(8),
    },
    bottom_end_text: {
        marginVertical: moderateVerticalScale(4),
        marginRight: moderateScale(25),
        color: 'white',
        fontSize: scale(7),
    },
    bottom_btn_view: {
        width: moderateScale(340),
        height: moderateVerticalScale(52),
        backgroundColor: 'black',
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(5),
    },
    btn_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn_text: {
        color: 'white',
        fontSize: scale(16),
        marginHorizontal: moderateScale(24),
    },
    btn_end_text: {
        alignSelf: 'flex-end',
        marginRight: moderateScale(25),
        color: 'white',
        fontSize: scale(7),
    },
    // ****************** Pagination style ***************************
    pagination_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateVerticalScale(10),
    },

    // ****************** Timer style ***************************
    digitStyle:
    {
        backgroundColor: 'transparent',
        height: moderateVerticalScale(70),
        width: moderateScale(80),
    },
    digitTxtStyle: {
        color: '#fff',
        fontWeight: 100,
        fontSize: scale(40)
    },
    timeLabelStyle: {
        color: '#fff',
        fontWeight: 100,
        marginTop: moderateVerticalScale(-13),
        fontSize: scale(12),
    },
})
