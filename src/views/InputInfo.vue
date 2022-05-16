<template>
<div>
        <el-row>
            <el-col :span="24">
                            <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-3">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">输入服务器信息</div>
                                        <div>Enter server information</div>
                                    </div>
                                </div>
                            </el-card>
                            <!-- <div class="cardx"></div> -->
                        </el-col>
         </el-row>
        <el-row type="flex" class="row-bg" justify="center" >

          <el-col span="12">
            <el-card shadow="hover" class="nb">
              <el-form ref="formRef" :model="form" label-width="80px">
                        <el-form-item label="SN号:" class="zhiti1" prop="sn">
                            <el-input v-model="form.sn"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="ID号:" class="zhiti1" prop="IDname">
                            <el-input v-model="form.IDname"></el-input>
                        </el-form-item> -->
                        <!-- <el-form-item label="测试工站:" class="zhiti1" prop="whereis">
                            <el-input v-model="form.whereis"></el-input>
                        </el-form-item> -->
                        <el-form-item label="工号:" class="zhiti1" prop="worker">
                            <el-input v-model="form.worker"></el-input>
                        </el-form-item>
                        <el-form-item label="IP号:" class="zhiti1" prop="ip">
                            <el-input v-model="form.ip"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">提交信息</el-button>
                            <el-button @click="onReset">重置内容</el-button>
                        </el-form-item> 

                            
                    </el-form>
            </el-card>
          </el-col>
          
        </el-row>

    


</div>

</template>

<script>
import { postInput } from '../api/api.js'
   export default {
    data() {
      return {
        form: {
          sn: '',
          worker: '',
          ip: '',
        },
        status: ''
    
      }
    },

    methods: {
        onSubmit() {
            postInput(this.form.sn,  this.form.worker, this.form.ip).then(res => {
                this.status = res.data.status
                if (this.status == 'true'){
                    this.$alert('提交成功', 'good', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                      },
                      this.$router.push({name: 'AllHardwareInfo'})
                      );
                    },
                  });
                  
                } else {
                    this.$alert('提交失败，请重新输入', 'error', {
                      confirmButtonText : '确定',
                      callback: action => {
                        this.$message({
                          type: 'info',
                          message: `action: ${ action }`
                        })
                      }
                    })
                }


            })

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
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    margin-top: 20px;
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
    background: rgb(255, 0, 0);
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