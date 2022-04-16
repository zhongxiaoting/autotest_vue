// import axiosInstance from './index'
import axios from "axios"
import {HOST_NAME, CPU_GET, MEM_GET, NETWORK_GET, HDD_GET, SYSTEM_GET} from './config'
// const axios = axiosInstance

// export const  getBooks =() => {return axios.get(`http://127.0.0.1:8000/api/books/`)}
// export const postBook = (SN, IDname, whereis, gongdanhao, IP) => {return axios.post(`http://127.0.0.1:8000/api/books/`,{'SN': SN, 'IDname':IDname,'whereis':whereis, 'gongdanhao':gongdanhao,'IP':IP})}
export const getsystem =() => {
    return axios.get(SYSTEM_GET)
}
export const  getcpu =() => {
    return axios.get(CPU_GET)
}
export const getmem =() => {
    return axios.get(MEM_GET)
}

export const getnetwork =() => {
    return axios.get(NETWORK_GET)
}
export const gethdd =() => {
    return axios.get(HDD_GET)
}


export const  postBooks =(sn, worker, ip) => {
    return axios.post(HOST_NAME ,{'sn': sn,  'worker':worker, 'ip':ip})}


