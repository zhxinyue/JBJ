<template>
  <div id="index">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <!-- 个人中心内容 -->
   <div class="content_wrap">
<!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>Home</el-breadcrumb-item>
        <el-breadcrumb-item>My account</el-breadcrumb-item>
      </el-breadcrumb>
   </div>
    <!-- 公共底部 -->
    <footer-wrap></footer-wrap>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Personal",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
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

.content_wrap .el-breadcrumb {
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  color: #5d5d5f;
  border-top: 1px solid #f3f2f2;
  border-bottom: 1px solid #f3f2f2;
}
</style>