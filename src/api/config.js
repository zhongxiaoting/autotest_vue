export const HOST_NAME = 'http://192.168.39.35:8000'

/***
 * 用户登录、注销
 */
export const USER_LOGIN = HOST_NAME + '/api/user/login'
export const USER_LOGOUT = HOST_NAME + '/api/user/logout'

/**
 * 信息输入
 */
export const INPUTINFO = HOST_NAME + '/api/server/input'

/**
 * 上传日志文件到fdfsDFS远程存储服务器
 */
 export const LOG_UPLOAD = HOST_NAME + '/api/server/upload'

/**
 * 基本信息查询
 */
export const SYSTEM_GET =  HOST_NAME + '/api/infor/system_info'
export const CPU_GET =  HOST_NAME + '/api/infor/cpu_info'
export const MEM_GET = HOST_NAME + '/api/infor/memory_info'
export const NETWORK_GET = HOST_NAME + '/api/infor/network_info'
export const HDD_GET = HOST_NAME + '/api/infor/hdd_info'

/**
 * 信息校对
 */
export const FIREWARE = HOST_NAME + '/api/checkout/system_checkout'

export const CPU_CHECK = HOST_NAME + '/api/checkout/cpu_checkout'

/**
 * 性能测试
 */
export const CPU_MCE = HOST_NAME + '/api/infor/cpu_mce'

export const MEM_ECC = HOST_NAME + '/api/infor/mem_ecc'

export const CPU_STRESS = HOST_NAME + '/api/stress/cpu_stress'

export const MEM_STRESS = HOST_NAME + '/api/stress/mem_stress'

export const HDD_STRESS = HOST_NAME + '/api/stress/hdd_stress'

export const NET_STRESS = HOST_NAME + '/api/stress/lan_stress'

export const LAN_LOG = HOST_NAME + '/api/stress/get_lan_log'

export const RUN_BLACK = HOST_NAME + '/api/final/run_black'

export const BLACK_LOG = HOST_NAME + '/api/final/get_black_log'



// 中断压力测试
export const STOP_STRESS = HOST_NAME + '/api/stress/stop_stress'