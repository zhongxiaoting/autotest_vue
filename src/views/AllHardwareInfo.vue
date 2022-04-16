<template>
    <div>
        <el-row>
            <el-col :span="24">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-2">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">硬件信息</div>
                                        <div>Hardware information</div>
                                    </div>
                                </div>
                            </el-card>
                </el-col>
        </el-row>
            <el-row >
                <el-col >
                    <el-row :gutter="1" class="mgb20">
                        <el-card class="mgb-item"  @click="switch_item(index) " v-for="(item,index) in hw_info_list" :key="item.title" :style="{background: active_index.index== index? '#DBB5C3': '' }" >
                            <div class="nav-title">{{item.title}}</div>
                            <div> <img :src="item.img" alt=""></div>
                        </el-card>
                    </el-row>
                </el-col>
            </el-row>
            <div>
                <el-card  class="mgb21" shadow="hover" :body-style="{ padding: '50px' }">
                    <div class="title">{{sysytem_title.title}}</div>
                    <div class="newlife">
                        <el-card class="card-item" v-for="(item, i) in detail_info" :key="i" >
                            <div v-show="active_index.index == 0 ">
                                <table border="0" style="width: 100%">
                                <tbody> 
                                    <tr>
                                        <td><p>系统槽位: </p></td>
                                        <td><p>{{item.info}}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>系统更新时间: </p></td>
                                        <td><p>{{item.date}}</p></td>
                                    </tr>
                                    <tr>
                                        <td>系统厂商: </td>
                                        <td>{{item.manufacturer}}</td>
                                    </tr>
                                    <tr>
                                        <td><p>系统版本: </p></td>
                                        <td><p>{{item.version}}</p></td>
                                        
                                    </tr>
                                    <tr>
                                        <td><p>系统序列号: </p></td>
                                        <td><p>{{item.sn}}</p></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>

                            <div v-show="active_index.index == 1">
                                <table border="0" style="width: 100%">
                                <tbody> 
                                    <tr>
                                        <td><p>CPU槽位: </p></td>
                                        <td><p>{{item.slot}}</p></td>
                                    </tr>
                                    <tr>
                                        <td>CPU厂商: </td>
                                        <td>{{item.manufacturer}}</td>
                                    </tr>
                                    <tr>
                                        <td><p>CPU速度: </p></td>
                                        <td><p>{{item.speed}}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>CPU核数: </p></td>
                                        <td><p>{{item.core}}</p></td>
                                        
                                    </tr>
                                </tbody>
                                </table>
                            </div>

                            <div v-show="active_index.index == 2 ">
                                <table border="0" style="width: 100%">
                                <tbody> 
                                    <tr>
                                        <td><p>内存槽位: </p></td>
                                        <td><p>{{item.mem_slot}}</p></td>
                                    </tr>
                                    <tr>
                                        <td>内存厂商: </td>
                                        <td>{{item.mem_manufacturer}}</td>
                                    </tr>
                                    <tr>
                                        <td><p>内存速率: </p></td>
                                        <td><p>{{item.mem_speed}}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>内存序列号: </p></td>
                                        <td><p>{{item.mem_sn}}</p></td>
                                        
                                    </tr>
                                    <tr>
                                        <td><p>内存版本: </p></td>
                                        <td><p>{{item.mem_version}}</p></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            
                            <div v-show="active_index.index == 3 ">
                                <table border="0" style="width: 100%">
                                <tbody> 
                                    <tr>
                                        <td>硬盘版本: </td>
                                        <td>{{item.version}}</td>
                                    </tr>
                                    <tr>
                                        <td><p>硬盘大小: </p></td>
                                        <td><p>{{item.size}}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>硬盘序列号: </p></td>
                                        <td><p>{{item.sn}}</p></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>

                            <div v-show="active_index.index == 4 ">
                                <table border="0" style="width: 100%">
                                <tbody> 
                                    <tr>
                                        <td><p>网口名称: </p></td>
                                        <td><p>{{item.logical_name}}</p></td>
                                    </tr>
                                    <tr>
                                        <td>网卡版本: </td>
                                        <td>{{item.version}}</td>
                                    </tr>
                                    <tr>
                                        <td><p>网卡厂商: </p></td>
                                        <td><p>{{item.manufacturer}}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p>网卡速率: </p></td>
                                        <td><p>{{item.speed}}</p></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </el-card>

                    </div>
                </el-card>
            </div>
    </div>
</template>

<script>

import {reactive } from "vue";
import {getsystem, getcpu, getmem, getnetwork, gethdd} from '../api/api.js';


export default {
    name: "AllHardwareInfo",

    created() {
        getsystem(this.detail_info)
        
    },
    
    methods: {
        switch_item (i) {
            this.active_index.index = i
            this.sysytem_title.title = this.hw_info_list[i]['title']
            if (i == 0) {
                getsystem(this.detail_info).then(res => {
                    this.detail_info = res.data.system_info})
            }else if(i == 1) {
                 getcpu(this.detail_info).then(res => {
                    this.detail_info =res.data.cpu_info})
            }else if(i==2){
                getmem().then(res=>{
                    this.detail_info = res.data.memory_info}) 
            }else if(i==3){
                gethdd(this.detail_info).then(res => {
                    this.detail_info =res.data.hdd_info})
            }else{
                getnetwork(this.detail_info).then(res => {
                    this.detail_info =res.data.network_info})
            }
        },
        
    },


   
    setup() {
        let active_index =reactive({index:0}) ;
        let sysytem_title = reactive({title: '系统'})
        let detail_info =reactive([
            
            // '固件版本:   1.00',
            // '固件日期:   May 20 2021',
            // 'BIOS版本： 1.91',
            // 'BMC版本：2.2',
            // '远程IP：192.168.38.22'
        ])

        const hw_info_list = [
                {title: '系统',img: '/src/assets/img/system.png'},
                {title: 'CPU',img: '/src/assets/img/CPU.png'},
                {title: '内存条',img: '/src/assets/img/mem.png'},
                {title: '硬盘',img: '/src/assets/img/hdd.png'},
                // {title: 'PCIE',img: '/src/assets/img/PCIE.png'},
                // {title: 'NVME',img: '/src/assets/img/nvme.png'},
                {title: '网卡',img: '/src/assets/img/fan.png'},
                // {title: '电源',img: '/src/assets/img/power.png'},
                // {title: '背板',img: '/src/assets/img/back.png'},
         ]
                
        return {    
            hw_info_list,
            active_index,
            detail_info,
            sysytem_title
        };
    },
};


</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.mgb-item {
    display: flex;
    flex-direction: column;
    flex:  1;
    margin: 0 8px;
    height: 100px;
    color: rgb(15, 14, 14);
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 7px solid #fff;
}
.mgb-item > div {
    text-align: right;
}
.mgb-item > .nav-title{
    margin-top: 2px;
    text-align: left;
}
.mgb-item > div>img{
    display: inline-block;
    margin-top: 4px;
    width: 40px;
    height: 40px;
}

.mgb-item:last-child{
    margin-right: 0!important;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around!important;
    flex-wrap:nowrap;
}
.mgb21 {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-wrap:nowrap;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
.title{
    font-size: 30px;
    font-weight: bold;
    margin: 0px 20px 20px 250px;

}
.newlife{
    font-size: 25px;
}
.card-item {
    display: flex;
    flex-direction: column;
    flex:  1;
    margin: 10px 10px 30px 30px;
    height: 80%;
    width: 750px;
    color: rgb(15, 14, 14);
    /* font-weight: bold; */
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid rgb(170, 163, 163);
}

td {
    height: 50px;
}



</style>
