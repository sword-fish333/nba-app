import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {getNews} from '../../store/actions/news_action';
class NewsScreen extends Component{

    componentDidMount(){
        this.props.dispatch(getNews());
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Forta Power! News</Text>
            </View>
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
});

function mapStateToProps(state) {
console.log(state);
return {
    News:state.News
}
}
export default connect(mapStateToProps)(NewsScreen);