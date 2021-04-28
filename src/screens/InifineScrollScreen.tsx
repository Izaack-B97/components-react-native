import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const InifineScrollScreen = () => {

    const [ numbers, setNumbers ] = useState([ 0, 1, 2, 3, 4, 5 ])

    const renderItem = ( item : number ) => {
        return (
            <Image 
                source={{ uri: `https://picsum.photos/id/${ item }/200/300` }} 
                style={{ width: '100%', height: 400 }}
            />
        )
    }

    const loadMore = () => {
        const newArray : number[] = [];
        for (let i = 0; i < 10; i++) {
            newArray[ i ] = numbers.length + 1 ;
        }

        setNumbers([ ...numbers, ...newArray ]);
    }

    return (
        <View style={{ flex: 1,/*  backgroundColor: 'red' */ }}>
            <FlatList 
                data={ numbers }
                keyExtractor={ ( item, index ) => item.toString() + index }
                renderItem={({ item }) => renderItem( item )}
                ListHeaderComponent={() => <HeaderTitle title='Infinite Scroll'/> }
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }
                ListFooterComponent={() => (
                    <View style={{
                        width: '100%',
                        height: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ActivityIndicator size={ 50 } color='blue' />
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});