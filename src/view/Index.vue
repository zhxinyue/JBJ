<template>
<div id="index">
<!-- 公共头部 -->
<header-wrap></header-wrap>
<!-- 首页内容 -->
<div class="index_content">
<!-- 轮播图 -->
<el-carousel height="725px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/img/banner1.png" alt="" class="img_class">
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐产品 -->
    <div class="recommend_wrap">
<div class="left_product">
<img src="../assets/img/img1.png" alt="" class="img_class">
</div>
<div class="right_product">
<img src="../assets/img/img2.png" alt="" class="img_pro_class">
<img src="../assets/img/img2.png" alt="" class="img_pro_class">
<img src="../assets/img/img2.png" alt="" class="img_pro_class img_pro_class2">
<img src="../assets/img/img2.png" alt="" class="img_pro_class img_pro_class2">
</div>

    </div>
    <!-- 产品分类 -->
    <div class="sort_wrap">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
<img src="../assets/img/img3.png" alt="" class="img_sort">
    </div>
</div>
</div>
</template>
<script>
import Header from '../components/Header'
export default {
    name:'Index',
    components:{
     'header-wrap':Header
    }
}
</script>
<style>
.index_content{
    padding: 0 55px;
}
 

  .img_class{
      width:100%;
      height:100%;
  }
  .recommend_wrap{
      width:100%;
height:740px;
margin: 30px 0;
  }
  .left_product{
      float: left;
      width:895px;
      height:740px;
  }
  .right_product{
      float: right;
      width:890px;
      height:740px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
  .img_pro_class{
      width:430px;
      height:360px;
  }
  .img_pro_class2{
      margin-top:20px;
  }
  .sort_wrap{
      width:100%;
      height:120px;
      display: flex;
      justify-content: space-between;
  }
  .img_sort{
      width:120px;
      height:120px;
  }
</style>