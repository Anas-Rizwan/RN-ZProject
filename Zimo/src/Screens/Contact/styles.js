import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header_view: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BE9F56',
        // backgroundColor: 'blue',
    },
    Text_view: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: moderateVerticalScale(15),
    },
    user_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BE9F56',
    },
    user_left_view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user_img: {
        width: moderateScale(47),
        height: moderateVerticalScale(47),
        borderRadius: moderateScale(47 / 2),
    },
    contact_view: {
        flex: 1,
        // marginTop: moderateVerticalScale(41),
    },
    sectionHeaderContainer: {
        marginTop: moderateVerticalScale(25),
        marginBottom: moderateVerticalScale(13.4),
    },
    sectionHeaderLabel: {
        color: 'black',
        fontSize: scale(16),
        marginLeft: moderateScale(16),
        fontFamily: 'Lato-Regular',

    },
    listItemContainer: {
        flexDirection: 'row',
    },
    listItem_text_view: {
        marginLeft: moderateScale(30),
        width: '70%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.3)',
        marginBottom: moderateVerticalScale(12),
    },
    listItem_text_name: {
        color: 'black',
        fontSize: scale(11.5),
        marginVertical: moderateScale(5),
        width: moderateScale(90),
        fontFamily: 'Lato-Regular',
    },
    listItem_text_number: {
        fontFamily: 'Lato-Regular',
        marginVertical: moderateScale(5),
        fontSize: scale(11.5),
        width: moderateScale(110),
        marginLeft: moderateScale(46),
        color: 'rgba(0,0,0,.3)',
    },
    listItem_text: {
        fontFamily: 'Lato-Regular',
        marginTop: moderateVerticalScale(6),
        marginLeft: moderateScale(11),
        fontSize: scale(9),
        color: '#BE9F56',
    },
    listItem_text_image: {
        marginTop: moderateVerticalScale(6),
        marginLeft: moderateScale(11),
    },



    new_container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
      },
      leftContainer: {
        flex: 4,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingTop: '30%',
      },
      rightContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      alphabetText: {
        fontSize:scale(10),
        // marginTop: 5,
      },
      selectedText: {
        color: 'red',
        fontWeight: 'bold',
      },
});
