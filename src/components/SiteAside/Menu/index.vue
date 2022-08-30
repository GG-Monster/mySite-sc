<template>
  <nav class="menu-container">
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>
<script>
//以下是router-link里的属性
//class="{ // selected: isSelected(item),
//}"
//:exact="item.exact"绑定到item.exact
import Icon from "@/components/Icon";
export default {
  data() {
    //以数组形式返回
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "博客",
          icon: "blog",
          exact: false, //激活状态是否要精确匹配
          // startWith:true,//如果当前路径以link开头，则当前菜单选中
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
  // methods: {
  //   isSelected(item) {
  //     var link = item.link.toLowerCase();
  //     var curPathname = location.pathname.toLowerCase();
  //     if (item.startwith) {
  //       return curPathname.startWith(link);
  //     } else {
  //       return curPathname === link;
  //     }
  //   },
  // },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%);
    }
  }
}
</style>