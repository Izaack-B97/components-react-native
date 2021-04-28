import React from 'react'
import { Dimensions, Image, ImageSourcePropType, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Spacer } from '../components/Spacer';
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/core';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');

export const SlidesScreen = () => {
    
    const [activeIndex, setActiveIndex] = useState( 0 );
    const { fadeIn, opacity } = useAnimation();
    const [ enabledButton, setEnabledButton] = useState( false );

    const navigation = useNavigation();

    const renderItem = ( item : Slide ) => {
        return(
            <View 
                style={{ 
                    backgroundColor: 'white', 
                    flex: 1, 
                    justifyContent: 'center',
                    borderRadius: 5,
                    padding: 10,
                }}
                >
                <Image 
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />

                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.subtitle }>{ item.desc }</Text>
            </View>
        )
    };
    
    const handleItem = ( index : number ) => {
        setActiveIndex( index );
        if ( index === items.length - 1 ) {
            fadeIn();
            setEnabledButton( true );
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                // backgroundColor: 'red'
                marginHorizontal: 10
            }}
        >
            <Carousel
                //   ref={(c) => { this._carousel = c; }}
                data={ items }
                renderItem={ ( { item } : any ) => renderItem( item )}
                sliderWidth={ widthScreen }
                itemWidth={ widthScreen }
                layout='default'
                onSnapToItem={ ( index ) =>  handleItem( index )}
            />
            <View
                style={{ /* backgroundColor: 'red' ,*/ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
                <Pagination 
                    dotsLength={ items.length }
                    activeDotIndex={ activeIndex }
                    // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 20
                    }}
                />
                <Spacer />
                { 
                    enabledButton && (
                        <TouchableOpacity 
                            activeOpacity={ 0.9 } 
                            onPress={ () => navigation.navigate('HomeScreen') } 
                        >
                            <Animated.View
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#5856D6',
                                    height: 50,
                                    width: 130,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,
                                    opacity
                                }}
                            >
                                <Text style={{ fontSize: 20, color: 'white'}}>
                                    Entrar
                                </Text>
                                <Icon name='chevron-forward-outline' size={ 30 } color='white'/>
                            </Animated.View>
                        </TouchableOpacity> 
                    )
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subtitle: {
        fontSize: 16
    }
});