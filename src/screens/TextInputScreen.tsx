import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    
    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false
    });

    const { name, email, phone, isSubscribe } = form;

    const { theme: { colors, dark } } = useContext( ThemeContext )
    
    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === "ios" ? "padding" : "height" }
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title="TextInputs" />
                    <TextInput 
                        style={{ ...myStyles.textInput, backgroundColor: dark ? 'white' : '' }}
                        placeholder='Escriba su nombre'
                        autoCorrect={ false }
                        autoCapitalize='words'
                        onChangeText={ ( value ) => onChange( 'name',  value ) }
                        value={ name }
                    />
                    <TextInput 
                        style={{ ...myStyles.textInput, backgroundColor: dark ? 'white' : '' }}
                        placeholder='Escriba email'
                        onChangeText={ ( value ) => onChange( 'email', value ) }
                        value={ email }
                        keyboardType='email-address'
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.text }}>Subscribirme</Text>

                        <CustomSwitch isOn={ isSubscribe } onChange={ ( value ) => onChange( 'isSubscribe', value ) }/>
                    </View>

                    <HeaderTitle title={ JSON.stringify( form, null, 5 ) } />
                    <HeaderTitle title={ JSON.stringify( form, null, 5 ) } />

                    <TextInput 
                        style={{ ...myStyles.textInput, backgroundColor: dark ? 'white' : '' }}
                        placeholder='Escriba su telefono'
                        onChangeText={ ( value ) => onChange( 'phone', value ) }
                        value={ phone }
                        keyboardType='phone-pad'
                        keyboardAppearance='dark'
                    />
                </View>
                <View  style={{ marginVertical: 50 }}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const myStyles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10,
    }
});