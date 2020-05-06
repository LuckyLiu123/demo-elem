import {getUser} from '../service/getData'
import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types'

export default {
    async getUserInfo({commit, state}){
        let res = await getUser();
        console.log('获取用户信息:', res);
        commit(GET_USERINFO, res);
    }
}