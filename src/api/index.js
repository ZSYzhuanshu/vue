import api from '../http'

const fetch = api.http

export function getUserInfo (params) {
    return fetch({
        url: 'vue-study/user',
        method: get,
        params,
    })
}