<template>
  <div>
    <ad></ad>
    <div class="uniqueGetBack" @click="getBack">
    </div>
    <preview />
    <typesearch />
  </div>
</template>

<script>
import Preview from "./Preview";
import Ad from "./Ad";
import Typesearch from "./Typesearch";

export default {
  name: "App",
  components: { Preview, Ad, Typesearch },
  methods:{
    getBack(){
      // let id = this.$route.query.id
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.uniqueGetBack{
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 0.1rem;
  /* margin-top: 0.5rem; */
  background-image: url('../assets/back.png');
  background-size: cover
  /* font-size: 24px; */
  /* padding-left: 0.2rem; */
  /* font-weight: bold; */
  /* text-align: left */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
  padding-top: 0.46rem;
}
</style>