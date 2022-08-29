<template>
  <div class="site-aside-container">
    <Avatar
      url="http://5b0988e595225.cdn.sohucs.com/images/20191023/33ad80894f3240e3887acc5b80bf729a.jpeg"
    />
    <h1 class="title">我的空间</h1>
    <Menu />
    <Contact />
    <p class="footer">备案号：8888</p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-img {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  text-align: center;
  font-size: 1.2em;
  color: #fff;
}
</style>