<template>
<div>
        <el-row>
            <el-col :span="24">
                            <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-3">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">硬盘信息与MES对比结果</div>
                                        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                                    </div>
                                </div>
                            </el-card>
                            <!-- <div class="cardx"></div> -->
                        </el-col>
         </el-row>


         <el-row type="flex" justify="center" gutter="200" class="row-bg">
           <el-col span="12">
             <el-card class="grid-content bg-purple nav-title nb">硬盘信息<i class="el-icon-loading"></i></el-card>
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
            <el-card shadow="hover" class="nb">
              <el-form ref="formRef" :model="form" label-width="80px" >
                        
                    
                        <el-form-item label="硬盘型号:" class="zhiti1" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘容量:" class="zhiti1" prop="region">
                            <el-input v-model="form.region"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘厂商:" class="zhiti1" prop="hexing">
                            <el-input v-model="form.hexing"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘类型:" class="zhiti1" prop="xingcheng">
                            <el-input v-model="form.xiangcheng"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘序列号:" class="zhiti1" prop="sudu">
                            <el-input v-model="form.sudu"></el-input>
                        </el-form-item>

                            
                    </el-form>
            </el-card>
          </el-col>
          <el-col span="12">
          <el-card shadow="hover" class="nb">
            <el-form ref="formRef" :model="form" label-width="80px">
                        <el-form-item label="硬盘型号:" class="zhiti1" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘容量:" class="zhiti1" prop="region">
                            <el-input v-model="form.region"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘厂商:" class="zhiti1" prop="hexing">
                            <el-input v-model="form.hexing"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘类型:" class="zhiti1" prop="xingcheng">
                            <el-input v-model="form.xiangcheng"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘序列号:" class="zhiti1" prop="sudu">
                            <el-input v-model="form.sudu"></el-input>
                        </el-form-item>              
                    </el-form>
          </el-card>

          </el-col>
          <el-col span="1">
            <el-card shadow="hover" class="nb">
              <el-form ref="formRef" :model="form" label-width="0px">
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="success">pass</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="danger">pass</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="warning">pass</el-tag>
                        </el-form-item>
                        <el-form-item>
                            <el-tag size="medium" effect="dark" type="success">pass</el-tag>
                        </el-form-item>
                        <el-form-item >
                            <el-tag size="medium" effect="dark" type="success">pass</el-tag>
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
   export default {
    data() {
      return {

        value: false,
    
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        
        }
    
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
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
</style>