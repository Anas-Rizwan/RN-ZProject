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
    const [focus, setfocus] = useState(false);
    const [selectedChar, setSelectedChar] = useState();
    const [flatListRef, setflatListRef] = useState();
    const ref = useRef(null);
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
                    // const val = alphabet.split('').map((char, index) => {
                    //     setSelectedChar(char)
                    //     // console.log('char',index);
                    //     // return char
                    // })
                    // console.log('renderCustomItem',Char);
                })
            } else {
                setpermission(true)
                console.log("contacts permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

   

    const handleScroll = (item) =>
    (

        // console.log('index', item.item.index),
        setSelectedChar(item.item.title)
        // randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length),
        // flatListRef?.scrollToIndex({ animated: true, index: selectedChar })
        // ref.current?.scrollIntoView({behavior: 'smooth'})
        // setlistref(item.item.index)
        // listref?.ScrollToIndex({ animated: true, index: 1 })
        // const { contentOffset } = event.nativeEvent;
        // const index = Math.floor(contentOffset.y / 30);
    )

    
    // const getItemLayout = (data, index) => {
    //     return { length: 38, offset: 38 * index, index }
    // }
    const renderCustomItem = (item) => {

        // console.log('renderCustomItem',item);
        // setChar(item.key)
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
                    <Image source={require('../../Assets/image.png')} style={styles.user_img} />
                    <Text style={{ fontSize: scale(17), marginLeft: moderateScale(25), color: 'black', fontFamily: 'Lato-Regular', }}>Edin Adam</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image source={require('../../Assets/add.png')} tintColor='#BE9F56' />
                </TouchableOpacity>
            </View>


            {/* <View style={styles.new_container}>
                <View style={styles.leftContainer}>
                    <ScrollView onScroll={handleScroll}>
                        {alphabet.split('').map((char, index) => (
                            <Text key={index} style={[styles.alphabetText, {backgroundColor: 'red',}]}>{char}</Text>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.rightContainer}>
                    {alphabet.split('').map((char, index) => (
                        <TouchableOpacity >

                            <Text
                                key={index}
                                style={[
                                    { backgroundColor: 'red', },
                                    styles.alphabetText,
                                    selectedChar === char && styles.selectedText
                                ]}
                            >
                                {char}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View> */}
            {
                !permission ?
                    <View style={styles.contact_view} >

                        <AlphabetList
                            // ref={ref}
                            // getItemLayout={getItemLayout}
                            // ref={(ref) => setlistref(ref)}
                            data={contacts}
                            extraData={focus}
                            indexLetterContainerStyle={{
                                marginRight: 15,
                                marginTop: moderateVerticalScale(1.5),
                            }}
                            indexContainerStyle={{
                                marginRight: moderateScale(5),
                                width: moderateScale(23),
                            }}

                            indexLetterStyle={{

                                fontSize: scale(11),
                                color: focus ? '#BE9F56' : 'rgba(0,0,0,0.4)'
                            }}
                            renderCustomItem={renderCustomItem}
                            renderCustomSectionHeader={(section) => {
                                return(
                                <View style={styles.sectionHeaderContainer}>
                                    <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                                </View>
                            )}}
                            // renderCustomIndexLetter={(item) => {
                            //     // console.log('item',item.item)
                            //     console.log('renderCustomIndexLetter', selectedChar)
                            //     return (
                            //         <TouchableOpacity onPress={() => handleScroll(item)}>
                            //             <View >
                            //                 <Text style={{...styles.alphabetText,
                            //                     color: selectedChar === item.item.title ? '#BE9F56' : 'rgba(0,0,0,0.4)'
                            //                 }} >{item.item.title}</Text>
                            //             </View>
                            //         </TouchableOpacity>

                            //     )
                            // }}
                            // onScroll={ScrollToIndex({ animated: true, index: listref })}
                            // index={alphabet.split('').map((char, index) => (
                            //     char === customIndex ? setfocus(false) : setfocus(true)
                            // ))}
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
