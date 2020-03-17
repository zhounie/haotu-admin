import axios from 'axios'


export const POST = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            ...params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}


export const GET = (url, params) => {
    return new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                ...params
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    })
}
