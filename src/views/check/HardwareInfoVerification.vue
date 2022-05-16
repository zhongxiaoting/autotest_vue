<template>
<div>
        <el-row>
            <el-col :span="24">
                            <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-3">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">系统信息与MES对比结果</div>
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
             <el-card class="grid-content bg-purple nav-title nb">系统信息<i class="el-icon-loading"></i></el-card>
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
                        <el-form-item label="产品系列:" class="zhiti1" prop="name">
                            <div>{{product.product_name}}</div>
                        </el-form-item>
                        <el-form-item label="系统序列号:" class="zhiti1" prop="region">
                            <div>{{sn.system_sn}}</div>
                        </el-form-item>
                        <el-form-item label="制造商:" class="zhiti1" prop="hexing">
                            <div>{{manfacturer.system_manufacturer}}</div>
                        </el-form-item>
                        <el-form-item label="系统版本:" class="zhiti1" prop="xingcheng">
                            <div>{{version.system_version}}</div>
                        </el-form-item>
                        <el-form-item label="BIOS版本:" class="zhiti1" prop="sudu">
                            <div>{{_bios_version.bios_version}}</div>
                        </el-form-item>
                        <el-form-item label="BMC版本:" class="zhiti1" prop="sudu">
                            <div>{{_bmc_version.bmc_version}}</div>
                        </el-form-item>
                        <!-- <el-form-item label="" class="zhiti1" prop="sudu">
                            <el-input></el-input>
                        </el-form-item> -->

                            
                    </el-form>
            </el-card>
          </el-col>
          <el-col span="12">
          <el-card shadow="hover" class="nb" style="min-width:300px">
            <el-form ref="formRef" :model="form" label-width="90px">
                        <el-form-item label="产品系列:" class="zhiti1" prop="name">
                            <div>{{product.mes_product_name}}</div>
                        </el-form-item>
                        <el-form-item label="系统序列号:" class="zhiti1" prop="region">
                            <div >{{sn.mes_system_sn}}</div>
                        </el-form-item>
                        <el-form-item label="制造商:" class="zhiti1" prop="hexing">
                            <div >{{manfacturer.mes_system_manufacturer}}</div>
                        </el-form-item>
                        <el-form-item label="系统版本:" class="zhiti1" prop="xingcheng">
                            <div >{{version.mes_system_version}}</div>
                        </el-form-item>
                        <el-form-item label="BIOS版本:" class="zhiti1" prop="sudu">
                            <div >{{_bios_version.mes_bios_version}}</div>
                        </el-form-item>         
                        <el-form-item label="BMC版本:" class="zhiti1" prop="sudu">
                            <div >{{_bmc_version.mes_bmc_version}}</div>
                        </el-form-item>     
                        <!-- <el-form-item label="" class="zhiti1" prop="sudu">
                            <el-input ></el-input>
                        </el-form-item>   -->
                    </el-form>
          </el-card>

          </el-col>
          <el-col span="1">
            <el-card shadow="hover" class="nb" style="min-width:100px">
              <el-form ref="formRef" :model="form" label-width="10px">
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="success">{{product.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="danger">{{sn.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="warning">{{manfacturer.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="success">{{version.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item >
                            <el-tag size="medium" effect="dark" type="success">{{_bios_version.status||'wait'}}</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="warning">{{_bmc_version.status||'wait'}}</el-tag>
                        </el-form-item>

              </el-form>
            </el-card>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" class="row-bg1">
                <el-col :span="4">
                    <el-button round plain type="success" class="grid-content nav-title">ALL PASS</el-button>
                    </el-col>
                <el-col :span="4">
                    <el-button round plain type="info" class="grid-content nav-title">结束测试</el-button>
                    </el-col>       
            </el-row>
    


</div>

</template>

<script>
import { getfireware } from '../../api/api.js';

export default {

    inject:['reload'],

    data() {
        return {
        qqt: false,
        product: '',
        sn: '',
        manfacturer: '',
        version: '',
        _bios_version: '',
        _bmc_version: ''

        }
    },

    methods: {
      start(){
          if(this.qqt){
              getfireware().then(res => {
                  console.log("ces",res);
                  this.product = res.data.checkout_product
                  this.sn = res.data.checkout_sn
                  this.manfacturer = res.data.checkout_manfacturer
                  this.version = res.data.checkout_version
                  this._bios_version = res.data.checkout_bios_version
                  this._bmc_version = res.data.checkout_bmc_version
              })
            //   console.log("测试",this.sn.status);
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