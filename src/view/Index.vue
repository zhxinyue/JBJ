<template>
  <div id="index">
    <!-- 公共头部 -->
    <header-wrap></header-wrap>
    <!-- 首页内容 -->
    <div class="content_wrap">
      <!-- 轮播图 -->
      <el-carousel height="725px">
        <el-carousel-item
          v-for="(item, index) in bannerList.slice(0, 4)"
          :key="index"
        >
          <img
            src="../assets/img/banner1.png"
            alt=""
            class="data_img"
            @click="goDetail(item.banner_part_code)"
          />
        </el-carousel-item>
      </el-carousel>
      <!-- 推荐产品 -->
      <div class="recommend_wrap">
        <div class="left_product">
          <img
            src="../assets/img/img1.png"
            alt=""
            class="data_img"
            @click="goDetail(bannerList[4].banner_part_code)"
          />
        </div>
        <div class="right_product">
          <img
            src="../assets/img/img2.png"
            alt=""
            class="img_pro_class1"
            @click="goDetail(bannerList[5].banner_part_code)"
          />
          <img
            src="../assets/img/img2.png"
            alt=""
            class="img_pro_class img_pro_class2"
            @click="goDetail(bannerList[6].banner_part_code)"
          />
          <img
            src="../assets/img/img2.png"
            alt=""
            class="img_pro_class img_pro_class2"
            @click="goDetail(bannerList[7].banner_part_code)"
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
        <el-tab-pane label="HotSale" name="HotSale"></el-tab-pane>
        <el-tab-pane label="Classic" name="Classic"></el-tab-pane>
        <el-tab-pane label="NewDesign" name="NewDesign"></el-tab-pane>
      </el-tabs>
      <!-- 产品列表 -->
      <div class="data_wrap clearfix">
        <div class="data_content" v-for="(item,index) in subjectList" :key="index">
          <div class="img_wrap" @click="goDetail(item.subsku[currentIdx].subsku_guid)" >
            <img :src="item.subsku[currentIdx].pic_url" alt="" class="data_img" />
          </div>
          <div class="minimg_wrap" v-for="(itm,idx) in item.subsku" :key="idx">
            <img :src="itm.pic_url" alt="" :class="[currentIdx==idx?'active':'','data_min_img']" @click="changeImg(idx)" />
          </div>
          <div class="data_money">
            <span class="present_price">${{item.subsku[currentIdx].realprice}}</span>
            <span class="original_price">${{item.subsku[currentIdx].disprice}}</span>
          </div>
          <div class="data_dec">
            {{item.sku_name}}
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
      activeName: "Classic",
      bannerList: [],
      subjectList: [],
      currentIdx:0,
      currentImg:''
    };
  },
  created() {
    this.getSubData();
    // 获取banner
    this.$api
      .GetBanner({
        ReqFunc: "GetBanner",
        ReqCode: "",
      })
      .then((res) => {
        if (res.length > 0) {
          this.bannerList = res;
        }
      })
      .catch((err) => console.log(err));
      if(!this.Plugins.getItem("ReqGuid")){
      this.Plugins.setItem("ReqGuid",this.Plugins.NewGuid())

      }
  },

  methods: {
    handleClick(tab, event) {
      this.getSubData();
    },
    // 专题点击小图
  changeImg(e){
this.currentIdx = e
  },
    // 获取专题
    getSubData() {
      this.$api
        .GetSubject({
        ReqFunc:"GetSubjectSku",
		SubjectCode:this.activeName,	//为空时代表全部
		MoneyCode:'GBP',	//货币
		RandomNo:'31',		//4位以下随机数
		ReqPage:'1',
		ReqStep:'25',
		style:'pump',		//可不写
		heel:'10'	,			//可不写
		color:'Brown-Nude Liner',			//可不写
		size:'5',			//可不写
		materia:'Suede'		//可不写
        })
        .then((res) => {
          if (res.length > 0) {
            this.subjectList = res;
          }
        })
        .catch((err) => console.log(err));
    },
    // 进入详情
    goDetail(code) {
      console.log(code);
      this.Plugins.setItem("subject_guid", code);
      this.$router.push({ path: "/detail" });
    },
  },
  mounted() {},
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