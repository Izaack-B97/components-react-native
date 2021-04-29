import { useNavigation } from '@react-navigation/core';
// import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';
import { Spacer } from './Spacer';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

export const FlastListMenuItem = ( { menuItem } : Props ) => {
    
    // console.log( menuItem );  
    // const { colors } = useTheme();
    const navigation = useNavigation();
    const { theme:{ colors } } = useContext( ThemeContext )


    return (
        <TouchableOpacity 
            activeOpacity={ 0.8 } 
            style={ styles.container }
            onPress={ () => navigation.navigate( menuItem.component ) }
        >
            <Icon name={ menuItem.icon } color={ colors.primary } size={ 30 }/>
            <Text style={{ ...styles.itemText, color: colors.text }}>{ menuItem.name }</Text>
            <Spacer /> 
            <Icon name="chevron-forward-outline" color={ colors.primary } size={ 30 }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});