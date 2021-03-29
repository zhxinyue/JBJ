<template>
  <div id="index">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <!-- 首页内容 -->
    <div class="content_wrap">
      <!-- 轮播图 -->
      <el-carousel height="725px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../assets/img/banner1.png" alt="" class="data_img" />
        </el-carousel-item>
      </el-carousel>
      <!-- 推荐产品 -->
      <div class="recommend_wrap">
        <div class="left_product">
          <img src="../assets/img/img1.png" alt="" class="data_img" />
        </div>
        <div class="right_product">
          <img src="../assets/img/img2.png" alt="" class="img_pro_class1" />
          <img
            src="../assets/img/img2.png"
            alt=""
            class="img_pro_class img_pro_class2"
          />
          <img
            src="../assets/img/img2.png"
            alt=""
            class="img_pro_class img_pro_class2"
          />
        </div>
      </div>
      <!-- 产品分类 -->
      <div class="sort_wrap">
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
        <img src="../assets/img/img3.png" alt="" class="img_sort" />
      </div>
      <!-- 筛选产品 -->
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        class="checkpro_tabs"
      >
        <el-tab-pane label="HotSale" name="first"></el-tab-pane>
        <el-tab-pane label="Classic" name="second"></el-tab-pane>
        <el-tab-pane label="NewDesign" name="third"></el-tab-pane>
      </el-tabs>
      <!-- 产品列表 -->
      <div class="data_wrap clearfix">
        <div class="data_content" v-for="item in 12" :key="item">
          <div class="img_wrap">
            <img src="../assets/img/img4.png" alt="" class="data_img" />
          </div>
          <div class="minimg_wrap">
            <img src="../assets/img/img5.png" alt="" class="data_min_img" />
            <img
              src="../assets/img/img5.png"
              alt=""
              class="data_min_img active"
            />
            <img src="../assets/img/img5.png" alt="" class="data_min_img" />
            <img src="../assets/img/img5.png" alt="" class="data_min_img" />
            <img src="../assets/img/img5.png" alt="" class="data_min_img" />
            <img src="../assets/img/img5.png" alt="" class="data_min_img" />
          </div>
          <div class="data_money">
            <span class="present_price">$50.00</span>
            <span class="original_price">$80.00</span>
          </div>
          <div class="data_dec">
            JiaBinji Women's Clear Pumps Pointed Toe Transparent High Heels
            Wedding Shoes For Women
          </div>
        </div>
      </div>
      <!-- 查看更多 -->
      <div class="more_wrap">SeeMore>></div>
    </div>
    <!-- 公共底部 -->
    <footer-wrap></footer-wrap>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Index",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  created(){
  },
  
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
   
  },
  mounted() {
    // 存cookie guid
    //  if (this.$cookies.get("guid") == null) {
    //             this.$cookies.set("guid", this.NewGuid(),'30d')
    //             this.$router.push({path:'/'})
    //         }
  // 获取banner
this.$api.GetBanner({  
		ReqFunc:"GetBanner",
		ReqCode:''
	}).then(res => console.log(res)).catch(err => console.log(err))



  }
};
</script>
<style>
.recommend_wrap {
  width: 100%;
  height: 740px;
  margin: 30px 0;
}
.left_product {
  float: left;
  width: 895px;
  height: 740px;
}
.right_product {
  float: right;
  width: 890px;
  height: 740px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img_pro_class {
  width: 430px;
  height: 360px;
}
.img_pro_class1 {
  width: 890px;
  height: 360px;
}

.img_pro_class2 {
  margin-top: 20px;
}
.sort_wrap {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
}
.img_sort {
  width: 120px;
  height: 120px;
}
.checkpro_tabs .el-tabs__item.is-active {
  color: #000;
  font-weight: bold;
}
.checkpro_tabs .el-tabs__item {
  font-size: 30px;
  height: 80px;
  line-height: 110px;
}
.checkpro_tabs .el-tabs__active-bar {
  height: 5px;
  background-color: #eb5757;
}
.checkpro_tabs .el-tabs__nav-wrap::after {
  background-color: #fff;
}
.checkpro_tabs .el-tabs__header {
  margin: 0 0 30px;
}
.data_wrap {
  width: 100%;
  height: auto;
}
.data_content {
  width: 400px;
  height: 540px;
  float: left;
  margin-right: 70px;
  margin-bottom: 10px;
}
.data_content:nth-of-type(4n) {
  margin-right: 0;
}
.img_wrap {
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
  padding: 75px;
}

.minimg_wrap {
  width: 100%;
  height: 40px;
  margin: 10px 0;
}
.data_min_img {
  width: 40px;
  height: 40px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
.data_min_img.active {
  border: 4px solid #ff2900;
}
.data_money {
  width: 100%;
  height: 30px;
  vertical-align: bottom;
}
.present_price {
  font-size: 24px;
  color: #ff2900;
  margin-right: 20px;
}
.original_price {
  font-size: 20px;
  color: #a0a0a7;
  text-decoration: line-through;
}
.data_dec {
  width: 100%;
  height: 40px;
  line-height: 20px;
  font-size: 16px;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.more_wrap {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #f3f3f3;
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 100px;
  cursor: pointer;
}
</style>