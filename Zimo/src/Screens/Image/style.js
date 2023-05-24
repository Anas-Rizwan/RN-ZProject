import { Dimensions, StyleSheet, } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',

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
        fontSize: scale(7.5),
        fontFamily: 'Lato-Regular',
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



    bg_img_right: {
        position: 'absolute',
        width: moderateScale(204),
        height: moderateVerticalScale(100),
        alignSelf: 'flex-end',
        marginTop: moderateVerticalScale(100),
        tintColor: 'rgba(0,0,0,.6)'
    },
    bg_text: {
        position: 'absolute',
        top: moderateVerticalScale(135),
        left: moderateScale(57),
        fontFamily: 'Lato-Regular',
        fontSize: scale(42),
        color: "rgba(0,0,0,.06)",
        alignSelf: 'center',
        letterSpacing: 2,
    },
    bg_img_left: {
        position: 'absolute',
        width: moderateScale(204),
        height: moderateVerticalScale(100),
        bottom: moderateVerticalScale(60),
        tintColor: 'rgba(0,0,0,.6)'
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: moderateVerticalScale(49),
        borderBottomWidth: 0.5,
        // marginBottom: 100,
    },
})
