import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import  Icon from 'react-native-vector-icons/FontAwesome';


type Props = {};
class Header extends Component<Props> {

    render(){
        return(
            <View style={style.container}>
                <TouchableWithoutFeedback onPress={() => this.props.toggle()}>
                    <Icon 
                        name="bars"
                        color="white"
                        size={25}
                    />
                </TouchableWithoutFeedback>
                <Image style={style.logo} source={require('../Images/logo.png')} />
                <Icon 
                    name="search"
                    color="white"
                    size={25}
                />
    
            </View>
        )
    }

}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:60,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: 'black',
        paddingHorizontal:15
    },
    logo:{
        height:40,
        width:160
    }
});

export default Header;