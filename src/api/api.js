// import axiosInstance from './index'
import axios from "axios"
import {HOST_NAME, CPU_GET, MEM_GET, NETWORK_GET, HDD_GET, SYSTEM_GET } from './config'
import {CPU_MCE, MEM_ECC, CPU_STRESS, MEM_STRESS, HDD_STRESS, STOP_STRESS} from './config'


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


/**
 * 性能测试
 */
 export const getCpuMce =() => {
    return axios.get(CPU_MCE)
}

export const getMemEcc =() => {
    return axios.get(MEM_ECC)
}

export const getCpuStress =(time) => {
    return axios.post(CPU_STRESS,{'time': time})
}

export const getMemStress =(time) => {
    return axios.post(MEM_STRESS,{'time': time})
}

export const getHddStress =(time) => {
    return axios.post(HDD_STRESS,{'time': time})
}


export const getStopStress =() => {
    return axios.get(STOP_STRESS)
}

export const  postBooks =(sn, worker, ip) => {
    return axios.post(HOST_NAME ,{'sn': sn,  'worker':worker, 'ip':ip})}


