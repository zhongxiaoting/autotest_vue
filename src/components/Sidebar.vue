<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    setup() {
        const items = [
            {
                icon: "el-icon-lx-home",
                index: "/InputInfo",
                title: "输入服务器信息",
                // /form
            },
            {
                icon: "el-icon-lx-cascades",
                index: "/AllHardwareInfo",
                title: "硬件信息",
            },
            {
                icon: "el-icon-lx-copy",
                index: "/OneKeyTest",
                title: "一键测试界面",
            },
            {
                icon: "el-icon-lx-calendar",
                index: "3",
                title: "单项测试",
                subs: [
                    {
                        index: "/HardwareInfoVerification",
                        title: "硬件信息校验",

                    },
                    {
                        index: "/CpuInfoVerification",
                        title: "cpu信息校验",
                    },
                    {
                        index: "/MemoryInfoVerification",
                        title: "内存信息校验",
                    },
                    {
                        index: "/HddInfoVerification",
                        title: "硬盘信息校验",
                        
                    },
                    {
                        index: "/StressTest",
                        title: "压力测试",
                    },
                    {
                        index: "/StressTest",
                        title: "黑名单检测",

                    },
                ],
            },
            
        ];

        const route = useRoute();

        const onRoutes = computed(() => {
            return route.path;
        });

        const store = useStore();
        const collapse = computed(() => store.state.collapse);

        return {
            items,
            onRoutes,
            collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
