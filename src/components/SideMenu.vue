<template>
 <div class="sidebar">
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
     position: absolute;
  left:0;
  top:0;
}
.sidebar .el-menu-item, .sidebar .el-submenu__title{
    height:60px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}
</style>