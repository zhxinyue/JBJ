<template>
  <div id="detail">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <!-- 详情页内容 -->
    <div class="detail_content">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>Home</el-breadcrumb-item>
  <el-breadcrumb-item>HotSale</el-breadcrumb-item>
  <el-breadcrumb-item>JiaBinjiWomen'sClearPumps</el-breadcrumb-item>
</el-breadcrumb>
<!-- 查看图片 -->
<div class="detail_main">
<div class="left_wrap">
     <div class="left_img_wrap">
          <img src="../assets/img/img4.png" alt="" class="left_big_img">
     </div>
     <div class="left_img_wrap2">
<img src="../assets/img/img5.png" alt="" class="left_min_img">
<img src="../assets/img/img5.png" alt="" class="left_min_img active">
<img src="../assets/img/img5.png" alt="" class="left_min_img">
<img src="../assets/img/img5.png" alt="" class="left_min_img">
<img src="../assets/img/img5.png" alt="" class="left_min_img">
<img src="../assets/img/img5.png" alt="" class="left_min_img">
     </div>
</div>
<div class="center_wrap">
<h3 class="detail_h3">JiaBinjiWomen'sClearPumpsPointedToeTransparent HighHeelsWeddingShoesForWomenStilettoHeels </h3>
<div class="price_div">
Price: <span class="current_price">$50.00</span><span class="original_price">$50.00</span>
</div>
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
  name: "Detail",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
  },
  data() {
    return {
      activeName: "first",
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
.detail_content {
  padding: 0 55px;
}
.detail_content .el-breadcrumb{
    height:54px;
    line-height: 54px;
    font-size: 14px;
    color:#5D5D5F;
}
.detail_main{
    height:710px;
}
.left_wrap{
    width:600px;
    height:710px;
    float: left;
}
.left_img_wrap{
    width:600px;
    height:600px;
    margin-bottom: 30px;
}
.left_big_img{
    width:600px;
    height:600px;
}
.left_img_wrap2{
width:600px;
    height:80px;

}
.left_min_img{
    width:80px;
    height:80px;
    float: left;
    margin-right:24px;
    box-sizing: border-box;
}
.left_min_img:nth-last-of-type(1){
    margin-right:0;
}
.left_min_img.active{
    border:2px solid #FF2900;
}
.center_wrap{
    width:580px;
    height:710px;
    float: left;
    margin: 0 50px;
}
.detail_h3{
    font-size: 24px;
    line-height: 32px;
    word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  text-overflow: -o-ellipsis-lastline;
}
.price_div{
font-size: 20px;
margin: 25px 0;
}
.current_price{
    color:#FF2900;
    font-size: 24px;
    margin-right: 20px;
}
.original_price{
    font-size: 20px;
  color: #a0a0a7;
  text-decoration: line-through;
}
</style>