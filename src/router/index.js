import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    }, 

    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    },

    {
        path: "",
        name: "Home",
        component: Home,
        children: [
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            },
            {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            }, 

            {
                path: '/InputInfo',
                name: 'InputInfo',
                meta: {
                    title: '输入信息'
                },
                component: () => import (/* webpackChunkName: "InputInfo" */ '../views/InputInfo.vue')
            }, 

            {
                path: "/AllHardwareInfo",
                name: "AllHardwareInfo",
                meta: {
                    title: '硬件信息'
                },
                component: () => import ( /* webpackChunkName: "AllHardwareInfo" */ "../views/AllHardwareInfo.vue")
            },


            {
                path: "/stresses/MemEccCheck",
                name: "MemEccCheck",
                meta: {
                    title: 'CPU MCE检查'
                },
                component: () => import ( /* webpackChunkName: "AllHardwareInfo" */ '../views/stresses/MemEccCheck.vue')
            },
            {
                path: "/stresses/CpuMceCheck",
                name: "CpuMceCheck",
                meta: {
                    title: 'CPU MCE检查'
                },
                component: () => import ( /* webpackChunkName: "AllHardwareInfo" */ '../views/stresses/CpuMceCheck.vue')
            },
            {
                path: "/stresses/CpuStress",
                name: "CpuStress",
                meta: {
                    title: 'CPU压力测试'
                },
                component: () => import ( /* webpackChunkName: "AllHardwareInfo" */ '../views/stresses/CpuStress.vue')
            },
            {
                path: '/stresses/MemoryStress',
                name: 'MemoryStress',
                meta: {
                    title: '内存压力测试'
                },
                component: () => import (/* webpackChunkName: "MemoryTest" */ '../views/stresses/MemoryStress.vue')

            },
            {
                path: '/stresses/HddStress',
                name: 'HddStress',
                meta: {
                    title: '硬盘压力测试'
                },
                component: () => import (/* webpackChunkName: "HddTest" */ '../views/stresses/HddStress.vue')

            },
            {
                path: '/stresses/NetworkStress',
                name: 'NetworkStress',
                meta: {
                    title: '网卡压力测试'
                },
                component: () => import (/* webpackChunkName: "NetworkTest" */ '../views/stresses/NetworkStress.vue')

            },
            {
                path: "/stresses/BlackCheck",
                name: "BlackCheck",
                meta: {
                    title: '黑名单检查'
                },
                component: () => import ( /* webpackChunkName: "StressTest" */ "../views/stresses/BlackCheck.vue")
            },


            {
                path: "/check/HardwareInfoVerification",
                name: "HardwareInfoVerification",
                meta: {
                    title: '硬件信息校验'
                },
                component: () => import ( /* webpackChunkName: "HardwareInfoVerification" */ "../views/check/HardwareInfoVerification.vue")
            }, 
            {
                path: "/check/CpuInfoVerification",
                name: "CpuInfoVerification",
                meta: {
                    title: 'cpu信息校验'
                },
                component: () => import ( /* webpackChunkName: "CpuInfoVerification" */ "../views/check/CpuInfoVerification.vue")
            }, 
            {
                path: "/check/HddInfoVerification",
                name: "HddInfoVerification",
                meta: {
                    title: '硬盘信息校验'
                },
                component: () => import ( /* webpackChunkName: "HddInfoVerification" */ "../views/check/HddInfoVerification.vue")
            }, 
            {
                path: '/check/MemoryInfoVerification',
                name: 'MemoryInfoVerification',
                meta: {
                    title: '内存信息校验'
                },
                component: () => import (/* webpackChunkName: "MemoryInfoVerification" */ '../views/check/MemoryInfoVerification.vue')
            },


            {
                path: '/OneKeyTest',
                name: 'OneKeyTest',
                meta: {
                    title: '一键测试界面'
                },
                component: () => import (/* webpackChunkName: "OneKeyTest" */ '../views/OneKeyTest.vue')
            },



        ]
    },

    {
        
    }


];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;