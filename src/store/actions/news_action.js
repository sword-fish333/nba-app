import {GET_NEWS} from '../actions/types';
import axios from 'axios';

import {FIREBASEURL} from '../../utils/misc';
export function getNews(){


    return {
        type:GET_NEWS,
        payload :{
            news:'something'
        }
    }

}