
import {AsyncStorage} from 'react-native';
export const FIREBASEURL=`https://nba-app-283dd.firebaseio.com`;
export const APIKEY=`AIzaSyBJf3fB6gwZg_ABHjDos1VNVc1EmTsbea8`;
export const SIGNUP=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export  const REFRESH=`https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;


export const getTokens=(cb)=>{
    AsyncStorage.multiGet([
        '@nba_app@token',
        '@nba_app@refreshToken',
        '@nba_app@expireToken',
        '@nba_app@uid',
    ]).then( value => {
        cb(value);
    });
}

export const setTokens = (values,cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);

    AsyncStorage.multiSet([
        ['@nba_app@token',values.token],
        ['@nba_app@refreshToken',values.refToken],
        ['@nba_app@expireToken',expiration.toString()],
        ['@nba_app@uid',values.uid]
    ]).then( response => {
        cb();
    });
}

export const convertFirebase=(data)=>{
    const newData = [];

    for(let key in data){
        newData.push({
            ...data[key],
            id: key
        })
    }
    return newData;
}

export const findTeamData=(itemId,teams)=>{
   return teams.find(team=>team.id===itemId);

}