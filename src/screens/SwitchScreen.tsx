import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { Spacer } from '../components/Spacer';

export const SwitchScreen = () => {
    
    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = ( value : boolean, field : string ) => {
        setstate({
            ...state,
            [ field ] : value
        });
    }

    return (
        <View style={ styles.container }>
            <HeaderTitle title='Switches'/>
            
            <View style={ styles.containerOption } >
                <Text style={ styles.textOption }>Active</Text>
                <Spacer />
                <CustomSwitch isOn={ isActive } onChange={ ( value ) => onChange( value, 'isActive' ) }/>
            </View>
            <View style={ styles.containerOption } >
                <Text style={ styles.textOption }>Hungry</Text>
                <Spacer />
                <CustomSwitch isOn={ isHungry } onChange={ ( value ) => onChange( value, 'isHungry' ) }/>
            </View>
            <View style={ styles.containerOption } >
                <Text style={ styles.textOption }>Happy</Text>
                <Spacer />
                <CustomSwitch isOn={ isHappy } onChange={ ( value ) => onChange( value, 'isHappy' ) }/>
            </View>

            <Text style={ styles.switchText }>
                { JSON.stringify( state, null, 5 ) }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    containerOption: {
        flexDirection: 'row',
        marginVertical: 10
    },
    textOption: {
        fontSize: 20
    },
    switchText: {
        fontSize: 25
    }
});
