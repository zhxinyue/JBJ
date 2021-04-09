<template>
  <div id="special">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <!-- 详情页内容 -->
    <div class="content_wrap">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>Home</el-breadcrumb-item>
        <el-breadcrumb-item>HotSale</el-breadcrumb-item>
        <el-breadcrumb-item>JiaBinjiWomen'sClearPumps</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="clearfix">
        <div class="left_main">
          <div class="left_main_con">
            <h4 class="left_con_top">
              Shoes Type
              <img src="../assets/img/icon5.png" alt="" class="sel_right" />
            </h4>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
          </div>
          <div class="left_main_con">
            <h4 class="left_con_top">
              Outer_Material_Type
              <img src="../assets/img/icon5.png" alt="" class="sel_right" />
            </h4>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
          </div>
          <div class="left_main_con">
            <h4 class="left_con_top">
              Size
              <img src="../assets/img/icon5.png" alt="" class="sel_right" />
            </h4>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>

            <div class="left_con_div clearfix">
              <span class="sp1">Flat</span>
              <span class="sp2">pumps</span>
            </div>
          </div>
        </div>
        <div class="right_main">
          <div class="right_main_con">
            <img src="../assets/img/icon6.png" alt="" class="spe_img" />
            <p class="spe_dec">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <!-- <div class="select_div">
            Sort By
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ defalutMsg
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="Price">Price</el-dropdown-item>
                <el-dropdown-item command="New">New</el-dropdown-item>
                <el-dropdown-item command="Best Sellers"
                  >Best Sellers</el-dropdown-item
                >
                <el-dropdown-item command="Most Viewed"
                  >Most Viewed</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <img src="../assets/img/icon7.png" alt="" class="rise_img" />
          </div> -->
          <div>
          <div class="recommend_pro2" v-for="item in 15" :key="item">
            <img src="../assets/img/img4.png" alt="" class="rec_img" />
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
  name: "Special",
  components: {
    "header-wrap": Header,
    "footer-wrap": Footer,
  },
  data() {
    return {
      defalutMsg: "Price",
    };
  },
  methods: {
    handleCommand(command) {
      this.defalutMsg = command;
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
}
.left_main {
  width: 440px;
  float: left;
}
.left_main_con {
  width: 440px;
  height: 380px;
  background: #f9f9f9;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}
.left_con_top {
  height: 50px;
  background: #e2e2e2;
  padding: 0 20px;
  line-height: 50px;
  margin-bottom: 20px;
}
.sel_right {
  float: right;
  width: 20px;
  height: 10px;
  margin-top: 20px;
}
.left_con_div {
  height: 50px;
  line-height: 50px;
  color: #969697;
  padding: 0 20px;
}
.left_con_div .sp1 {
  float: left;
}
.left_con_div .sp2 {
  float: right;
}
.right_main {
  width: 1340px;
  float: right;
}
.right_main_con {
  width: 1340px;
  height: 1020px;
  box-sizing: border-box;
  border: 1px solid #88c6c6;
  padding: 60px 62px 0;
}
.spe_img {
  width: 1216px;
  height: 810px;
}
.spe_dec {
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  left: 30px;
  margin-top: 40px;
  word-wrap: break-word;
}
.select_div {
  height: 70px;
  color: #5d5d5f;
  font-size: 16px;
  line-height: 70px;
}
.select_div .el-dropdown {
  color: #5d5d5f;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 5px;
}
.select_div .el-dropdown .el-dropdown-link {
  display: inline-block;
  width: 140px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 2px;
  padding-left: 15px;
}
.select_div .el-dropdown .el-icon--right {
  float: right;
  margin-right: 8px;
  margin-top: 6px;
}
.rise_img {
  width: 10px;
  height: 12px;
  display: inline-block;
}
.recommend_pro2 {
  float: left;
  width: 250px;
  height: 400px;
  margin-right: 22px;
  border: 1px solid #88c6c6;
  box-shadow: 0px 6px 5px rgba(165, 218, 218, 0.46);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 25px 0;
  margin-bottom:20px;
}
.recommend_pro2:nth-of-type(5n) {
  margin-right: 0;
}
.right_main .rec_img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
.recommend_pro2 .minimg_wrap {
  width: 100%;
  height: 30px;
  margin: 20px 0;
}
.recommend_pro2 .data_min_img {
  width: 30px;
  height: 30px;
  float: left;
  margin-right: 8px;
  box-sizing: border-box;
}
.recommend_pro2 .data_min_img:nth-of-type(6n) {
  margin-right: 0;
}
.recommend_pro2 .data_min_img.active {
  border: 4px solid #ff2900;
}
.recommend_pro2 .data_money {
  width: 100%;
  height: 30px;
  vertical-align: bottom;
}
.recommend_pro2 .present_price {
  font-size: 24px;
  color: #ff2900;
  margin-right: 20px;
}
.recommend_pro2 .original_price {
  font-size: 20px;
  color: #a0a0a7;
  text-decoration: line-through;
}
.recommend_pro2 .data_dec {
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
  margin-top: 20px;
}
</style>