export const HOST_NAME = 'http://192.168.39.30:8000'

/**
 * 基本信息查询
 */
export const SYSTEM_GET =  'http://192.168.39.30:8000/api/infor/system_info'
export const CPU_GET =  'http://192.168.39.30:8000/api/infor/cpu_info'
export const MEM_GET = 'http://192.168.39.30:8000/api/infor/memory_info'
export const NETWORK_GET = 'http://192.168.39.30:8000/api/infor/network_info'
export const HDD_GET = 'http://192.168.39.30:8000/api/infor/hdd_info'

/**
 * 性能测试
 */
export const CPU_MCE = 'http://192.168.39.30:8000/api/infor/cpu_mce'

export const MEM_ECC = 'http://192.168.39.30:8000/api/infor/mem_ecc'

export const CPU_STRESS = 'http://192.168.39.30:8000/api/stress/cpu_stress'

export const MEM_STRESS = 'http://192.168.39.30:8000/api/stress/mem_stress'

export const HDD_STRESS = 'http://192.168.39.30:8000/api/stress/hdd_stress'

// 中断压力测试
export const STOP_STRESS = 'http://192.168.39.30:8000/api/stress/stop_stress'