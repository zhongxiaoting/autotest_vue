<template>
    <div>
        <el-row>
            <el-col :span="24">
                            <el-card class="cardx" shadow="hover" :body-style="{ padding: '0px' }">
                                <div class="grid-content grid-con-3">
                                    <i class="el-icon-message-solid grid-con-icon"></i>
                                    <div class="grid-cont-right">
                                        <div class="grid-num">网卡压力测试</div>
                                        <el-switch v-model="qqt" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                                    </div>
                                </div>
                            </el-card>
                            <!-- <div class="cardx"></div> -->
                        </el-col>
        </el-row>       
                <el-row>
                    <el-col>
                        <div class="nav-title grid-content3 bg-purple1">网卡压力测试</div>
                    </el-col>
                </el-row>
                <el-row type="flex">
                    <el-col :span="17" :offset="3"><el-card class="grid-content2 bg-purple nb"></el-card></el-col>
                </el-row>
        
            <el-row type="flex" justify="space-around">
                <el-col :span="4">
                    <el-tag effect="dark" type="success" class="grid-content nav-title">PASS</el-tag>
                    </el-col>
                <el-col :span="4">
                    <el-tag effect="dark" type="info" class="grid-content nav-title">结束测试</el-tag>
                    </el-col>       
            </el-row>
    </div>
</template>

<script>
export default {    
    data() {
        return {
            qqt: false
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
    text-align: left;
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