<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                    <div class="grid-content grid-con-3">
                        <i class="el-icon-message-solid grid-con-icon"></i>
                        <div>
                            <div class="grid-cont-right">
                                <span class="grid-num">CPU压力测试</span>
                            </div>
                            <div>
                                <span class="select_choice">
                                    <el-select v-model="value" placeholder="请选择压力测试时间">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :value="item.value"
                                        :label="item.label">
                                        </el-option>
                                    </el-select>
                                </span>
                                <el-switch v-model="qqt" active-color="#13ce66" inactive-color="#ff4949" @change="start()"></el-switch> 
                                <el-button type="primary" round class="chongzhi" @click="refresh()">清空信息</el-button>  
                            </div> 
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>       
            <el-row type="flex">
                <el-col :span="17" :offset="3" v-loading="loading">
                    <el-card class="grid-content2 bg-purple nb" v-if="interrupt===false">
                        <div v-for="(item,index) in cpu_stress_infor" :key="index">{{item}}</div>
                    </el-card>
                    <el-card class="grid-content2 bg-purple nb" v-if="interrupt===true">
                        {{cmd_infor}}
                    </el-card>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="3">
                    <el-tag effect="dark" :style="colorTip" type="info" class="grid-content nav-title">{{status||'等待测试'}}</el-tag>
                </el-col>
                <el-button :span="3" type="danger" class="nav-title grid-content" @click="stop()">结束测试</el-button>
            </el-row>
    </div>
</template>

<script>
import { getCpuStress, getStopStress } from '../../api/api.js';
export default {    
    inject:['reload'],

    data() {
        return {
             options: [{
                label: '30s',
                value: '30s'
                }, {
                label: '1m',
                value: '1m'
                }, {
                 label: '5m',
                value: '5m'
                }, {
                label: '1h',
                value: '1h'
                },{
                label: '2h',
                value: '2h'
                },{
                label: '24h',
                value: '24h'
                }],
            value: '',
            qqt: false,
            stressCPU: [],
            cpu_stress: "",
            cpu_stress_infor:[],
            status: "",
            colorTip:'background:#999999',
            loading: false,
            interrupt: false,
            cmd_infor: "",
            stop_status: ""
        }
    },

    methods: {
        start(){
            if(this.qqt){
                this.loading = true 
                getCpuStress(this.value).then(res => {
                    this.stressCPU = res.data
                    this.cpu_stress = this.stressCPU.cpu_stress
                    this.cpu_stress_infor=this.cpu_stress.cmd_infor.split('\n');
                    this.status = this.stressCPU.status
                    if(this.status=='PASS'){
                        this.loading = false
                        this.colorTip="background:#00EE30"
                    }else if(this.status=='FAIL'){
                        this.loading = false
                        this.colorTip="background:#EE1111"
                    }
                })
                
            }
            
        },

        stop() {
            if(this.qqt) {
                this.loading = false
                this.interrupt = true
                getStopStress().then(res => {
                    this.cmd_infor = res.data.cmd_infor
                    this.stop_status = res.data.status
                    this.stop_colorTip="background:#EE1111"
                    
                })
            }

        },

        refresh(){
            this.reload()
        },
    }
}
</script>
<style scoped>
  body {
    margin: 0;
  }

.nb {
 cursor: pointer;
 /* width: 1254px;
 height: 100px; */
 background: rgb(255, 255, 255);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all .2s;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

.cardx {
 cursor: pointer;
 width: 1200px;
 height: 100px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all .2s;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}
.nav-title{
    font-size: 25px;
    margin-top: 1px;
    text-align: center;
    
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.title{
    font-size: 25px;
}
.mgb-item {
    display: flex;
    flex-direction: column-reverse;
    flex:  1;
    margin: 0 8px;
    height: 100px;
    color: rgb(15, 14, 14);
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 30px solid #fff;
}
.el-row {

    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
    border-radius: 20px;
    border: 7px solid #fff;
  }
  .bg-purple1{
      /* background: #d3dce6; */
      text-align: center;
      font-size: 30px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}
.grid-content2 {
    display: flex;
    align-items: center;
    height: 250px;
}
grid-content3{
    border-radius: 30px;
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
    padding: 0px 0px 10px 250px;
}
.select_choice {
    text-align: center;
    padding: 0px 60px 0px 150px;
}

.chongzhi {
    margin-left: 60px;
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
    background: rgb(255, 165, 0);
}

.grid-con-3 .grid-num {
    color: rgb(255, 165, 0);
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

.zhiti1 {
    
    font-size: large;
    /* font-weight: bold; */

}
.form-box {

    justify-content: stretch!important;
    flex-wrap:nowrap;
    /* font-size: large; */
    
}
</style>