<template>
<div>
        <el-row>
            <el-col :span="24">
                            <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-3">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">CPU信息与MES对比结果</div>
                                        <div>
                                          <el-switch v-model="qqt" active-color="#13ce66" inactive-color="#ff4949" @change="start()"></el-switch> 
                                          <el-button type="primary" round class="chongzhi" @click="refresh()">清空信息</el-button>    
                                      </div>
                                    </div>
                                </div>
                            </el-card>
                            <!-- <div class="cardx"></div> -->
                        </el-col>
         </el-row>


         <el-row type="flex" justify="center" gutter="200" class="row-bg">
           <el-col span="12">
             <el-card class="grid-content bg-purple nav-title nb">CPU信息<i class="el-icon-loading"></i></el-card>
           </el-col>
         <el-col span="12">
           <el-card class="grid-content bg-purple nav-title nb">MES信息<i class="el-icon-loading"></i></el-card>
         </el-col>
         <el-col span="12">
           <el-card class="grid-content bg-purple nav-title nb">结果<i class="el-icon-loading"></i></el-card>
           </el-col>       
         </el-row>
        <el-row type="flex" justify="center" gutter="100" class="row-bg1">

          <el-col span="12">
            <el-card shadow="hover" class="nb" style="min-width:300px">
              <el-form ref="formRef" :model="form" label-width="90px" >
                        <el-form-item label="CPU型号:" class="zhiti1" prop="name">
                            <div>{{type.cpu_type}}</div>
                        </el-form-item>
                        <el-form-item label="CPU架构:" class="zhiti1" prop="region">
                            <div>{{_architecture.architecture}}</div>
                        </el-form-item>
                        <el-form-item label="CPU核数:" class="zhiti1" prop="hexing">
                            <div>{{core.core_number}}</div>
                        </el-form-item>
                        <el-form-item label="CPU线程数:" class="zhiti1" prop="xingcheng">
                            <div>{{thread.thread_number}}</div>
                        </el-form-item>
                        <el-form-item label="CPU主频:" class="zhiti1" prop="sudu">
                            <div>{{_speed.speed}}</div>
                        </el-form-item>                 
                    </el-form>
            </el-card>
          </el-col>
          <el-col span="12">
          <el-card shadow="hover" class="nb" style="min-width:300px">
            <el-form ref="formRef" :model="form" label-width="90px">
                        <el-form-item label="CPU型号:" class="zhiti1" prop="name">
                            <div>{{type.mes_cpu_type}}</div>
                        </el-form-item>
                        <el-form-item label="CPU架构:" class="zhiti1" prop="region">
                            <div >{{_architecture.mes_architecture}}</div>
                        </el-form-item>
                        <el-form-item label="CPU核数:" class="zhiti1" prop="hexing">
                            <div >{{core.mes_core_number}}</div>
                        </el-form-item>
                        <el-form-item label="CPU线程数:" class="zhiti1" prop="xingcheng">
                            <div >{{thread.mes_thread_number}}</div>
                        </el-form-item>
                        <el-form-item label="CPU主频:" class="zhiti1" prop="sudu">
                            <div >{{_speed.mes_speed}}</div>
                        </el-form-item>         
                    </el-form>
          </el-card>

          </el-col>
          <el-col span="1">
            <el-card shadow="hover" class="nb" style="min-width:100px">
              <el-form ref="formRef" :model="form" label-width="10px">
                        <el-form-item>
                            <el-tag size="medium" effect="dark" :style="colorTip">{{type.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" :style="colorTip">{{_architecture.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" :style="colorTip">{{core.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" :style="colorTip">{{thread.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item >
                            <el-tag size="medium" effect="dark" :style="colorTip">{{_speed.status||'wait'}}</el-tag>
                        </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" class="row-bg1">
                <el-col :span="4">
                    <el-button round :style="colorTip" class="grid-content nav-title">{{all_status||'等待测试'}}</el-button>
                    </el-col>
                <el-col :span="4">
                    <el-button round plain type="info" class="grid-content nav-title">结束测试</el-button>
                    </el-col>       
            </el-row>
    


</div>

</template>

<script>
import { getcpucheck } from '../../api/api.js';

export default {

    inject:['reload'],

    data() {
        return {
        qqt: false,
        type: '',
        _architecture: '',
        core: '',
        thread: '',
        _speed: '',
        all_status: '',
        colorTip:'background:#999999',
        }
    },

    methods: {
      start(){
          if(this.qqt){
              getcpucheck().then(res => {
                  this.type = res.data.checkout_type
                  this._architecture = res.data.checkout_architecture
                  this.core = res.data.checkout_core
                  this.thread = res.data.checkout_thread
                  this._speed = res.data.checkout_speed
                  this.colorTip="background:#00EE30"
                  this.all_status = 'PASS'
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
.nav-title{
    font-size: 25px;
    margin-top: 20px;
    text-align: center;
}
.bg-purple {
    background: #fff;
    border-radius: 20px;
    border: 7px solid #fff;
  }
  
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    margin-top: 10px;
  }
.row-bg1 {
  padding: 10px 0;
  background-color: #f9fafc;

}
.nc {
  width: 100%;
  height: 300px;
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
.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}
.grid-con-3 .grid-con-icon {
    background: rgb(255, 165, 0);
}
.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}
.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}
.grid-num {
    font-size: 30px;
    font-weight: bold;
}
.grid-content2 {
    display: flex;
    align-items: center;
    height: 250px;
}
.test{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  .chongzhi {
    margin-left: 90px;
    margin-top: 10px;
}

</style>