import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import {connect} from 'react-redux';
import * as Font from 'expo-font';
import {getNews} from '../../store/actions/news_action';
import Moment from 'moment';
 class NewsScreen extends Component{

    componentDidMount(){
        Font.loadAsync({
            RobotoBold: require('../../../assets/fonts/Roboto-Bold.ttf'),
            RobotoLight: require('../../../assets/fonts/Roboto-Light.ttf'),

        })
        this.props.dispatch(getNews());

    }



    renderArticle = (news) => (
        news.articles ?
            news.articles.map((article,i)=>(
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Article',{
                   article
                })}
                    key={i}
                >
                  <View style={styles.cardContainer}>
                    <View>
                        <Image
                        style={{height:150, justifyContent:'space-around'}}
                        source={{uri:`${article.image}`}}
                        resizeMode='cover'
                        />
                    </View>
                      <View style={styles.contentCard}>
                            <Text style={styles.titleCard}>{article.title}</Text>
                          <View style={styles.bottomCard}>
                                <Text style={styles.bottomCardTeam}>{article.team}&nbsp;- &nbsp;</Text>

                              <Text style={styles.bottomCardText}>Posted at {Moment(article.date).format('d MMMM')}</Text>
                          </View>
                      </View>
                  </View>
                </TouchableOpacity>
            ))
            :null
    )
    render() {
        return (
           <ScrollView style={{backgroundColor:'#F0F0F0'}}>

               {this.renderArticle(this.props.News)}
           </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'#fff',
        margin:10,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2,

    },
    contentCard:{
            borderWidth:1,
        borderColor:'#dddddd',
    },
    titleCard:{
        color:'#232323',
        fontSize:16,
        padding:10,
        fontFamily:'RobotoBold'
    },
    bottomCard:{
        flex:1,
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#e6e6e6',
        padding:10
    },
    bottomCardTeam:{
         color:'#828282',
        fontSize:12
    },
    bottomCardText:{
 color:'#828282',
        fontSize:12,
        marginRight:15

    }
});

function mapStateToProps(state){

    return {
        News:state.News
    }
}


export default connect(mapStateToProps)(NewsScreen);