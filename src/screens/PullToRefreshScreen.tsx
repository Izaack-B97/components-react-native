import React, { useContext, useState } from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState( false )
    const [data, setData] = useState<string>('');

    const { top } = useSafeAreaInsets();

    const { theme:{ colors } } = useContext( ThemeContext )

    const onRefresh = () => {
        setRefreshing( true );
        setTimeout(() => {
            console.log( 'Terminando . . .' );
            setRefreshing( false );
            setData('Hola mundo')
        }, 3500);
    }

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    colors={[ 'gray', 'red', 'green' ]}
                    // progressViewOffset={ 150 } // Only android
                    progressBackgroundColor={ colors.primary } // only android
                    style={{ backgroundColor: colors.primary }} // Only iphone 
                    tintColor='white'
                    title="Refreshing" // Only iphone
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull to refresh' />
                <HeaderTitle title={ data } />
            </View>
        </ScrollView>
    )
}
