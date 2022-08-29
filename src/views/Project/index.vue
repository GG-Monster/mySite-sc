<template>
  <div>
    <ShowProject name="个人网站" src="https://gg-monster.github.io/mySite/dist/index.html" height="800" width="1000" />
    <ShowProject name="怪兽记账簿" src="https://gg-monster.github.io/moneyWebsite/index.html" height="800" width="500" />
    <ShowProject name="ui-造轮子" src="https://gg-monster.github.io/Vue-ui-2.0" height="900" width="1000" />

  </div>

</template>

<script>
import  ShowProject from '@/components/ShowProject';
export default {
  components: { ShowProject, },
  data() { 
    return { 
     
    }
  },

}
</script>

<style lang="less" scoped>

</style>