//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Platform, Image, TouchableOpacity, FlatList, SectionList, ScrollView } from 'react-native';
import Contact from 'react-native-contacts';
import SectionListContacts from 'react-native-sectionlist-contacts'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import AlphabetList from "react-native-flatlist-alphabet";


const alphabet = [
    {
        title: 'A'
    },
    {
        title: 'B'
    },
    {
        title: 'C'
    },
    {
        title: 'D'
    },
    {
        title: 'E'
    },
    {
        title: 'F'
    },
    {
        title: 'G'
    },
    {
        title: 'H'
    },
    {
        title: 'I'
    },
    {
        title: 'J'
    },
    {
        title: 'K'
    },
    {
        title: 'L'
    },
    {
        title: 'M'
    },
    {
        title: 'N'
    },
    {
        title: 'O'
    },
    {
        title: 'P'
    },
    {
        title: 'Q'
    },
    {
        title: 'R'
    },
    {
        title: 'S'
    },
    {
        title: 'T'
    },
    {
        title: 'U'
    },
    {
        title: 'V'
    },
    {
        title: 'W'
    },
    {
        title: 'X'
    },
    {
        title: 'Y'
    },
    {
        title: 'Z'
    },

]
// create a component
const ContactPage = () => {
    const [contactList, setContactList] = useState([]);
    const [alpha, setalpha] = useState();
    useEffect(() => {
        getPermission();
    }, []);
    const getPermission = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        }).then(res => {
            if (res == 'granted') {
                Contact.getAll()
                    .then(con => {
                        // const ContactData = con.reduce((r, s) => {
                        //     r.push({ title: s.displayName, data: s.phoneNumbers });
                        //     return r;
                        // }, []);
                        // // console.log('ContactData',ContactData);
                        // console.log(con);
                        // // console.log(con.phoneNumbers[0].number);
                        setContactList(con);
                        setalpha(alphabet)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        });
    };
    // const ROW_HEIGHT = 60
    // const HEADER_HEIGHT = 100
    // const getItemLayout = (data, index) => ({
    //     length: ROW_HEIGHT + 20,
    //     offset: (ROW_HEIGHT + 20) * index + HEADER_HEIGHT,
    //     index
    // })

    // // const renderItem = ({ item, index }) => {
    // //     console.log('item', item);
    // //     return (
    // //         <View >
    // //             <TouchableOpacity
    // //                 //   onPress={this.onPressRow.bind(this, item, index)}
    // //                 style={styles.rowButton}
    // //             >
    // //                 <View style={styles.titleTextContainer}>
    // //                     <Text style={styles.titleText}>{item.displayName}</Text>
    // //                     <Text style={{ color: '#fff', marginTop: 4 }}>
    // //                         {item.phoneNumbers[0].number}
    // //                     </Text>
    // //                 </View>
    // //             </TouchableOpacity>
    // //         </View>
    // //     )
    // // }

    // const YourItemHeight = 30
    // const YourHeaderHeight = 30
    // // const ColorOfTheIndexSidebarLetters ='black'
    // const renderSectionHeader = (section) => {
    //     return (
    //         <View style={styles.sectionHeaderContainer}>
    //             <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
    //         </View>
    //     );
    // };
    //   var getfirstletter = function(value){
    //     return(
    //         item = value.displayName && value.displayName.substr(0, 20)
    //     )
    //   }
    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" style={{ width: moderateScale(100), height: moderateVerticalScale(25), }} />
                <Image source={require('../../Assets/bag.png')} />
            </View>

            <View style={styles.Text_view}>
                {/* <Image source={require('../../Assets/arrow.png')} tintColor="black" /> */}
                <Text style={{ fontSize: scale(12), }}>786 Contacts</Text>
                <Text style={{ fontSize: scale(25), marginRight: moderateScale(20), }}>CONTACT</Text>
                {/* <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" /> */}
                <Image style={{ marginRight: moderateScale(20), }} source={require('../../Assets/contact.png')} />
            </View>

            <View style={styles.user_view}>
                <View style={styles.user_left_view}>
                    <Image source={require('../../Assets/image.png')} style={styles.user_img} />
                    <Text style={{ fontSize: scale(18), marginLeft: moderateScale(25), }}>Edin Adam</Text>
                </View>
                <Image style={{ marginRight: moderateScale(16), }} source={require('../../Assets/add.png')} />
            </View>

            <View style={{ flex: 1, }} >
                <FlatList
                    data={alpha}
                    renderItem={({ item }) => {

                        return (
                            <View>
                                <View >
                                    <Text style={{ backgroundColor: 'red', }}>{item.title}</Text>
                                    {/* <Text>{item.phoneNumbers[0].number}</Text> */}
                                </View>
                                <FlatList
                                    data={contactList.sort((a, b) => a.displayName.localeCompare(b.displayName))}
                                    renderItem={({ item }) => {
                                        var res = item.givenName?.substring(0, 1);
                                        console.log(res);
                                        return (
                                            <View >
                                                <Text>{item.displayName}</Text>
                                                <Text>{item.phoneNumbers[0].number}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        )
                    }}

                />
                {/* <ScrollView>

                    {
                        contactList
                        .sort((a,b) =>a.displayName.localeCompare(b.displayName))
                        .map(v => {
                            return (
                                <View key={v.rawContactId}>
                                    <Text>{v.displayName}</Text>
                                    <Text>{v.phoneNumbers[0].number}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView> */}

                {/* <AlphabetList
                    // style={{ flex: 1 }}
                    data={contactList}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.rawContactId}>
                                <Text>{item.displayName}</Text>
                                <Text>{item.phoneNumbers[0].number}</Text>
                            </View>
                        )
                    }}
                    // getfirstletter={getfirstletter}
                    renderSectionHeader={renderSectionHeader}
                    // getItemHeight={() => sizes.itemHeight}
                    // sectionHeaderHeight={sizes.headerHeight}
                    indexLetterSize={15}
                    letterIndexWidth={40}
                    containerStyle={{ marginRight: 10 }}
                    alphabetContainer={{
                        alignSelf: "flex-start",
                        justifyContent: "flex-start"
                    }}
                    indexLetterColor="#ff6100"
                    letterItemStyle={{ height: 25 }}
                /> */}
                {/* <AlphabetFlatList
                    data={contactList}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.rawContactId}>
                                <Text>{item.displayName}</Text>
                                <Text>{item.phoneNumbers[0].number}</Text>
                            </View>
                        )

                    }}
                    alphabetListProps={{
                        selectedAlphabetTextStyle: {
                            color: '#fff'
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff'
                        },
                        selectedAlphabetButtonStyle: {
                            backgroundColor: 'orange',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetListContainerStyle: {
                            flex: 0.2
                        },
                    }}
                    showsVerticalScrollIndicator={false}
                /> */}

                {/* <AlphabetFlatList
                    data={contactList}
                    renderItem={({ item, index, }) => {
                        console.log('item', item);
                        return (
                            item.map(v => {
                                return <Text >{v}</Text>
                            })
                        )
                    }}   // ListHeaderComponent={this.renderHeader}
                    // ListFooterComponent={this.renderFooter}
                    // getItemLayout={this.getItemLayout}
                    mainFlatListContainerStyle={{ flex: 1 }}
                    alphabetListProps={{
                        selectedAlphabetTextStyle: {
                            color: '#fff'
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff'
                        },
                        selectedAlphabetButtonStyle: {
                            backgroundColor: 'orange',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetListContainerStyle: {
                            flex: 0.2
                        },
                        showsVerticalScrollIndicator: false
                    }}
                /> */}
                {/* <SectionList
                    sections={contactList}
                    renderItem={({item, index, section}) => {
                        console.log('item',item);
                       return <Text key={index}>{item}</Text>}
                    } 
                    renderSectionHeader={({section: {title}}) => (
                      <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    
                /> */}

                {/* <FlatList
                    data={contactList}
                    renderItem={({ item, index }) => {
                        // const sorted_value = item.displayName.sort();
                        const myData = item.givenName.contacts
                            .sort((a, b) => a.name.localeCompare(b.name))

                        console.log('render item', myData);
                        return (
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: 70,
                                    alignSelf: 'center',
                                    borderWidth: 0.5,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: '#000' }}>{item.displayName}</Text>
                                        <Text style={{ color: '#000', marginTop: 4 }}>
                                            {item.phoneNumbers[0].number}
                                        </Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        );
                    }}

                    //   ListHeaderComponent={this.renderHeader}
                    //   ListFooterComponent={this.renderFooter}
                    getItemLayout={getItemLayout}
                    mainFlatListContainerStyle={{ flex: 1 }}
                    alphabetListProps={{
                        selectedAlphabetTextStyle: {
                            color: '#fff'
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff'
                        },
                        selectedAlphabetButtonStyle: {
                            backgroundColor: 'orange',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetButtonStyle: {
                            backgroundColor: '#fff',
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 4
                        },
                        alphabetListContainerStyle: {
                            flex: 0.2
                        },
                        showsVerticalScrollIndicator: false
                    }}
                /> */}
                {/* {
                    contactList.map((list) => {
                        console.log('list', list.phoneNumbers[0].number);
                        return ( */}


            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    Header_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BE9F56',
        // backgroundColor: 'blue',
    },
    Text_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        // marginLeft: moderateScale(20),
    },
    user_img: {
        width: moderateScale(60),
        height: moderateVerticalScale(60),
        borderRadius: moderateScale(30),
    },

});

//make this component available to the app
export default ContactPage;
