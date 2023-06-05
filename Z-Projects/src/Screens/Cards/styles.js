import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b52657',
    },
    card_view: {
        borderRadius: moderateVerticalScale(30),
        marginVertical: moderateVerticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2.5,
    },
    card_text: {
        color: 'white',
        fontSize: scale(20),
        marginTop: moderateVerticalScale(15),
    },
    image: {
        borderRadius: moderateVerticalScale(30),
        width: moderateScale(255),
        height: moderateVerticalScale(150),
        borderBottomRightRadius: moderateVerticalScale(325 / 10),
        borderBottomLeftRadius: moderateVerticalScale(325 / 10),
    },

});
