import { GET_USERINFO, SAVE_ADDRESS, RECORD_USERINFO } from './mutation-types'
import {setStore, getStore} from '../config/mUtils'

export default {
    //获取用户信息存入vuex
    [GET_USERINFO](state, info){
        console.log('info:', info);
        if(state.userInfo && (state.userInfo.username !== info.username)){
            return;
        }
        if(!state.login){
            return;
        }
        if(!info.message){
            state.userInfo = {...info};
        }else{
            state.userInfo = null;
        }
    },
    //记录用户信息
    [RECORD_USERINFO](state, info){
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id);
    }
}

























