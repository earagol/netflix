import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions } from 'react-native-router-flux';

const pelicula1 = [
    {
        'key':1,
        'name': 'Cenicienta',
        'url':'https://i.ytimg.com/vi/zPXqwAGmX04/maxresdefault.jpg'
    },
    {
        'key':2,
        'name': 'Sirenita',
        'url':'https://i.ytimg.com/vi/JW4RgX08xXw/maxresdefault.jpg'
    },
    {
        'key':3,
        'name': 'Dalmatas',
        'url':'https://i.ytimg.com/vi/Ap0NRJD-2ts/maxresdefault.jpg'
    },
    {
        'key':4,
        'name': 'Hombre Araña',
        'url':'https://i.ytimg.com/vi/zPXqwAGmX04/maxresdefault.jpg'
    },
    {
        'key':5,
        'name': 'Batman',
        'url':'https://i.ytimg.com/vi/b736ZM_KfEk/maxresdefault.jpg'
    },
    {
        'key':6,
        'name': 'Superman',
        'url':'https://scontent-sea1-1.cdninstagram.com/vp/39fba2d2983615966d2735f6638a82f2/5D1DF2D2/t51.2885-15/e35/64972840_146711143145212_2795913915418691723_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'
    }
];

const {width,height} = Dimensions.get('window');

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            data: ''
        }
    }

    filter(text){
        const newData = pelicula1.filter(function(item){
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            console.log(textData,itemData,itemData.indexOf(textData));
            return itemData.indexOf(textData) > -1;
        })

        console.log(newData);

        this.setState({
            text:text,
            data: newData
        })
    }

    deleteData(){
        this.setState({
            text:'',
            data:''
        })
    }

    _renderItem(item){
        return(
            <Image key={item.key} style={style.imagen} source={{uri:item.url}} />
        )
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.header}>
                    <Icon 
                        name='search'
                        color='grey'
                        size={18}
                        style={style.serachIcon}
                    />
                    <TextInput 
                        style={style.input}
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        placeholder='Search'
                        placeholderTextColor='grey'
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon 
                                name='times-circle'
                                color='grey'
                                size={18}
                                style={style.closeInputIcon}
                            />
                        </TouchableWithoutFeedback>
                    : null}
                    <TouchableWithoutFeedback style={style.cancelButton} onPress={() => Actions.pop()}>
                        <View style={style.containerButton}>
                            <Text style={style.cancelButtonText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList 
                        style={{marginHorizontal: 5}}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{marginTop:5,marginLeft:5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#181818'
    },
    header:{
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection:'row',
        alignItems: 'center',
        position:'relative'
    },
    input:{
        width: width - (width / 4),
        height:40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3
    },
    cancelButtonText:{
        color:'white'
    },
    serachIcon:{
        position:'absolute',
        top: 5,
        left: 15,
        zIndex:1,
        backgroundColor: 'transparent'
    },
    closeInputIcon:{
        position:'absolute',
        top: 5,
        right: 100,
        zIndex:1,
        backgroundColor: 'transparent'
    },
    imagen:{
        marginRight: 5,
        width: 115,
        height: 170
    }
});