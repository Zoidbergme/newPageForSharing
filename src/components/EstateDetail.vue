<template>
  <div>
    <ad></ad>
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
  components: { Preview, Ad, Typesearch }
};
</script>
<style>
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