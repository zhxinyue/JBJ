<template>
  <div id="personal">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
   
<!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>Home</el-breadcrumb-item>
        <el-breadcrumb-item>My account</el-breadcrumb-item>
      </el-breadcrumb>
       <!-- 个人中心内容 -->
   <div class="personal_content clearfix">
     <div class="content" >
      <router-view></router-view>  
    </div>
<!-- 侧边导航 -->
<sidebar-wrap></sidebar-wrap>




   </div>
    <!-- 公共底部 -->
    <footer-wrap></footer-wrap>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideMenu"
export default {
  name: "Personal",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
    "sidebar-wrap":SideBar
  },
  data() {
    return {
     
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style>

#personal .el-breadcrumb {
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  color: #5d5d5f;
  border-top: 1px solid #dfdddd;
  border-bottom: 1px solid #dfdddd;
  background: #F2F2F2;
  padding: 0 55px;
}
.personal_content{
  width:100%;
  min-height:1000px;
  background: #F2F2F2;
  padding-bottom:100px;
}
.content{
  width:1540px;
  float: right;
  margin-right:60px;
}

</style>