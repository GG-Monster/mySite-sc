<template>
  <div>
    <button @click="boxshow = !boxshow">{{name}}</button>
    <div class="box" 
    :style="boxshow?{width:widthValue,height:heightValue}:{width:0,height:0}">
      <iframe :src="src" frameborder="0" height="100%" width="100%"></iframe>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          boxshow: false,
          widthValue: this.width+'px',
          heightValue:this.height+'px',
        }
  },
  props: {
    name: {type:String},
    src: { type: String, },
    width: { type: String },
    height: {type:String},

  },
}

</script>
<style  scoped>
button{
  width: 300px;
  height: 80px;
  background-color: rgb(56, 67, 67);
  color: azure;
  border: none;
}
.box {

  background-color: transparent;
  transition: height 0.3s ease;
  border: 1px solid #cdcdcd;
  /* display: block; */
}

/* .box-active {
  height: 800px;
  width: 400px;
} */

/* .box-no {
  height: 0;
  width: 0;
} */
</style>