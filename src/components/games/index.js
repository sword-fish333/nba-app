import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import {connect} from  'react-redux';
import * as Font from 'expo-font';
import {getGames} from  '../../store/actions/games_actions';
import Moment from 'moment';
class GamesScreen extends Component{


    componentDidMount(){
        Font.loadAsync({
            RobotoBold: require('../../../assets/fonts/Roboto-Bold.ttf'),
            RobotoLight: require('../../../assets/fonts/Roboto-Light.ttf'),

        })
        this.props.dispatch(getGames())
    }

    showGames=list=>(
        list.games ?
            list.games.map((game,i)=>(
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('GameArticle',{
                    game
                })}
                key={i}
                >
                <View style={styles.gameContainer}>
                    <View style={styles.gamebox}>
                        <Image
                        source={{uri:`${game.awayData.logo}`}}
                        style={{height:80, width:80}}
                        resizeMode="contain"
                        />
                        <Text style={styles.teamRecord}>{game.awayData.wins} - {game.awayData.loss}</Text>
                    </View>
                    <View style={styles.gamebox}>
                        <Text style={styles.gameTime}>{game.time}</Text>
                        <Text >{Moment(game.date).format('d MMMM')}</Text>

                    </View>
                    <View style={styles.gamebox}>
                        <Image
                            source={{uri:`${game.localData.logo}`}}
                            style={{height:80, width:80}}
                            resizeMode="contain"
                        />
                        <Text style={styles.teamRecord}>{game.localData.wins} - {game.localData.loss}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            ))
            :null
    )

    render() {
        return (
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                <View style={styles.mainContainer}>
                    {this.showGames(this.props.Games)}
                </View>
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer:{
        flex:1,
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    gameContainer:{
        flexDirection:'row',
        marginBottom:10,
        backgroundColor:'#fff',
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2,
    },
        gamebox:{
        width:'33.3%',
            height:100,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center'
        },
    teamRecord:{
        fontFamily:'RobotoLight',
        fontSize:12
    },
    gameTime:{
        fontFamily:'RobotoBold',
        fontSize:15
    }
});


function mapStateToProps(state) {

    return {
        Games:state.Games
    }
}

export default connect(mapStateToProps)(GamesScreen);