import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    // ****************** ImageItem style ***************************
    renderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgImgView: {
        alignItems: 'center',
        width,
    },

    bgImg: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400,
        height: height / 2 + 150,
    },
    TopTimerView: {
        marginTop: 30,
    },

    iconView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    bottomview: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    pricebox: {

        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottom_text_view: {
        flexDirection: 'row',
        marginTop: 9,
        // backgroundColor: 'white',
    },
    bottomtext: {
        marginHorizontal: 4,
        color: 'white',
        fontSize: 9,
    },
    bottom_end_text: {
        marginTop: 4,
        marginRight: 25,
        color: 'white',
        fontSize: 9,
    },
    bottom_btn_view: {
        width: "98%",
        height: height / 2 - 310,
        backgroundColor: 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        marginTop: 5,
    },
    btn_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn_text: {
        color: 'white',
        fontSize: 16,
        
    },
    btn_end_text: {
        marginTop: 2,
        marginRight: 25,
        color: 'white',
        fontSize: 7,
    },
// ****************** Pagination style ***************************
    pagination_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
})