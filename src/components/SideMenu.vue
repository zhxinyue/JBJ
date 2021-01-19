<template>
 <div class="sidebar">
   <img src="../assets/img/icon3.png" alt="" class="personal_icon_img">
   <h2 class="personal_name">NAME</h2>
      <el-menu class="sidebar-el-menu" default-active="1" :collapse="collapse" unique-opened router
             collapse-transition text-color="#4F4F4F">
      <template v-for="item in items" >
          <el-menu-item :index="item.url" :key="item.url">
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
      </template>
    </el-menu>


 </div>
</template>

<script>
 export default {
  data() {
   return {
    collapse: false,
    disabled: false,
    items: [
        {name: "My Account", url: "/personal", subset: []},
        {name: "My Order", url: "/order", subset: []},
        {name: "Wishlist", url: "/wishlist", subset: []},
        {name: "RMA", url: "/rma", subset: []}
        ]
   }
  },
  computed: {
    onRoutes() {
        //当前激活菜单的 index
        console.log(this.$route.path)
        // return this.$route.path.replace('/personal', '/');
      }
  },
 }
</script>
<style>
.sidebar{
    width:260px;
  background: #F8FAFA;
  float: left;
  padding-bottom:200px;
}
.sidebar .el-menu{
   background: #F8FAFA;
}
.sidebar .el-menu-item, .sidebar .el-submenu__title{
    height:60px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}
.personal_icon_img{
  width:150px;
  height:150px;
  display: block;
margin: 30px auto 0;
}
.personal_name{
  height:80px;
  line-height: 80px;
  font-size: 18px;
  text-align: center;
}
</style>