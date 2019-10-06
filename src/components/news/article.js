import React,{Component} from 'react';
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';
import Moment from 'moment';
import * as Font from 'expo-font';

class ArticleScreen extends Component {

    componentDidMount(){
        Font.loadAsync({
            RobotoBold: require('../../../assets/fonts/Roboto-Bold.ttf'),
            RobotoLight: require('../../../assets/fonts/Roboto-Light.ttf'),
        })
    }

    parseContent=(content)=>{

        return content.replace(/<p>/g,"").replace(/<\/p>/g,"");
    }
    render(){
        const  params=this.props.navigation.getParam('article');
        return (
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                <Image
                style={{height:250}}
                source={{uri:params.image}}
                resizeMode='cover'
                />
                <View style={styles.articleContainer}>
                    <View >
                        <Text style={styles.articleTitle}>{params.title}</Text>
                    </View>
                    <View >
                        <Text style={styles.articleData}>{params.team} - Posted at {Moment(params.date).format('d MMMM')}</Text>
                    </View>
                    <View style={styles.articleContent}>
                    <Text style={styles.articleText}>{this.parseContent(params.content)}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    articleContainer:{
        padding:10
    },
    articleTitle:{
        fontSize:23,
        color:'#323232',
        fontFamily:'RobotoBold'
    },
    articleData:{
        fontSize:12,
        color:'#828282',
        fontFamily:'RobotoLight'
    },
    articleContent:{
        marginTop:30
    },
    articleText:{
        fontSize:14,
        color:'#828282',
        lineHeight:20,
        fontFamily:'RobotoLight'
    }

})

export default  ArticleScreen;