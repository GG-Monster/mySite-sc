<template>
  <div>
    <h1>App 组件</h1>
    <Avatar
      url="http://5b0988e595225.cdn.sohucs.com/images/20191023/33ad80894f3240e3887acc5b80bf729a.jpeg"
      :size="100"
    />
    <Avatar
      url="http://5b0988e595225.cdn.sohucs.com/images/20191023/33ad80894f3240e3887acc5b80bf729a.jpeg"
      :size="60"
    />
    <!-- <Icon type="arrowDown" /> -->
  </div>
</template>

<script>
import Avatar from "./";
// import Icon from "./components/Icon";
export default {
  name: "App",
  components: {
    Avatar,
    // Icon,
  },
};
</script>

<style scoped>
/* .iconfont {
  font-size: 26px;
  color: red;
} */
</style>>
</style>
