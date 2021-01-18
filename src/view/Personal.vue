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
<!-- 侧边导航 -->
<sidebar-wrap></sidebar-wrap>

<div class="content" >
      <transition name="move" mode="out-in">
      <!--这里的router-view用来渲染子页面-->
      <router-view></router-view>  
      </transition>
    </div>


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
  border-top: 1px solid #f3f2f2;
  border-bottom: 1px solid #f3f2f2;
  background: #F2F2F2;
  padding: 0 55px;
}
.personal_content{
  width:100%;
  min-height:600px;
  background: #F2F2F2;
  position: relative;
}
.content{
  width:1540px;
  /* float: left; */
  position: absolute;
  left:320px;
  top:0;
  background: red;
}

</style>