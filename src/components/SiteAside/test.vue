<template>
  <div class="test-container">
    <SiteAside />
    siteaside
  </div>
</template>

<script>
import SiteAside from "./index";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
}
</style>