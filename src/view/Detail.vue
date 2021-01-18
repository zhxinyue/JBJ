<template>
  <div id="detail">
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
      <!-- 查看图片 -->
      <div class="detail_main">
        <div class="left_wrap">
          <div class="left_img_wrap">
            <img src="../assets/img/img4.png" alt="" class="left_big_img" />
          </div>
          <div class="left_img_wrap2">
            <img src="../assets/img/img5.png" alt="" class="left_min_img" />
            <img
              src="../assets/img/img5.png"
              alt=""
              class="left_min_img active"
            />
            <img src="../assets/img/img5.png" alt="" class="left_min_img" />
            <img src="../assets/img/img5.png" alt="" class="left_min_img" />
            <img src="../assets/img/img5.png" alt="" class="left_min_img" />
            <img src="../assets/img/img5.png" alt="" class="left_min_img" />
          </div>
        </div>
        <div class="center_wrap">
          <h3 class="detail_h3">
            JiaBinjiWomen'sClearPumpsPointedToeTransparent
            HighHeelsWeddingShoesForWomenStilettoHeels
          </h3>
          <div class="price_div">
            Price: <span class="current_price">$50.00</span
            ><span class="original_price">$50.00</span>
          </div>
          <div class="size_div">
            <h3 class="size_h3">Size:</h3>
            <!-- 选择尺寸 -->
            <el-select v-model="value" placeholder="Please Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 选择颜色 -->
          <div class="color_div">
            <h3 class="size_h3">Color: <span class="color_span">red</span></h3>
            <div class="color_wrap clearfix">
              <img
                src="../assets/img/img5.png"
                alt=""
                class="color_img"
                v-for="item in 44"
                :key="item"
              />
            </div>
            <el-button>Customization Service</el-button>
          </div>
          <!-- 加入购物车 -->
          <div class="cart_div">
            <el-input-number
              v-model="num"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
            <img src="../assets/img/xin.png" alt="" class="xin_img" />
            <el-button>Add to Cart</el-button>
          </div>
          <!-- 购买 -->
          <el-button class="buy_btn">Buy Now</el-button>
        </div>
        <div class="right_wrap">
          <div class="right_content">
            <img src="../assets/img/icon2.png" alt="" class="icon_img" />
            <div class="right_con_div">
              <h5>SHIPPING</h5>
              <span>Via DHL 5-7 DAY Arrived</span>
            </div>
          </div>
          <div class="right_content">
            <img src="../assets/img/icon2.png" alt="" class="icon_img" />
            <div class="right_con_div">
              <h5>MONEY BACKGUARANTEE</h5>
              <span>money back guarantee.</span>
            </div>
          </div>

          <!-- 轮播图 -->
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../assets/img/banner1.png" alt="" class="data_img" />
        </el-carousel-item>
      </el-carousel>

        </div>
      </div>
      <!-- 更多推荐 -->
      <div class="recommend_div">
        <h2 class="recommend_h2">More Recommend</h2>
        <div class="recommend_wrap">
          <div class="recommend_pro" v-for="item in 6" :key="item">
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
      <!-- 产品信息 -->
      <div class="product_detail">
        <h2 class="recommend_h2">Product details</h2>
        <p>Item SKU: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Brand Name: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Outer Material type: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Sole Material: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Heel Type: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Department Name: <span>JBJ10TMBB201222PLBLK5</span></p>
        <p>Weight: <span>JBJ10TMBB201222PLBLK5</span></p>
      </div>
      <!-- 产品描述 -->
      <div class="product_dec_wrap">
        <div class="dec_type">
          <p class="dec_type_p active">Description</p>
          <p class="dec_type_p">Size Chart</p>
          <p class="dec_type_p">Reviews</p>
        </div>
        <div class="dec_content">
          JiaBinjiWomen'sClearPumpsPointedToeTransparent
          HighHeelsWeddingShoesForWomenStilettoHeels
        </div>
        <div class="dec_img">
          <img src="../assets/img/img4.png" alt="" class="data_img" />
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
      num: 1,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(value) {
      console.log(value);
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
.detail_main {
  height: 710px;
}
.left_wrap {
  width: 600px;
  height: 710px;
  float: left;
}
.left_img_wrap {
  width: 600px;
  height: 600px;
  margin-bottom: 30px;
}
.left_big_img {
  width: 600px;
  height: 600px;
}
.left_img_wrap2 {
  width: 600px;
  height: 80px;
}
.left_min_img {
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 24px;
  box-sizing: border-box;
}
.left_min_img:nth-last-of-type(1) {
  margin-right: 0;
}
.left_min_img.active {
  border: 2px solid #ff2900;
}
.center_wrap {
  width: 580px;
  height: 710px;
  float: left;
  margin: 0 50px;
}
.detail_h3 {
  font-size: 24px;
  line-height: 32px;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  text-overflow: -o-ellipsis-lastline;
}
.price_div {
  font-size: 20px;
  margin: 25px 0;
}
.current_price {
  color: #ff2900;
  font-size: 24px;
  margin-right: 20px;
}
.original_price {
  font-size: 20px;
  color: #a0a0a7;
  text-decoration: line-through;
}
.size_h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.size_div .el-select {
  display: block;
  width: 100%;
  height: 32px;
  margin-bottom: 30px;
}
.size_div .el-input__inner {
  height: 32px;
  line-height: 32px;
  border: 1px solid #c4c4c4;
  text-align: center;
}

.color_span {
  font-size: 18px;
  color: #a0a0a7;
}
.color_wrap {
  width: 100%;
  height: 275px;
  margin-top: 10px;
}
.color_img {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  margin-bottom: 15px;
  cursor: pointer;
}
.color_img:nth-of-type(10n) {
  margin-right: 0;
}
.color_div .el-button {
  width: 280px;
  height: 40px;
  background: #bdbdbd;
  font-size: 18px;
  color: #000;
  border: 0;
}
.cart_div {
  width: 100%;
  height: 40px;
  margin: 15px 0 20px;
}
.cart_div .el-input-number {
  width: 80px;
  height: 40px;
}
.cart_div .el-input-number__decrease,
.cart_div .el-input-number__increase {
  width: 30px;
  height: 20px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}
.cart_div .el-input-number.is-controls-right .el-input-number__decrease {
  border-right: 1px solid #dcdfe6;
}

.cart_div .el-input-number .el-input__inner {
  padding: 0;
  width: 50px;
  text-align: center;
  color: #ff2900;
}
.xin_img {
  width: 30px;
  height: 25px;
  margin-left: 10px;
}
.cart_div .el-button {
  width: 440px;
  height: 40px;
  background: #eb5757;
  border: 0;
  font-size: 18px;
  color: #fff;
  float: right;
}
.buy_btn.el-button {
  width: 580px;
  height: 50px;
  background: #ffc44d;
  font-size: 20px;
  color: #2d9cdb;
}
.right_wrap {
  width: 520px;
  height: 710px;
  float: right;
  position: relative;
}
.right_content {
  width: 520px;
  height: 56px;
  margin-bottom: 30px;
}
.icon_img {
  width: 56px;
  height: 56px;
  float: left;
  margin-right: 15px;
}
.right_con_div {
  float: left;
}
.right_con_div h5 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}
.right_con_div span {
  font-size: 18px;
}
.right_wrap .el-carousel{
position: absolute;
bottom:0;
left:0;
width:100%;

}
.recommend_div {
  border-top: 1px solid #f3f2f2;
  border-bottom: 1px solid #f3f2f2;
  height: 510px;
  margin-top: 55px;
}
.recommend_h2 {
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  color: #4f4f4f;
}
.recommend_wrap {
  width: 1720px;
  height: 400px;
  margin: 0 auto;
}
.recommend_pro {
  float: left;
  width: 250px;
  height: 400px;
  margin-right: 44px;
  border: 1px solid #88c6c6;
  box-shadow: 0px 6px 5px rgba(165, 218, 218, 0.46);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 25px 0;
}
.recommend_pro:nth-of-type(6n) {
  margin-right: 0;
}
.rec_img {
  width: 200px;
  height: 200px;
}
.recommend_pro .minimg_wrap {
  width: 100%;
  height: 30px;
  margin: 20px 0;
}
.recommend_pro .data_min_img {
  width: 30px;
  height: 30px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
.recommend_pro .data_min_img:nth-of-type(5n) {
  margin-right: 0;
}
.recommend_pro .data_min_img.active {
  border: 4px solid #ff2900;
}
.recommend_pro .data_money {
  width: 100%;
  height: 30px;
  vertical-align: bottom;
}
.recommend_pro .present_price {
  font-size: 24px;
  color: #ff2900;
  margin-right: 20px;
}
.recommend_pro .original_price {
  font-size: 20px;
  color: #a0a0a7;
  text-decoration: line-through;
}
.recommend_pro .data_dec {
  width: 100%;
  height: 40px;
  line-height: 20px;
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
.product_detail {
  background: #fffdfd;
  margin-bottom: 20px;
}
.product_detail p {
  padding-left: 25px;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}
.product_detail span {
  font-size: 18px;
  font-weight: normal;
}
.product_dec_wrap {
  border: 1px solid #cfcece;
  box-sizing: border-box;
}
.dec_type {
  height: 45px;
}
.dec_type_p {
  width: 145px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-right: 2px;
  background: #ffe4e4;
  color: #eb5757;
  font-size: 22px;
  box-sizing: border-box;
  float: left;
}
.dec_type_p.active {
  background: #fffdfd;
  font-weight: bold;
  border-top: 3px solid #eb5757;
}
.dec_content {
  width: 780px;
  margin: 70px auto;
  text-align: center;
  font-size: 24px;
}
.dec_img {
  width: 1200px;
  height: 1200px;
  margin: 50px auto;
}
</style>