import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/AllHardwareInfo'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/AllHardwareInfo",
                name: "AllHardwareInfo",
                meta: {
                    title: '硬件信息'
                },
                component: () => import ( /* webpackChunkName: "AllHardwareInfo" */ "../views/AllHardwareInfo.vue")
            },
        
            {
                path: "/HddInfoVerification",
                name: "HddInfoVerification",
                meta: {
                    title: '硬盘信息校验'
                },
                component: () => import ( /* webpackChunkName: "HddInfoVerification" */ "../views/HddInfoVerification.vue")
            }, 
            
             {
                path: "/HardwareInfoVerification",
                name: "HardwareInfoVerification",
                meta: {
                    title: '硬件信息校验'
                },
                component: () => import ( /* webpackChunkName: "HardwareInfoVerification" */ "../views/HardwareInfoVerification.vue")
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
                path: "/StressTest",
                name: "StressTest",
                meta: {
                    title: '压力测试'
                },
                component: () => import ( /* webpackChunkName: "StressTest" */ "../views/StressTest.vue")
            },
             {
                path: "/CpuInfoVerification",
                name: "CpuInfoVerification",
                meta: {
                    title: 'cpu信息校验'
                },
                component: () => import ( /* webpackChunkName: "CpuInfoVerification" */ "../views/CpuInfoVerification.vue")
            }, 
            {
                path: '/OneKeyTest',
                name: 'OneKeyTest',
                meta: {
                    title: '一键测试界面'
                },
                component: () => import (/* webpackChunkName: "OneKeyTest" */ '../views/OneKeyTest.vue')
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
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            },
             {
                path: '/MemoryInfoVerification',
                name: 'MemoryInfoVerification',
                meta: {
                    title: '内存信息校验'
                },
                component: () => import (/* webpackChunkName: "MemoryInfoVerification" */ '../views/MemoryInfoVerification.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
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