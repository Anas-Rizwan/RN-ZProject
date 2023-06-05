import React, { useEffect, useState, useRef } from 'react';
import { View, Text, PermissionsAndroid, Image, TouchableOpacity, ScrollView } from 'react-native';
import Contact from 'react-native-contacts';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { AlphabetList } from "react-native-section-alphabet-list";
import styles from './styles';


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ContactPage = () => {

    const [contacts, setContacts] = useState([]);
    const [contactsLength, setContactsLength] = useState('');
    const [permission, setpermission] = useState(false);
    const [selectedChar, setSelectedChar] = useState();
    const [listref, setlistref] = useState(null);
    const [dataSource, setdataSource] = useState([]);

    useEffect(() => {
        getPermissions()
    }, [])


    const getPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Contact.getCount().then(contacts => {
                    setContactsLength(contacts)
                })
                Contact.getAll().then(contacts => {
                    const strAscending = contacts.sort((a, b) =>
                        a.displayName > b.displayName ? 1 : -1,
                    );
                    const ContactData = strAscending.reduce((r, s) => {
                        r.push({
                            value: s.displayName, key: s.recordID, num: s.phoneNumbers[0]
                        });
                        return r;
                    }, []);

                    setContacts(ContactData)

                })
            } else {
                setpermission(true)
                console.log("contacts permission denied");
            }
        } catch (err) {
            console.log(err);
        }
    }



    const handleScroll = (item) => {
        if (dataSource.length > item.item.index) {
            ref.scrollTo({
                x: 0,
                y: dataSource[item.item.index - 1],
                animated: true
            })
        }
        else {
            alert("Out of Max Range")
        }
        setSelectedChar(item.item.title)
    }


    const renderCustomItem = (item) => {
        return (

            <View style={styles.listItemContainer}>
                <View style={styles.listItem_text_view}>

                    <Text style={styles.listItem_text_name}>{item.value}</Text>
                    <Text style={styles.listItem_text_number}>{item.num.number}</Text>

                </View>
                {item.key > 500 ? <Text style={styles.listItem_text} >INVITE</Text> : <Image style={styles.listItem_text_image} source={require('../../Assets/Con_logo.png')} />}
            </View>

        )
    }




    return (

        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" style={{ width: moderateScale(70), height: moderateVerticalScale(18), }} />
                <Image source={require('../../Assets/bag.png')} />
            </View>

            <View style={styles.Text_view}>
                <Text style={{ fontSize: scale(9), color: 'black', fontFamily: 'Lato-Regular', }}>{contactsLength} Contacts</Text>
                <Text style={{ fontSize: scale(17), marginRight: moderateScale(35), color: 'black', fontFamily: 'Lato-Regular', }}>CONTACT</Text>
                <Image source={require('../../Assets/contact.png')} tintColor='#BE9F56' />
            </View>

            <View style={styles.user_view}>
                <View style={styles.user_left_view}>
                    <Image source={require('../../Assets/image4.jpeg')} style={styles.user_img} />
                    <Text style={{ fontSize: scale(17), marginLeft: moderateScale(25), color: 'black', fontFamily: 'Lato-Regular', }}>Edin Adam</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image source={require('../../Assets/add.png')} tintColor='#BE9F56' />
                </TouchableOpacity>
            </View>

            {
                !permission ?
                    <View style={styles.contact_view} >

                        <AlphabetList
                            ref={(ref) => setlistref(ref)}
                            data={contacts}
                            indexLetterContainerStyle={{
                                marginRight: 15,
                                marginTop: moderateVerticalScale(1.5),
                            }}
                            indexContainerStyle={{
                                marginRight: moderateScale(5),
                                width: moderateScale(23),
                            }}

                            // indexLetterStyle={{

                            //     fontSize: scale(11),
                            //     color: focus ? '#BE9F56' : 'rgba(0,0,0,0.4)'
                            // }}
                            renderCustomItem={renderCustomItem}
                            renderCustomSectionHeader={(section) => {
                                return (
                                    <View
                                        style={styles.sectionHeaderContainer}
                                        onLayout={(event) => {
                                            const layout = event.nativeEvent.layout
                                            dataSource[section.index] = layout.y
                                            setdataSource(dataSource)
                                            console.log('height', layout.height);
                                            console.log('width', layout.width);
                                            console.log('x', layout.x);
                                            console.log('y', layout.y);
                                        }}
                                    >
                                        <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                                    </View>
                                )
                            }}
                            renderCustomIndexLetter={(item) => {
                                // console.log('renderCustomIndexLetter', selectedChar)
                                return (
                                    <TouchableOpacity onPress={() => handleScroll(item)}>
                                        <View >
                                            <Text style={{
                                                ...styles.alphabetText,
                                                color: selectedChar === item.item.title ? '#BE9F56' : 'rgba(0,0,0,0.4)'
                                            }} >{item.item.title}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }}
                          
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{
                            fontSize: scale(15),
                            color: '#BE9F56',
                        }}>Permission is not Granted</Text>
                    </View>
            }
        </View>
    );
};

export default ContactPage;
