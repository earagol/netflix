import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';

const pelicula1 = [
    {
        'key':1,
        'name': 'Pelicula 1',
        'url':'https://i.ytimg.com/vi/zPXqwAGmX04/maxresdefault.jpg'
    },
    {
        'key':2,
        'name': 'Pelicula 2',
        'url':'https://i.ytimg.com/vi/JW4RgX08xXw/maxresdefault.jpg'
    },
    {
        'key':3,
        'name': 'Pelicula 3',
        'url':'https://i.ytimg.com/vi/Ap0NRJD-2ts/maxresdefault.jpg'
    },
    {
        'key':4,
        'name': 'Pelicula 4',
        'url':'https://i.ytimg.com/vi/zPXqwAGmX04/maxresdefault.jpg'
    },
    {
        'key':5,
        'name': 'Pelicula 5',
        'url':'https://i.ytimg.com/vi/b736ZM_KfEk/maxresdefault.jpg'
    },
    {
        'key':6,
        'name': 'Pelicula 6',
        'url':'https://scontent-sea1-1.cdninstagram.com/vp/39fba2d2983615966d2735f6638a82f2/5D1DF2D2/t51.2885-15/e35/64972840_146711143145212_2795913915418691723_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'
    }
];



class List extends Component<{}>{

    _renderItem(item){
        return(
            <Image 
                style={{width:120,height:180}}
                source={{uri:item.url}}
            />

        );
    }

    render() {
        return (
            <View style={{flex:1}}> 
                <View>
                    <Text style={style.text}>My List</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width:5}} />}
                        data={pelicula1}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
                <View>
                    <Text style={style.text}>Top pick for you</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width:5}} />}
                        data={pelicula1}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    text: {
        color: 'white'
    }
});

export default List;
