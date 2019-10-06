import {GET_NEWS} from '../actions/types';
import axios from 'axios';

import {FIREBASEURL,convertFirebase} from '../../utils/misc';
export function getNews(){

    const request = axios({
        method:'GET',
        url: `${FIREBASEURL}/news.json`
    }).then( response => {


        return convertFirebase(response.data);
    }).catch(e=>{
        return false
    })

    return {
        type:GET_NEWS,
        payload:request
    }

}