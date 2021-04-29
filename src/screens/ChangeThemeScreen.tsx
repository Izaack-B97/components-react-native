import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme:{ colors } } = useContext( ThemeContext );

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Theme" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        setLightTheme()
                    }}
                >
                    <Text 
                        style={{ color: 'white', fontSize: 22, textAlign: 'center' }}
                    >
                        Light
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        setDarkTheme();
                    }}
                >
                    <Text 
                        style={{ color: 'white', fontSize: 22, textAlign: 'center' }}
                    >
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
