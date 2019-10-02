 import axios from 'axios';
import {SIGN_IN, SIGN_UP,AUTO_SIGN_IN} from './types';
import {FIREBASEURL,SIGNUP,SIGNIN,REFRESH} from '../../utils/misc';
export  function  signUp(formData){

        const request =  axios({
            method: 'POST',
            url: SIGNUP,
            data: {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            },
            header: {
                'Content-type': 'application/json'
            }
        }).then(respone=>{

            return respone.data
        }).catch(err=>{
            console.log(err);
        });

        return {
            type:SIGN_UP,
            payload:request
        }



};


export function  signIn(formData){

    const request =  axios({
        method: 'POST',
        url: SIGNIN,
        data: {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
        },
        header: {
            'Content-type': 'application/json'
        }
    }).then(respone=>{

        return respone.data
    }).catch(err=>{
        console.log(err);
    });

    return {
        type:SIGN_IN,
        payload:request
    }
}

export const autoSignIn=(refToken)=>{
    const request=axios({
        method:'POST',
        url:REFRESH,
       data:'grant_type=refresh_token&refresh_token='+refToken,
        header:{
            'Content-type':'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        return res.data;
    }).catch(err=>{
        console.log(err)
    })
    return {
        type:AUTO_SIGN_IN,
        payload:request
    }
}