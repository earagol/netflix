import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
const {width,height} = Dimensions.get('window');

export default class Menu extends Component {
    render(){
        return(
            <View style={style.menu}>
                <View style={style.avatarContainer}>
                    <View style={style.avatarImagen}>
                        <Image
                            style={style.avatar}
                            source={require('../Images/perfil.png')}    
                        />
                        <Text style={style.text}>Erisk aragol</Text>
                    </View>
                    <Icon 
                        name='exchange'
                        color='white'
                        size={25}
                    />
                </View>
                <ScrollView style={style.scrollContainer}>
                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <Icon 
                                style={style.iconWithText}
                                name='download'
                                color='white'
                                size={28}
                            />
                            <Text style={style.text}>My Donwload</Text>
                        </View>
                        <Icon 
                            style={style.rightIcon}
                            name='angle-right'
                            color='white'
                            size={25}
                        />
                    </View>

                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <Icon  
                                style={style.iconWithText}
                                name='check'
                                color='white'
                                size={28}
                            />
                            <Text style={style.text}>My List</Text>
                        </View>
                        <Icon 
                            style={style.rightIcon}
                            name='angle-right'
                            color='white'
                            size={25}
                        />
                    </View>

                    <View style={[style.items,style.itemsSelected]}>
                        <Text style={style.text}>Home</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Available foe Donwload</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Netflix Original</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>TV Shows</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Actions & Adventure</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Children & Family Movies</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Comedies</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Documentaries</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Dramas</Text>
                    </View>
                    <View style={[style.items,style.noItemsSelected]}>
                        <Text style={style.text}>Independen Movies</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }

    
}

const style = StyleSheet.create({
    menu:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#191919"
    },
    avatarContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: width/2 + 59,
        borderColor: '#000',
        borderBottomWidth:3,
        paddingHorizontal:20,
        paddingVertical: 20
    },
    avatar:{
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImagen:{
        flexDirection:'row',
        alignItems: 'center',
    },
    text:{
        color: '#b3b3b3',
        fontSize:15
    },
    textWithIcon:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth:3
    },
    withIcon:{
        flexDirection:'row',
        alignItems:'center',
    },
    scrollContainer:{
        width: width/2+59,
    },
    rightIcon:{
        paddingRight:20
    },
    iconWithText:{
        marginRight:10,
        paddingLeft:20
    },
    items:{
        paddingLeft:20,
        paddingVertical:15,
        marginTop:5
    },
    itemsSelected:{
        borderLeftWidth:5,
        borderColor: 'red'
    },
    noItemsSelected:{
        paddingVertical:15,
        paddingLeft:25,
        marginTop:5
    }
})