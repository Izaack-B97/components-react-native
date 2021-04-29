import React, { useContext, useState } from 'react'
import { View, Text, Modal, Button } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    
    const [isVisible, setIsVisible] = useState( false );

    const { theme:{ colors } } = useContext( ThemeContext )

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal'/>
            <Button title="Show modal" onPress={() => setIsVisible( !isVisible )}/>
            <Modal
                animationType='fade'
                visible={ isVisible }
                transparent={ true }
                
            >
                {/* Background negro */}
                <View 
                    style={{ 
                        flex: 1, 
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        alignItems: 'center', 
                        justifyContent:'center',
                    }}
                >
                    {/* Contenido del modal */}
                    <View 
                        style={{ 
                            backgroundColor: colors.notification, 
                            padding: 20,
                            borderRadius: 10, 
                            shadowOffset: {
                                width: 0,
                                height: 20,
                            },
                            shadowOpacity: 0.25,
                            elevation: 20,
                        }}
                    >
                        <HeaderTitle title="Cuerpo del modal"/>
                        <Button title="Close modal" onPress={() => setIsVisible( false )}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
