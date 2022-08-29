<template>
    <div class="test-container">
        xdcfvghjgf
        <ShowProject />
    </div>
</template>

<script>
import ShowProject from "./index.vue";
import "@/styles/global.less";
export default {
    components: {
        ShowProject,
    },
};
</script>

<style>
.test-container {
    width: 400px;
    height: 600px;
    border: 2px solid red;
    background: #000;
    margin: 0 auto;
}
</style>