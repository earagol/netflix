import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const Slider = props => (
    <View style={StyleSheet.container}>
        <Image style={StyleSheet.image} source={props.uri} />
    </View>
)

const style = {
    container: {
        flex:1,
        justifyContent: 'center'
    },
    image: {
        flex:1,
        width
    }
}

export default class Slide extends  Component{
    constructor(props){
        super(props);
        this.state = {
            imagesSlider:[
                require('../Images/1.jpg'),
                require('../Images/2.jpg'),
                require('../Images/3.jpg')
            ]
        }
    }

    render(){
        return(
            <View>
                <Swiper
                    autoplay
                    height={240}
                >
                {
                    this.state.imagesSlider.map((item,i) => <Slider uri={item} key={i} />)
                }
                </Swiper>
            </View>
        );
    }
}