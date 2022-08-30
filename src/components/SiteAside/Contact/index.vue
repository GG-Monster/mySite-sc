<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/GG-Monster" target="_blank">
        <div class="icon-weixin-git">
          <Icon type="github" />
        </div>
        <span> 我的开源项目 </span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon-weixin-git">
          <Icon type="weixin" />
        </div>
        <span>GG_Monster8</span>
      </a>
      <div class="pop">
        <img src="@/images/wechat.jpeg" alt="微信二维码" />
      </div>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=547565105&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon-all">
          <Icon type="qq" />
        </div>
        <span>547565105</span>
      </a>
      <div class="pop">
        <img src="@/images/qq.jpeg" alt="QQ二维码" />
      </div>
    </li>

    <li>
      <a href="mailto:lilili925@icloud.com">
        <div class="icon-all">
          <Icon type="mail" />
        </div>
        <span> lilili925@icloud.com </span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 14px;
    }
  }
  .icon {
    font-size: 25px;
    width: 36px;
  }
  .icon-weixin-git {
    font-size: 25px;
    width: 36px;
    text-indent: -3px;
  }
  .icon-all {
    font-size: 22px;
    width: 36px;
  }

  .pop {
    position: absolute;
    transform: scaleY(0);
    transform-origin: center bottom; //展示二维码的效果从底层向上升起
    transition: 0.3s;
    left: 0;
    bottom: @itemHeight+5px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 10px;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: #fff;
      bottom: -5px;
    }
  }
}
</style>