<template>
  <div id="register">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <div class="content_wrap">
    <div class="top_title">Create an Account</div>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm clearfix">
 <el-row class="mar_bom">PERSONAL INFORMATION</el-row>
  <el-form-item label="First Name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Last Name" prop="name" class="nomar">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="Email Address" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
<el-row class="clear mar_bom">LOGIN INFORMATION</el-row>
<el-form-item label="Password" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

<el-form-item label="Confirm Password" prop="name"  class="nomar">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

 <el-row class="clear required_fields">* Required Fields</el-row>
  <el-row class="required_fields text_left" @click="goBack">
    <img src="../assets/img/back.png" alt="" class="back_img">
    back</el-row>

    <el-button type="primary" @click="submitForm('ruleForm')" class="sub_btn">Submit </el-button>
</el-form>

    </div>
    <!-- 公共底部 -->
    <footer-wrap></footer-wrap>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Register",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
  },
  data() {
    return {
      activeName: "first",
      ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goBack(){
        this.$router.go(-1);//返回上一层
      }
  },
};
</script>
<style>
.top_title{
height:70px;
line-height: 70px;
color:#88C6C6;
font-size: 30px;
font-weight: bold;
}
#register .demo-ruleForm{
  border:1px solid #88C6C6;
  padding: 50px;
  color:#88C6C6;
  font-size: 28px;
  margin-bottom:100px;
}
#register .el-input{
  display: block;
}
#register .el-form-item__label{
  display: block;
  width:100%!important;
  text-align: left;
  color:#88C6C6;
  font-size: 26px;
  margin-bottom:10px;
}
#register .el-form-item__content{
  margin-left:0!important;
}
#register .el-form-item{
  float: left;
  width:760px;
  margin-bottom:30px;
  margin-right:185px;
}
#register .el-form-item.nomar{
  margin-right:0;
}

#register .el-input__inner{
  width: 760px;
height: 60px;
border: 1px solid #88C6C6;
box-sizing: border-box;
border-radius: 2px;
font-size: 28px;
}
#register .el-form-item__error{
  font-size: 18px;
  padding-top:10px;
}
.mar_bom{
  margin-bottom:20px;
}
.required_fields{
  text-align: right;
  color:#EB5757;
}
.back_img{
  width:18px;
  height:19px;
}
.text_left{
  text-align: left;
  float: left;
}
.sub_btn{
  float: right;
  width: 256px;
height: 64px;
background: #EB5757;
border-radius: 5px;
font-size: 28px;
margin-top:50px;
border:none;
}
.sub_btn:hover{
  background: #f52525;
}
</style>