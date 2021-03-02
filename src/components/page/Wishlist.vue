<template>
  <div class="order">
    <!-- 筛选订单 -->
    <el-tabs v-model="activeName" class="checkord_tabs">
      <el-tab-pane label="Cart" name="0"></el-tab-pane>
      <el-tab-pane label="Love" name="1"></el-tab-pane>
    </el-tabs>
    <!-- 订单表格 -->
    <!-- 表头 -->
    <div v-if="activeName==0">

    <div class="table_title">
      <span class="sp1">Product</span>
      <span class="sp2">Order NO.</span>
      <span class="sp3">Price</span>
      <span class="sp3 sp4">Count</span>
      <span class="sp5">Total Fee</span>
      <span class="sp6">Order Status</span>
      <span class="sp6 sp7">Manage</span>
    </div>
    <div class="table_list">
      <div class="table_wrap">
        <div class="table_top">
          <el-checkbox label=""></el-checkbox>
          <span class="table_date">2021-01-10</span>
          <img src="../../assets/img/delete.png" alt="" class="del_img" />
          <span>Item SKU: JBJ10TMBB201222PLBLK5</span>

          <img src="../../assets/img/xin.png" alt="" class="xin_img" />
        </div>
        <div class="table_content">
          <img src="../../assets/img/img4.png" alt="" class="table_img" />
          <div class="order_content">
            <h4 class="order_title">
              JiaBinji Women's Clear Pumps Pointed Toe Transparent
            </h4>
            <div class="order_img_div">
              <img
                src="../../assets/img/img4.png"
                alt=""
                class="order_min_img"
                v-for="item in 5"
                :key="item"
              />
            </div>
          </div>
          <div class="order_price">$50.00</div>
          <div class="order_price order_count">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="100"
              :step="1"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="order_fee">
            <p>$ 110.00</p>
            <span>(Shipping Fee : $ 10.00)</span>
          </div>
          <div class="order_price order_status">Unshipped</div>
          <div class="order_msg">
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <div class="table_wrap">
        <div class="table_top">
          <el-checkbox label=""></el-checkbox>
          <span class="table_date">2021-01-10</span>
          <img src="../../assets/img/delete.png" alt="" class="del_img" />
          <span>Item SKU: JBJ10TMBB201222PLBLK5</span>

          <img src="../../assets/img/xin2.png" alt="" class="xin_img" />
        </div>
        <div class="table_content">
          <img src="../../assets/img/img4.png" alt="" class="table_img" />
          <div class="order_content">
            <h4 class="order_title">
              JiaBinji Women's Clear Pumps Pointed Toe Transparent
            </h4>
            <div class="order_img_div">
              <img
                src="../../assets/img/img4.png"
                alt=""
                class="order_min_img"
                v-for="item in 5"
                :key="item"
              />
            </div>
          </div>
          <div class="order_price">$50.00</div>
          <div class="order_price order_count">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="100"
              :step="1"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="order_fee">
            <p>$ 110.00</p>
            <span>(Shipping Fee : $ 10.00)</span>
          </div>
          <div class="order_price order_status">Unshipped</div>
          <div class="order_msg">
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <div class="table_wrap">
        <div class="table_top">
          <el-checkbox label=""></el-checkbox>
          <span class="table_date">2021-01-10</span>
          <img src="../../assets/img/delete.png" alt="" class="del_img" />
          <span>Item SKU: JBJ10TMBB201222PLBLK5</span>

          <img src="../../assets/img/xin.png" alt="" class="xin_img" />
        </div>
        <div class="table_content">
          <img src="../../assets/img/img4.png" alt="" class="table_img" />
          <div class="order_content">
            <h4 class="order_title">
              JiaBinji Women's Clear Pumps Pointed Toe Transparent
            </h4>
            <div class="order_img_div">
              <img
                src="../../assets/img/img4.png"
                alt=""
                class="order_min_img"
                v-for="item in 5"
                :key="item"
              />
            </div>
          </div>
          <div class="order_price">$50.00</div>
          <div class="order_price order_count">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="100"
              :step="1"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="order_fee">
            <p>$ 110.00</p>
            <span>(Shipping Fee : $ 10.00)</span>
          </div>
          <div class="order_price order_status">Unshipped</div>
          <div class="order_msg">
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <div class="table_wrap table_wrap_dis">
        <div class="table_top">
          <el-checkbox label="" :disabled="true"></el-checkbox>
          <span class="table_date">2021-01-10</span>
          <img src="../../assets/img/delete.png" alt="" class="del_img" />
          <span>Item SKU: JBJ10TMBB201222PLBLK5</span>

          <img src="../../assets/img/sx.png" alt="" class="sx_img" />
        </div>
        <div class="table_content">
          <img src="../../assets/img/img4.png" alt="" class="table_img" />
          <div class="order_content">
            <h4 class="order_title">
              JiaBinji Women's Clear Pumps Pointed Toe Transparent
            </h4>
            <div class="order_img_div">
              <img
                src="../../assets/img/img4.png"
                alt=""
                class="order_min_img"
                v-for="item in 5"
                :key="item"
              />
            </div>
          </div>
          <div class="order_price">$50.00</div>
          <div class="order_price order_count">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :disabled="true"
              :min="1"
              :max="100"
              :step="1"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="order_fee">
            <p>$ 110.00</p>
            <span>(Shipping Fee : $ 10.00)</span>
          </div>
          <div class="order_price order_status">Unshipped</div>
          <div class="order_msg">
            <p>Checkout</p>
          </div>
        </div>
      </div>
    </div>
    <div class="check_wrap">
      <el-checkbox></el-checkbox>
      <span class="label_span">Select All</span>
      <span class="label_span"
        >Already Selected <i class="check_num">3</i> Products</span
      >
      <span class="check_btn">Checkout</span>
      <span class="check_text"
        >Total Fee (with out shipping fee) :<i
          class="check_num"
          style="padding-left: 30px"
          >$ 200.00</i
        ></span
      >
    </div>
    </div>
    <div v-else>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "0",
      num: 1,
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style>
.checkord_tabs .el-tabs__item.is-active {
  color: #4f4f4f;
  font-weight: bold;
}
.checkord_tabs .el-tabs__item {
  font-size: 24px;
  height: 60px;
  line-height: 80px;
  color: #969697;
  padding: 0 50px;
}
.checkord_tabs .el-tabs__active-bar {
  height: 4px;
  background-color: #88c6c6;
}
.checkord_tabs .el-tabs__nav-wrap::after {
  background-color: #f2f2f2;
}
.checkord_tabs .el-tabs__header {
  margin: 0 0 30px;
}
.table_title {
  width: 1540px;
  height: 50px;
  line-height: 50px;
  background: #a5dada;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 20px;
  color: #4f4f4f;
  font-weight: bold;
  margin-bottom: 20px;
}
.table_title span {
  float: left;
}
.table_title .sp1 {
  width: 140px;
}
.table_title .sp2 {
  width: 300px;
}
.table_title .sp3 {
  width: 100px;
  text-align: center;
  margin-left: 60px;
}
.table_title .sp4 {
  margin-right: 70px;
}
.table_title .sp5 {
  width: 220px;
  margin-right: 20px;
}
.table_title .sp6 {
  width: 200px;
  text-align: center;
}
.table_title .sp7 {
  margin-left: 20px;
}
.table_wrap {
  width: 1540px;
  height: 210px;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 15px;
}
.table_top {
  height: 50px;
  line-height: 50px;
  background: #e2e2e2;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}
.select_img {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 15px;
}
.table_date {
  margin: 0 25px 0 10px;
}
.table_content {
  height: 160px;
  padding-left: 20px;
}
.table_img {
  width: 100px;
  height: 100px;
  margin-top: 30px;
  margin-right: 35px;
  float: left;
}
.order_content {
  float: left;
  width: 300px;
  height: 100px;
  margin-top: 30px;
}
.order_title {
  font-size: 16px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.order_img_div {
  width: 300px;
  height: 40px;
  display: flex;
  margin-top: 20px;
}
.order_min_img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}
.order_price {
  float: left;
  margin-left: 60px;
  width: 100px;
  height: 160px;
  text-align: center;
  line-height: 160px;
  font-size: 20px;
}
.order_count {
  margin-right: 70px;
}
.order_count .el-input {
  width: 80px;
}
.order_count .el-input-number {
  width: 80px;
}
.order_count .el-input-number .el-input__inner {
  padding: 0 20px;
  font-size: 20px;
  color: #eb5757;
}

.order_count .el-input-number__decrease,
.order_count .el-input-number__increase {
  width: 20px;
  background: #88c6c6;
  color: #fff;
  border: none;
}

.order_status {
  width: 200px;
  margin-left: 0px;
  margin-right: 30px;
}
.order_fee {
  float: left;
  width: 220px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #eb5757;
  font-size: 18px;
  margin-right: 20px;
}
.order_fee p {
  font-size: 20px;
  margin-bottom: 6px;
}
.order_msg {
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #eb5757;
  float: left;
}
.order_msg p {
  margin: 4px 0;
}
.score_div {
  float: right;
  width: 110px;
  height: 22px;
  margin-right: 110px;
  margin-top: 14px;
}
.star_img {
  width: 22px;
  height: 22px;
  float: left;
}
.delete_img {
  width: 20px;
  height: 20px;
  margin-left: 90px;
}
.order .el-pagination {
  margin-top: 150px;
  margin-bottom: 60px;
  text-align: center;
}
.order .el-pagination.is-background .btn-next,
.order .el-pagination.is-background .btn-prev,
.order .el-pagination.is-background .el-pager li {
  width: 30px;
  height: 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0;
}
.xin_img {
  float: right;
  width: 29px;
  height: 25px;
  margin-top: 12px;
  margin-right: 60px;
}
.del_img {
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 15px;
  margin-right: 50px;
}
.sx_img {
  float: right;
  width: 25px;
  height: 25px;
  margin-top: 12px;
  margin-right: 62px;
}
.table_wrap_dis,
.table_wrap_dis .order_fee,
.table_wrap_dis .order_msg {
  color: #c4c4c4 !important;
}
.table_wrap .el-checkbox__inner,
.check_wrap .el-checkbox__inner {
  width: 20px;
  height: 20px;
}
.check_wrap .el-checkbox__inner {
  margin-left: 30px;
}

.table_wrap .el-checkbox__inner::after,
.check_wrap .el-checkbox__inner::after {
  width: 6px;
  height: 10px;
  left: 5px;
}
.table_wrap .el-checkbox__input.is-checked .el-checkbox__inner,
.table_wrap .el-checkbox__input.is-indeterminate .el-checkbox__inner,
.check_wrap .el-checkbox__input.is-checked .el-checkbox__inner,
.check_wrap .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #88c6c6;
  border-color: #88c6c6;
}
.check_wrap {
  width: 100%;
  height: 60px;
  background: rgba(165, 218, 218, 0.46);
  color: #5d5d5f;
  font-size: 18px;
  line-height: 60px;
  font-weight: bold;
}
.label_span {
  margin-left: 5px;
  margin-right: 90px;
}
.check_num {
  color: #eb5757;
  font-style: normal;
}
.check_btn {
  width: 160px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: right;
  color: #fff;
  background: #ff2900;
}
.check_text {
  margin-right: 70px;
  float: right;
}
</style>

