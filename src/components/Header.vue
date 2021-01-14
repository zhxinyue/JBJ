<template>
  <div id="header">
    <div class="header_bg"></div>
    <div class="header_content">
      <div class="logo_wrap">
        <img src="../assets/img/JBJ.png" alt="logo" class="logo_img" />
        <img src="../assets/img/JBJ.png" alt="logo" class="logo_img1" />
      </div>

      <!-- 未登录 -->
      <el-button class="login_btn">LOG IN</el-button>
      <!-- 搜索 -->
      <div class="search_wrap">
        <input type="text" name="" id="" class="search_ipt" />
        <img src="" alt="" class="search_img" />
      </div>
      <!-- 导航 -->
      <div class="nav_wrap">
        <el-dropdown>
          <span class="el-dropdown-link dropdown_active"> HOME </span>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            SHOES<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            SHOPBY<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.header_bg {
  width: 100%;
  height: 50px;
  background: #88c6c6;
}
.header_content {
  width: 100%;
  height: 120px;
  padding: 0 55px;
  box-sizing: border-box;
}
.logo_wrap {
  float: left;
  width: 200px;
  height: 120px;
}
.logo_img {
  float: left;
  width: 90px;
  height: 70px;
  margin-top: 25px;
  margin-right: 20px;
}
.logo_img1 {
  float: left;
  width: 90px;
  height: 70px;
  margin-top: 25px;
}
.header_content .login_btn {
  float: right;
  font-size: 30px;
  height: 34px;
  line-height: 34px;
  margin-top: 50px;
  padding: 0;
  color: #000;
  border: 0;
  background: none;
  margin-left: 80px;
}
.search_wrap {
  float: right;
  width: 390px;
  height: 34px;
  margin-top: 50px;
  position: relative;
}
.search_ipt {
  width: 390px;
  height: 34px;
  position: absolute;
  left: 0;
  top: 0;
  background: #f3f3f3;
  border-radius: 100px;
  border: 0;
}
.search_img {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 5px;
}
.nav_wrap {
  float: right;
  margin-top: 43px;
  height: 40px;
  background: none;
}
.el-dropdown {
  color: #000;
  font-size: 30px;
  margin-right: 80px;
}
.dropdown_active {
  font-weight: bold;
  border-bottom: 5px solid #88c6c6;
  padding-bottom: 3px;
}

.menu_wrap.el-menu--horizontal {
  border: 0;
}
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu {
  height: 40px;
  line-height: 34px;
  font-size: 30px;
  padding: 0;
  margin-right: 70px;
  border: none;
  vertical-align: inherit;
}
.el-menu--horizontal .el-submenu__title {
  font-size: 30px;
  padding: 0;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 34px;
  line-height: 34px;
  font-size: 30px;
  border: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  font-weight: bold;
  border-bottom: 5px solid #88c6c6;
  /* padding-bottom:10px; */
  color: #000;
  line-height: 34px;
}
</style>