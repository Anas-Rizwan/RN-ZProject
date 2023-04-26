import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Image, TouchableOpacity, } from 'react-native';
import Contact from 'react-native-contacts';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { AlphabetList } from "react-native-section-alphabet-list";
import styles from './styles';


const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [contactsLength, setContactsLength] = useState('');
    const [permission, setpermission] = useState(false);
    // const [focus, setfocus] = useState(false);

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
                    // console.log('forst lettter is', ContactData)
                    // console.log('Contact Length', contactsLength)
                    setContacts(ContactData)
                })
            } else {
                setpermission(true)
                console.log("contacts permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const renderCustomItem = (item) => (


        <View style={styles.listItemContainer}>
            <View style={styles.listItem_text_view}>

                <Text style={styles.listItem_text_name}>{item.value}</Text>
                <Text style={styles.listItem_text_number}>{item.num.number}</Text>

            </View>
            {item.key > 500 ? <Text style={styles.listItem_text} >INVITE</Text> : <Image style={styles.listItem_text_image} source={require('../../Assets/Con_logo.png')} />}
        </View>

    )


    return (
        <View style={styles.container}>
            <View style={styles.Header_view}>
                <Image source={require('../../Assets/arrow.png')} tintColor="black" />
                <Image source={require('../../Assets/logo_zimo.png')} tintColor="black" style={{ width: moderateScale(70), height: moderateVerticalScale(18), }} />
                <Image source={require('../../Assets/bag.png')} />
            </View>

            <View style={styles.Text_view}>
                <Text style={{ fontSize: scale(9), color: 'black', }}>{contactsLength} Contacts</Text>
                <Text style={{ fontSize: scale(17), marginRight: moderateScale(35), color: 'black', }}>CONTACT</Text>
                <Image source={require('../../Assets/contact.png')} tintColor='#BE9F56' />
            </View>

            <View style={styles.user_view}>
                <View style={styles.user_left_view}>
                    <Image source={require('../../Assets/image.png')} style={styles.user_img} />
                    <Text style={{ fontSize: scale(17), marginLeft: moderateScale(25), color: 'black', }}>Edin Adam</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                <Image source={require('../../Assets/add.png')} tintColor='#BE9F56' />
                </TouchableOpacity>
            </View>

            {
                !permission ?
                    <View style={styles.contact_view} >

                        <AlphabetList
                            data={contacts}
                            // extraData={focus}
                            indexLetterContainerStyle={{
                                marginTop: moderateVerticalScale(1.5),
                            }}
                            indexContainerStyle={{
                                marginRight: moderateScale(5),
                                width: moderateScale(23),
                            }}

                            indexLetterStyle={{
                                fontSize: scale(8),
                                color: '#BE9F56',
                            }}
                            renderCustomItem={renderCustomItem}
                            renderCustomSectionHeader={(section) => (
                                <View style={styles.sectionHeaderContainer}>
                                    <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                                </View>
                            )}
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
