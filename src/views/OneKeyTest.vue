<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                    <div class="grid-content grid-con-3">
                        <i class="el-icon-message-solid grid-con-icon"></i>
                        <div>
                            <div class="grid-cont-right">
                                <span class="grid-num">一键自动化产测</span>
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
            <el-row>
                    <el-col>
                        <div class="nav-title grid-content3 bg-purple1">硬件信息校验</div>
                    </el-col>
                </el-row>
            <el-row :gutter="20">
                <el-col :span="5">
                    <el-card class="grid-content bg-purple nav-title nb">系统信息检查<i class="el-icon-loading"></i></el-card>
                    </el-col>
                <el-col :span="3">
                <el-tag type="success" class="grid-content nav-title">PASS</el-tag>
                </el-col>
                <el-col :span="5">
                    <el-card class="grid-content bg-purple nav-title nb">CPU信息检查<i class="el-icon-cpu"></i></el-card></el-col>
                <el-col :span="3">
                    <el-tag type="danger" class="grid-content nav-title">FAIL!</el-tag>
                </el-col>
                <el-col :span="5"><el-card class="grid-content bg-purple nav-title nb">内存信息检查<i class="el-icon-message-solid"></i></el-card></el-col>
                <el-col :span="3">
                    <el-tag type="success" class="grid-content nav-title">PASS</el-tag>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="5"><el-card class="grid-content bg-purple nav-title nb">网卡信息检查<i class="el-icon-umbrella"></i></el-card></el-col>
                <el-col :span="3">
                    <el-tag type="warning" class="grid-content nav-title">Waiting...</el-tag>
                    </el-col>
                <el-col :span="5"><el-card class="grid-content bg-purple nav-title nb">NVME信息检查<i class="el-icon-s-promotion"></i></el-card></el-col>
                <el-col :span="3">
                    <el-tag type="success" class="grid-content nav-title">PASS</el-tag>
                    </el-col>
                <el-col :span="5"><el-card class="grid-content bg-purple nav-title nb">PCIE设备信息检查<i class="el-icon-s-custom"></i></el-card></el-col>
                <el-col :span="3">
                    <el-tag type="danger" class="grid-content nav-title">FAIL!</el-tag>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <div class="nav-title grid-content3 bg-purple1">压力测试</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" class="performance-left">
                    <el-card class="grid-content bg-purple nav-title nb ">
                        <img :src="cpu_img" alt="" class="img-right">CPU性能测试
                    </el-card>
                </el-col>
                <el-col :span="3" class="performance-result result-top" v-loading="loading">
                    <el-tag type="danger" class="grid-content nav-title" v-if="interrupt==false">{{cpu_output||"Waiting..."}}</el-tag>
                    <el-tag type="danger" class="grid-content nav-title" v-if="interrupt==true">{{cpu_interrupt}}</el-tag>
                </el-col>

                <el-col :span="6" class="performance-left">
                    <el-card class="grid-content bg-purple nav-title nb">
                        <img :src="mem_img" alt="" class="img-right">内存性能测试
                    </el-card>
                </el-col>
                <el-col :span="3" class="performance-result result-top" v-loading="loading">
                    <el-tag type="success" class="grid-content nav-title" v-if="interrupt==false">{{memory_output||"Waiting..."}}</el-tag>
                    <el-tag type="success" class="grid-content nav-title" v-if="interrupt==true">{{memory_interrupt}}</el-tag>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="6" class="performance-left">
                    <el-card class="grid-content bg-purple nav-title nb">
                       <img :src="hdd_img" alt="" class="img-right">硬盘性能测试
                    </el-card>
                </el-col>
                <el-col :span="3" class="performance-result result-top" v-loading="loading">
                    <el-tag type="success" class="grid-content nav-title" v-if="interrupt==false">{{hdd_output||"Waiting..."}}</el-tag>
                    <el-tag type="success" class="grid-content nav-title" v-if="interrupt==true">{{hdd_interrupt}}</el-tag>
                </el-col>

                <el-col :span="6" class="performance-left">
                    <el-card class="grid-content bg-purple nav-title nb">
                        <img :src="network_img" alt="" class="img-right">网卡性能测试
                    </el-card>
                </el-col>
                <el-col :span="3" class="performance-result result-top" v-loading="loading">
                    <el-tag type="warning" class="grid-content nav-title" v-if="interrupt==false">{{network_output||"Waiting..."}}</el-tag>
                    <el-tag type="warning" class="grid-content nav-title" v-if="interrupt==true">{{network_interrupt}}</el-tag>
                </el-col>
            </el-row>

            <el-row type="flex" justify="space-around">
                <el-col :span="3">
                    <el-tag effect="dark" type="success" :style="stress_colorTip"  class="grid-content nav-title" v-if="interrupt==false">{{all_stress_status||'等待测试'}}</el-tag>
                    <el-tag effect="dark" type="success" :style="stress_colorTip"  class="grid-content nav-title" v-if="interrupt==true">{{stop_status}}</el-tag>
                </el-col>
                <el-button :span="3" type="danger" class="nav-title grid-content" @click="stop()">结束测试</el-button>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="10" :offset="3"><el-card class="grid-content3 bg-purple nav-title nb">错误日志黑名单检查</el-card>
                </el-col>
                <el-col :span="3">
                    <el-tag type="success" class="grid-content nav-title">{{black_output||'Waiting...'}}</el-tag>
                </el-col>       
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="4">
                    <el-tag effect="dark" type="success" :style="result_colorTip" class="grid-content nav-title" v-if="interrupt==false">{{all_status||'等待测试'}}</el-tag>
                    <el-tag effect="dark" type="success" :style="result_colorTip" class="grid-content nav-title" v-if="interrupt==true">{{stop_status}}</el-tag>
                </el-col>
                <el-col :span="4">
                    <el-tag effect="dark" type="danger" class="grid-content nav-title" @click="stop()">结束测试</el-tag>
                </el-col>       
            </el-row>
            <el-row>
                <el-col>
                    <div class="nav-title grid-content3 bg-purple1">日志提交到远程数据库</div>
                </el-col>
                <el-col>
                    <el-button  class="submmit" effect="dark" type="success" @click="submit()">提交日志</el-button>
                </el-col> 
            </el-row>
    </div>
</template>

<script>
import cpu_img from '/src/assets/img/CPU.png'
import mem_img from '/src/assets/img/mem.png'
import hdd_img from '/src/assets/img/hdd.png'
import network_img from '/src/assets/img/fan.png'
import { getCpuStress, getMemStress, getHddStress, getNetworkStress, getLanLog, getStopStress, getBlackCheck, getBlackLog, postUpload } from '../api/api.js';
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
            cpu_img,
            mem_img,
            hdd_img,
            network_img,
            value: '',
            qqt: false,
            stressCPU: [],
            status: "",
            stress_colorTip:'background:#999999',
            result_colorTip: 'background:#999999',
            stop_status: '',
            all_stress_status: '',
            all_status: '',
            interrupt: false,
            loading: false,
            cpu_output:'',
            memory_output:'',
            hdd_output:'',
            network_output:'',
            black_output:'',
            cpu_interrupt: '',
            memory_interrupt: '',
            hdd_interrupt: '',
            network_interrupt: '',
            timer1: null,
            timer2: null,
            timer3: null,
            logUpload: '',
            upload_url: '',
            upload_status: ''
        }

    },
    methods: {
        start(){
            if (this.qqt) {
                this.loading = true 
                this.cpu_output = 'Checking...'
                this.memory_output = 'Checking...'
                this.hdd_output = 'Checking...'
                this.network_output = 'Checking...'
                this.all_stress_status = 'Checking...'
                this.stress_colorTip = "background:##00EE30"
                var promise1=new Promise((resolve,reject)=>{
                        getCpuStress(this.value).then(res => {
                    this.stressCPU = res.data
                    // this.cpu_stress = this.stressCPU.cpu_stress
                    this.status = this.stressCPU.status
                    if(this.status=='PASS'){
                        resolve(true)
                        this.loading = false
                        this.cpu_output = 'PASS'
                        this.cpu_status = 'PASS'
                        // this.colorTip="background:#00EE30"
                    }else if(this.status=='FAIL'){
                        reject('出错了')
                        this.loading = false
                        this.cpu_output = 'FAIL'
                        this.cpu_status = 'FAIL'
                        // this.colorTip="background:#EE1111"
                    }
                });
                })
                var promise2=new Promise((resolve,reject)=>{
                     getMemStress(this.value).then(res => {
                    this.stressMem = res.data
                    // this.mem_stress = this.stressMem.mem_stress
                    this.status = this.stressMem.status
                    if(this.status=='PASS'){
                        resolve(true)
                        this.loading = false
                        this.memory_output = 'PASS'
                        this.memory_status = 'PASS'
                        // this.colorTip="background:#00EE30"
                    }else if(this.status=='FAIL'){
                        reject('出错了')
                        this.loading = false
                        this.memory_output = 'FAIL'
                        this.memory_status = 'FAIL'
                        // this.colorTip="background:#EE1111"
                    }
                });
                })
                var promise3=new Promise((resolve,reject)=>{
                    getHddStress(this.value).then(res => {
                    this.stressHdd = res.data
                    // this.hdd_stress = this.stressHdd.hdd_stress
                    this.status = this.stressHdd.status
                    if(this.status=='PASS'){
                        resolve(true)
                        this.loading = false
                        this.hdd_output = 'PASS'
                        this.hdd_status = 'PASS'
                        // this.colorTip="background:#00EE30"
                    }else if(this.status=='FAIL'){
                        reject('出错了')
                        this.loading = false
                        this.hdd_output = 'FAIL'
                        this.hdd_status = 'FAIL'
                        // this.colorTip="background:#EE1111"
                    }
                });
                })
                var promise4=new Promise((resolve,reject)=>{
                    getNetworkStress(this.value).then()
                    resolve(true)
                })

                this.timer1=setInterval(()=>{
                    this.read_net_log();
                },2000)
                
            }
            //var promise=new Promise((resolve,reject)=>{})
            // this.timer3=setTimeout(()=>{
            //     this.next_black();
            // },90000)
            Promise.all([promise1,promise2,promise3,promise4]).then(res=>{
                //this.next_black();
                console.log("kkk",res);
                var CheckFalg=true;
                for(let item of res){
                    if(item==="出错了"){
                        var CheckFalg=false;
                    }
                }
                if(CheckFalg){
                        this.all_stress_status = 'PASS'
                        this.stress_colorTip = "background:#00EE30"
                       this.next_black();
                }else{
                    this.all_stress_status = 'FAIL'
                    this.stress_colorTip="background:#EE1111"
                }
            }).catch(res=>{
                this.all_stress_status = 'FAIL'
                this.stress_colorTip="background:#EE1111"
            })
           
        },

        read_net_log(){
            getLanLog().then(res => {
                this.stressLAN = res.data
                // this.lan_stress = this.stressLAN.lan_log
                this.status = this.stressLAN.status
                if (this.status == 'Checking...') {
                    this.loading = false
                    // this.colorTip = "background:#29E8E8"
                }else if(this.status=='PASS'){
                    this.loading = false
                    this.network_output = "PASS"
                    this.network_status = 'PASS'
                    // this.colorTip="background:#00EE30"
                    clearInterval(this.timer1);
                }else if(this.status=='FAIL'){
                    this.loading = false
                    this.network_output = "FAIL"
                    this.network_status = 'FAIL'
                    // this.colorTip="background:#EE1111"
                }
                else{
                    this.loading = false
                    this.network_output = "FAIL"
                    this.network_status = 'FAIL'
                    // this.colorTip="background:#EE1111"
                }
            })
        },

        read_black_log(){
            getBlackLog().then(res => {
                this.BlackCheck = res.data
                // this.black_check = this.BlackCheck.black_log.split("\n")
                this.status = this.BlackCheck.status
                if (this.status == 'Checking...') {
                    this.black_output = 'Checking...'
                    // this.loading = false
                    // this.colorTip = "background:#29E8E8"
                }
                if(this.status=='PASS'){
                    // this.loading = false
                    clearInterval(this.timer2);
                    this.black_output = 'PASS'
                    // this.colorTip="background:#00EE30"
                    this.all_status = 'PASS'
                    this.result_colorTip="background:#00EE30"
                }else if(this.status=='FAIL'){
                    // this.loading = false
                    this.black_output = 'FAIL'
                    // this.colorTip="background:#EE1111"
                    this.all_status = 'FAIL'
                    this.result_colorTip = "background:#EE1111"
                }
            })
        },

        next_black() {
           // if (this.cpu_output =='PASS' && this.memory_output == 'PASS' && this.hdd_output == 'PASS' && this.network_output == 'PASS'){
                // this.all_stress_status = 'PASS'
                // this.stress_colorTip = "background:#00EE30"
                new Promise((reslove,reject)=>{
                     getBlackCheck().then(res=>{
                         console.log(res);
                         if(res.status==200){
                             reslove(true);
                         }else{
                             reject('出错了')
                         }
                     })
                }).then(
                    this.timer2=setInterval(()=>{
                     this.read_black_log();
                    },300)
                ).catch(res=>{
                    this.all_status = 'FAIL'
                    this.result_colorTip = "background:#EE1111"
                })
               
                // this.timer1=setTimeout(()=>{
                //     this.read_log();
                // },1000)
              //  console.log("mes", 111)
                
          //  }else{
          //       this.all_stress_status = 'FAIL'
          //       this.stress_colorTip="background:#EE1111"
          //  }
        },

        stop() {
            clearInterval(this.timer1);
            clearInterval(this.timer2);
            if(this.qqt) {
                this.loading = false
                this.interrupt = true
                this.cpu_interrupt = "FAIL"
                this.memory_interrupt = "FAIL"
                this.hdd_interrupt = "FAIL"
                this.network_interrupt = "FAIL"
                getStopStress().then(res => {
                    // this.cmd_infor = res.data.cmd_infor
                    this.stop_status = res.data.status
                    // this.stop_status = "FAIL"
                    this.stress_colorTip="background:#EE1111"
                    this.result_colorTip="background:#EE1111"
                })
            }

        },

        submit() {
            postUpload().then(res => {
                this.logUpload = res.data
                this.upload_url = this.logUpload.url
                this.upload_status = this.logUpload.status
                if (this.upload_status == 'true') {
                    this.$alert('提交成功', 'success')
                    confirmButtonText: '确定'
                } else {
                    this.$alert('提交失败', 'fail')
                    confirmButtonText: '确定'
                }

            })
        },

        refresh(){
            this.reload()
            clearInterval(this.timer1);
            clearInterval(this.timer2);
        }
    },

    beforeDestroy(){
        clearInterval(this.timer1);
        clearInterval(this.timer2);
    }
    
}
</script>
<style scoped>
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
    height: 40px;
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
    /* margin-bottom: 20px; */
    /* width: 100%; */
    /* display: flex; */
    justify-content: stretch!important;
    flex-wrap:nowrap;
    /* font-size: large; */
    
}
.performance-left {
    margin: 0px 0px 50px 80px;
}
.performance-result{
    margin-left: 30px;
    /* text-align: center; */
}
.result-top {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
}
.img-right {
    margin-right: 8px;
    text-align: center;
}

.submmit {
    border-radius: 4px;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 150px;
    font-size: 25px;
    margin: 30px 0px 100px 500px;
    padding-left: 20px;
    /* flex-wrap:nowrap; */
    /* margin-bottom: 50px; */
    color: #1988b8;
    font-weight:bold
}


</style>