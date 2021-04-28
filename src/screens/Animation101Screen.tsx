import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimation();

    return (
        <View style={ styles.container }>
            <Animated.View 
                style={{ 
                    ...styles.redBox, 
                    marginBottom: 10 , 
                    opacity,  
                    transform: [{
                        translateY: position 
                    }]
                }} 
            />
            <Button title="FadeIn" onPress={ () => { fadeIn(); startMoving( -100, 1000 ) } }/>
            <Button title="FadeOut" onPress={ fadeOut }/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    redBox: {
        width: 150,
        height: 150,
        backgroundColor: 'red'
    }
});