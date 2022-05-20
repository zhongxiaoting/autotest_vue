// import axiosInstance from './index'
import axios from "axios"
import {USER_LOGIN, INPUTINFO, LOG_UPLOAD } from './config'
import {CPU_GET, MEM_GET, NETWORK_GET, HDD_GET, SYSTEM_GET } from './config'
import {CPU_MCE, MEM_ECC, CPU_STRESS, MEM_STRESS, HDD_STRESS, NET_STRESS, LAN_LOG, RUN_BLACK, BLACK_LOG, STOP_STRESS } from './config'
import {FIREWARE, CPU_CHECK } from './config'
/**
 * 用户登录信息
 * @param {用户名} username 
 * @param {密码} password 
 * @returns 
 */
export const getlogin =(username, password) => {
    return axios.post(USER_LOGIN, {"username": username, "password": password})
}

/**
 * 输入服务器信息
 * @param {*} sn 
 * @param {*} worker 
 * @param {*} ip 
 * @returns 
 */
export const postInput =(sn, worker, ip) => {
    return axios.post(INPUTINFO ,{'sn': sn,  'worker':worker, 'ip':ip})}

/**
 * 提交日志文件
 * @returns 
 */
export const postUpload =() => {
    return axios.post(LOG_UPLOAD)
}

/**
 * 系统信息
 */
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
 * 信息校对
 * @returns 
 */
export const getfireware =() => {
    return axios.get(FIREWARE)
}

export const getcpucheck =() => {
    return axios.get(CPU_CHECK)
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

export const getNetworkStress =(time) => {
    return axios.post(NET_STRESS,{'time': time})
}

export const getLanLog =() => {
    return axios.get(LAN_LOG)
}

export const getBlackCheck = () => {
    return axios.get(RUN_BLACK)
}

export const getBlackLog =() => {
    return axios.get(BLACK_LOG)
}

export const getStopStress =() => {
    return axios.get(STOP_STRESS)
}




