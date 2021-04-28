import React from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlastListMenuItem } from '../components/FlastListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}> 
            <FlatList 
                data={ menuItems }
                renderItem={ ( { item : menuItem } ) => <FlastListMenuItem menuItem={ menuItem }/> }
                keyExtractor={ ( item ) =>  item.name }
                ListHeaderComponent={ () => <HeaderTitle title='Lista de opciones'/> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />
        </View>
    )
}
