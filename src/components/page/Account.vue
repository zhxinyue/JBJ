<template>
  <div class="account">
    <div class="account_wrap">
      <h3 class="account_h3">My Account</h3>
      <div class="account_content">
        <h4 class="account_h4">Contact Information</h4>
        <p><span> Name： </span>Jack</p>
        <p><span> Email： </span>beimahaitao@gmail.com</p>
        <p><span> Password： </span>Jack</p>
        <el-button>Chang Password</el-button>
      </div>
    </div>
<h3 class="account_h3">
       My Address
        <img src="../../assets/img/icon4.png" alt="" class="add_img" />
      </h3>
    <div class="account_wrap account_wrap_left clearfix">
      <div class="account_content account_content2">
        <h4 class="account_h4 default_h4">Default Address </h4>
        <p class="p_left"><span> Name： </span>Jack</p>
        <p class="p_left"><span> Tel： </span>(239) 555-0108</p>
        <p class="p_clear"><span> Email： </span>beimahaitao@gmail.com</p>
        <p class="p_clear"><span> Address： </span>4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p class="p_left"><span> City： </span>Portland</p>
        <p class="p_left"><span> State/Prov： </span>Oregon</p>
        <p class="p_left"><span> Country： </span>Portland</p>
      </div>
    </div>
    <div class="account_wrap account_wrap_left clearfix">
      <div class="account_content account_content2">
        <h4 class="account_h4">Address -2 </h4>
        <p class="p_left"><span> Name： </span>Jack</p>
        <p class="p_left"><span> Tel： </span>(239) 555-0108</p>
        <p class="p_clear"><span> Email： </span>beimahaitao@gmail.com</p>
        <p class="p_clear"><span> Address： </span>4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p class="p_left"><span> City： </span>Portland</p>
        <p class="p_left"><span> State/Prov： </span>Oregon</p>
        <p class="p_left"><span> Country： </span>Portland</p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.account_wrap {
  width: 750px;
  margin-bottom: 30px;
}
.account_wrap_left {
  float: left;
  margin-left:40px;
}
.account_wrap_left:nth-of-type(2n){
    margin-left:0;
}

.account_h3 {
  width: 750px;
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  color: #4f4f4f;
  font-weight: bold;
}
.account_content {
  width: 750px;
  height: 300px;
  background: #fff;
}
.account_content2{
    height: 400px;
}
.account_h4 {
  padding: 0 20px;
  background: #e2e2e2;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
  color: #4f4f4f;
}
.default_h4{
    color:#EB5757;
}
.account_content p {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: normal;
  color: #4f4f4f;
  padding-left: 20px;
 
}
.account_content .p_left{
    width:50%;
    float: left;
    box-sizing: border-box;
}
.account_content .p_clear{
    clear: both;
}
.account_content span {
  font-weight: bold;
  width: 120px;
  margin-right: 20px;
  display: inline-block;
}
.account_content .el-button {
  border: 0;
  padding: 0;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 18px;
  color: #eb5757;
}
.add_img {
  float: right;
  width: 22px;
  height: 22px;
  margin-top: 24px;
  margin-right: 20px;
}
</style>
