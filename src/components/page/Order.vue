<template>
  <div class="order">
     <!-- 筛选订单 -->
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        class="checkord_tabs"
      >
        <el-tab-pane label="All Orders" name="first"></el-tab-pane>
        <el-tab-pane label="Common Orders" name="second"></el-tab-pane>
        <el-tab-pane label="Customization Orders" name="third"></el-tab-pane>
        <el-tab-pane label="History Orders" name="fourth"></el-tab-pane>
      </el-tabs>
<!-- 订单表格 -->
     <!-- 表头 -->
<div class=""></div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
         activeName: "first",
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    };
  },
   methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
};
</script>
<style>
.checkord_tabs .el-tabs__item.is-active {
  color: #4F4F4F;
  font-weight: bold;
}
.checkord_tabs .el-tabs__item {
  font-size: 24px;
  height: 60px;
  line-height: 80px;
  color:#969697;
  padding:0 50px;
}
.checkord_tabs .el-tabs__active-bar {
  height: 4px;
  background-color: #88C6C6;
}
.checkord_tabs .el-tabs__nav-wrap::after {
  background-color: #F2F2F2;
}
.checkord_tabs .el-tabs__header {
  margin: 0 0 30px;
}

</style>
