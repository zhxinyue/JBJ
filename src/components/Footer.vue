<template>
  <div id="footer">
    <div class="footer_wrap">
      <h5 class="footer_title">My Account</h5>
      <p class="footer_p">My Orders</p>
      <p class="footer_p">Personal Hustomization</p>
      <p class="footer_p">Orders History</p>
    </div>
    <div class="footer_wrap">
      <h5 class="footer_title">Contact Information</h5>
      <p class="footer_p">Support Email:</p>
      <p class="footer_p">Working Days/Hours:</p>
      <p class="footer_p">Address</p>
    </div>
    <div class="footer_wrap">
      <h5 class="footer_title">More links</h5>
      <p class="footer_p">About US</p>
      <p class="footer_p">Privacy Policy</p>
      <p class="footer_p">Terms & Conditions</p>
      <p class="footer_p">Web Map</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
#footer {
  width: 100%;
  height: 350px;
  background: #88c6c6;
  padding: 30px 55px 0;
  box-sizing: border-box;
}
.footer_wrap {
  float: left;
  width: 320px;
  height: 100%;
  margin-right: 200px;
}
.footer_title {
  font-size: 26px;
  color: #eb5757;
  font-weight: bold;
  margin-bottom: 30px;
}
.footer_p {
  font-size: 26px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
  padding-left: 30px;
  background: url(../assets/img/icon1.png) no-repeat left center;
}
</style>;