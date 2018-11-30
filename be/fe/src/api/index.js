import axios from 'axios'
import router from '../router' // 상대경로로 라우터 가져오기

const DOMAIN = 'http://localhost:3000'

const UNAUTHORIZED = 401

// 401코드가 오면 처리해주는 함수
const onUnauthrorized = () => {
    router.push('/login')
}

// { get,post - 여부 변수로 받기 } , { url - 경로}, { data -  페이로드에 해당하는 데이터 변수 받기 }
const request = (method, url, data) =>{
    // 자체적으로 axios 를 반환
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    .then(result => result.data ) //result.data  는 바디 data
    .catch(result => {
        const { status } = result.reponse
        if( status === UNAUTHORIZED ) return onUnauthrorized()
        throw Error(result)
    })
}

export const board = {
    // board 조회 fetch
    fetch(){
        return request('get', '/boards')
    }
}