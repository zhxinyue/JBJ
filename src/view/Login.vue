<template>
  <div id="login">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <div class="content_wrap">
      <div class="top_title">Login or Create an Account</div>
      <div class="login_view">
        <div class="wrap left">
          <div class="wrap_title">NEW CUSTOMERS</div>
          <img src="../assets/img/banner.png" alt="" class="banner_img" />
          <div class="wrap_cont">
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </div>
          <div class="wrap_btn" @click="toReg()">Create An Account</div>
        </div>
        <div class="wrap right">
          <div class="wrap_title">REGISTERED CUSTOMERS</div>
           <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm clearfix"
      >
        <el-form-item label="Email Address" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-row class="clear required_fields">* Required Fields</el-row>
       <el-row class="clear required_fields2">Forgot Your Password?</el-row>

        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="wrap_btn"
          >Login
        </el-button>
      </el-form>
        </div>
      </div>

     
    </div>
    <!-- 公共底部 -->
    <footer-wrap></footer-wrap>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Login",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
  },
  data() {
    return {
      activeName: "first",
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    // 注册
    toReg(){
      this.$router.push({path:'/register'})
    },
  },
};
</script>
<style>
.top_title {
  height: 70px;
  line-height: 70px;
  color: #88c6c6;
  font-size: 30px;
  font-weight: bold;
}
#login .demo-ruleForm {
  color: #88c6c6;
  font-size: 26px;
}
#login .el-input {
  display: block;
}
#login .el-form-item__label {
  display: block;
  width: 100% !important;
  text-align: left;
  color: #88c6c6;
  font-size: 26px;
  margin-bottom: 10px;
}
#login .el-form-item__content {
  margin-left: 0 !important;
}
#login .el-form-item {
  float: left;
  width: 760px;
  margin-bottom: 30px;
  margin-right: 185px;
}
#login .el-form-item.nomar {
  margin-right: 0;
}

#login .el-input__inner {
  width: 760px;
  height: 60px;
  border: 1px solid #88c6c6;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 28px;
}
#login .el-form-item__error {
  font-size: 18px;
  padding-top: 10px;
}
.mar_bom {
  margin-bottom: 20px;
}
.required_fields {
  text-align: right;
  color: #eb5757;
}
.required_fields2{
  text-align: right;
color: #A0A0A7;
margin-top:20px;
}
.back_img {
  width: 18px;
  height: 19px;
}
.text_left {
  text-align: left;
  float: left;
}

.sub_btn:hover {
  background: #f52525;
}
.login_view {
  width: 100%;
  height: 700px;
  margin-bottom: 100px;

}
.wrap {
  width: 860px;
  height: 700px;
  box-sizing: border-box;
  border: 1px solid #88c6c6;
  padding: 50px;
  color: #88c6c6;
  position: relative;
}
.wrap_title {
  line-height: 32px;
  font-size: 28px;
  text-align: center;
}
.banner_img {
  width: 760px;
  height: 330px;
  display: block;
  margin: 20px auto;
}
.wrap_cont {
  font-size: 26px;
  line-height: 30px;
}
.wrap .wrap_btn {
  width: 256px;
  height: 64px;
  background: #eb5757;
  border-radius: 5px;
  margin: 30px auto 0;
  font-size: 26px;
  color: #fff;
  text-align: center;
  line-height: 64px;
  position: absolute;
  bottom:50px;
  left:302px;
   border: none;
   padding:0;
   cursor: pointer;
}
</style>